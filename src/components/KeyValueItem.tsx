export function KeyValueItem() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Key</span>
                <span className="text-sm font-medium text-gray-700">Value</span>
            </div>
            <div className="flex items-center justify-between">
                <input
                    type="text"
                    placeholder="Key"
                    className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Value"
                    className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
            </div>
        </div>
    );
}