import { JsonViewer } from "./JsonViewer";

export default function ResponseViewer() {
    return (
        <>
            <div className="flex flex-col h-full">
                <div className="flex justify-between border-b border-gray-200 p-2 bg-gray-50">
                    <div className="text-sm font-semibold ml-4">Body</div>
                    <div className="text-sm text-gray-400 mr-4 font-semibold">
                        Status code: 
                        <span className="ml-1 font-medium">
                            <span className="text-green-500">200</span>
                        </span>
                    </div>
                </div>
                <div className="flex-1 overflow-auto mx-4 p-2">
                    <JsonViewer json='{"message": "This is a sample response"}' />
                </div>
            </div>
        </>
    );
}