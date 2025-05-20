interface BodyTabProps {
    updatedBody: (json: JSON) => void;
    body: string;
}

export function BodyTab({updatedBody,body}: BodyTabProps) {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        try {
            const json = JSON.parse(e.target.value);
            updatedBody(json);
        } catch (error) {
            console.error("Invalid JSON", error);
        }
    }

    return (
        <div className="flex flex-col w-full h-full">
            {/* <div className="flex flex-row w-full border-b-2 border-gray-200">
                <div className="p-2 text-xs font-bold text-gray-500 cursor-pointer bg-gray-200">JSON</div>
                <div className="p-2 text-xs font-bold text-gray-500 cursor-pointer">Text</div>
            </div> */}
            <div className="flex flex-col w-full h-full px-4 py-2">
                <textarea
                    className="w-full h-full p-2 border border-gray-300 rounded"
                    placeholder="Enter JSON here"
                    onChange={handleChange}
                    rows={7}
                    value={JSON.stringify(JSON.parse(body), null, 2)}
                />
            </div>
        </div>
    )
}