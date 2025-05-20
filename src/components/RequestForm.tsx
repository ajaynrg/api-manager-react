import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FormFields{
    method: string;
    url: string;
}

export default function RequestForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 mt-3 mx-5">
                <Select
                    options={["GET", "POST", "PUT", "DELETE"]}
                    className="col-span-2 h-10 rounded-l-sm rounded-r-none shadow-none"
                    {...register("method", { required: true })}
                    errors={errors.method}
                />
                <Input
                    className="col-span-9 h-10 rounded-none"
                    placeholder="URL"
                    {...register("url", { required: true })}
                    errors={errors.url}
                />
                <Button
                    className="col-span-1 h-10 rounded-none rounded-r-sm"
                    type="submit"
                >Send</Button>
            </div>
        </form>
    );
}