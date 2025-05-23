import { Input } from "./Input";
import { Select } from "./Select";

export const httpHeaderKeys = [
    'Accept',
    'Accept-Encoding',
    'Authorization',
    'Content-Type',
    'User-Agent',
    'Cache-Control',
    'Cookie',
    'Set-Cookie',
    'Content-Length',
    'Content-Disposition',
    'Date',
    'Host',
    'Location',
    'Referer',
    'Server',
    'X-Forwarded-For'
];


export function KeyValueItem({k, v}: { k: string; v: string }) {
    return (
        <div className="flex flex-col gap-2 mt-2 w-full">
            <div className="flex flex-row gap-2">
                <Select
                    className=""
                    options={httpHeaderKeys}
                    selectedVal={k}
                    onSelect={(value) => {
                        // Handle key change
                        console.log("Key changed to", value);
                    }}
                />
                <Input
                    placeholder="Value"
                    className="p-1"
                    value={v}
                    handleInput={(value) => {
                        // Handle value change
                        console.log("Value changed to", value);
                    }}
                />
            </div>
        </div>
    );
}