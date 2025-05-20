import { BiHistory } from "react-icons/bi";

export default function HistoryList() {
    return (
        <div className="ml-10">
            <p className="flex sticky top-0 w-full border border-gray-200">
                <span className="p-2 text-sm font-bold text-gray-600">HISTORY</span>
                <span className="self-center">
                    <BiHistory className="h-4 w-4 text-gray-500" />
                </span>
            </p>
            <div className="overflow-auto">
            </div>
            {/* Add your history list implementation here */}
        </div>
    );
}