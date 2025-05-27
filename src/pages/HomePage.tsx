import RequestForm from "../components/RequestForm";
import ResponseViewer from "../components/ResposnseViewer";

export default function HomePage() {
    return (
        <div className="flex flex-col h-full">
            <div className="md:h-1/2 overflow-auto min-h-50 resize-y border-b border-gray-200">
                <RequestForm/>
            </div>
            <div className="md:h-1/2 overflow-auto">
                <ResponseViewer/>
            </div>
        </div>
    );
}