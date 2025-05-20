import { Input } from "./Input";
import { useState } from "react";
import { Select } from "./Select";
import { Button } from "./Button";

export default function RequestForm() {
    const [url, setUrl] = useState<string>("");
    const [method, setMethod] = useState<string>("GET");

    const handleMethodChange = (newMethod: string) => {
        setMethod(newMethod);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(e.target);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 mt-3 mx-5">
                <Select
                    options={["GET", "POST", "PUT", "DELETE"]}
                    onSelect={handleMethodChange}
                    className="col-span-2 h-10 rounded-l-sm rounded-r-none shadow-none"
                />
                <Input
                    className="col-span-9 h-10 rounded-none"
                    placeholder="URL"
                    handleInput={setUrl}
                />
                <Button
                    className="col-span-1 h-10 rounded-none rounded-r-sm"
                    type="submit"
                    onClick={() => {}}
                >Send</Button>
            </div>
        </form>
    );
}