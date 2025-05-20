import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        data.headers = ['Content-Type: application/json', 'Authorization: Bearer token'];
        console.log(data);
    }

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
            <div className="">
                
            </div>
        </form>
    );
}