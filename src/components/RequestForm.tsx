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
                <div className="col-span-2">
                    <Select
                        options={["GET", "POST", "PUT", "DELETE"]}
                        className="h-10 rounded-l-sm rounded-r-none shadow-none"
                        {...register("method", 
                            { required: 'HTTP Method is required' })
                        }
                        errors={errors.method}
                    />
                </div>
                <div className="col-span-9">
                    <Input
                        className="h-10 rounded-none"
                        placeholder="URL"
                        {...register("url", 
                            { required: 'URL is required' })
                        }
                        errors={errors.url}
                    />
                </div>
                <div className="col-span-1">
                    <Button
                        className="h-10 rounded-none rounded-r-sm"
                        type="submit"
                    >Send</Button>
                </div>
            </div>
        </form>
    );
}