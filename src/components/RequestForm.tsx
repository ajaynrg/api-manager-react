import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs } from "./Tabs";
import { HeadersTab } from "./HeadersTab";
import { type JSX } from "react";
import { ParamsTab } from "./ParamsTab";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { BodyTab } from "./BodyTab";
import { setBody } from "../store/slices/RequestSlice";

const formSchema = z.object({
    method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]),
    url: z.string().nonempty("URL is required").url("Invalid URL"),
    headers: z.array(z.string()).optional(),
    body: z.string().optional(),
    params: z.string().optional(),
})

type FormFields = z.infer<typeof formSchema>;

export default function RequestForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(formSchema),
    });
    const { url, body, headers, params, method } = useSelector((state: RootState) => state.request);
    const dispatch: AppDispatch = useDispatch();

    const [activeTab, setActiveTab] = useState("Headers");

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        data.headers = ['Content-Type: application/json', 'Authorization: Bearer token'];
        console.log(data);
    }

    const handleBodyChange = (json: JSON) => {
        console.log("Body changed", json);
        dispatch(setBody(JSON.stringify(json)));
    }

    const renderTab = (): JSX.Element => {
        switch (activeTab) {
            case "Headers":
                return <HeadersTab headers={headers}/>;
            case "Body":
                return <BodyTab body={body} updatedBody={(body)=> handleBodyChange(body)}/>;
            case "Params":
                return <ParamsTab params={params}/>;
            default:
                return <></>;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-10 mt-3 mx-5">
                <div className="col-span-1">
                    <Select
                        options={["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]}
                        className="h-10 rounded-l-sm rounded-r-none shadow-none"
                        {...register("method")}
                        errors={errors.method}
                        selectedVal={method}
                    />
                </div>
                <div className="col-span-8">
                    <Input
                        className="h-10 rounded-none"
                        placeholder="URL"
                        {...register("url")}
                        errors={errors.url}
                        value={url}
                    />
                </div>
                <div className="col-span-1">
                    <Button
                        className="h-10 w-full rounded-none rounded-r-sm"
                        type="submit"
                        disabled={isSubmitting}
                    >{isSubmitting ? 'Sending': 'Send'}</Button>
                </div>
            </div>
            <div className="flex flex-col w-full gap-y-3">
                <Tabs
                    tabs={["Headers", "Body", "Params"]}
                    className="mt-3 mx-5"
                    activeTab={activeTab}
                    onTabClick={setActiveTab}
                />
                <div className="mx-5 my-3">
                    {renderTab()}
                </div>
            </div>
        </form>
    );
}