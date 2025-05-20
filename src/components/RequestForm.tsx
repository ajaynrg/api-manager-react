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
import { BodyTab } from "./BodyTab";
import { ParamsTab } from "./ParamsTab";
import { useDispatch } from "react-redux";
import { setBody } from "../store";

const formSchema = z.object({
    method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]),
    url: z.string().url("Invalid URL").nonempty("URL is required"),
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


    // const body = useSelector((state: { body: { value: string } }) => state.body.value);
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState("Headers");

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        data.headers = ['Content-Type: application/json', 'Authorization: Bearer token'];
        console.log(data);
    }

    const handleBodyChange = (json: JSON) => {
        console.log("Body changed", json);
        dispatch(setBody({payload: JSON.stringify(json)}));
    }

    const renderTab = (): JSX.Element => {
        switch (activeTab) {
            case "Headers":
                return <HeadersTab/>;
            case "Body":
                return <BodyTab updatedBody={(body)=> handleBodyChange(body)}/>;
            case "Params":
                return <ParamsTab/>;
            default:
                return <></>;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 mt-3 mx-5">
                <div className="col-span-2">
                    <Select
                        options={["GET", "POST", "PUT", "DELETE"]}
                        className="h-10 rounded-l-sm rounded-r-none shadow-none"
                        {...register("method")}
                        errors={errors.method}
                    />
                </div>
                <div className="col-span-9">
                    <Input
                        className="h-10 rounded-none"
                        placeholder="URL"
                        {...register("url")}
                        errors={errors.url}
                    />
                </div>
                <div className="col-span-1">
                    <Button
                        className="h-10 rounded-none rounded-r-sm"
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