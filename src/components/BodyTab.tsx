interface BodyTabProps {
    updatedBody: (json: JSON) => void;
    body?: string | undefined;
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
            <div className="flex flex-col w-full h-full px-4 py-2">
                <textarea
                    className="w-full h-full p-2 border border-gray-300 rounded"
                    placeholder="Enter JSON here"
                    onChange={handleChange}
                    rows={7}
                    value={body}
                />
            </div>
        </div>
    )
}