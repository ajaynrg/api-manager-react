import RequestForm from "../components/RequestForm";
import ResponseViewer from "../components/ResposnseViewer";

export default function HomePage() {
    return (
        <div className="flex flex-col h-full gap-y-3">
            <div className="md:h-1/2 overflow-auto min-h-50 resize-y border-b border-black">
                <RequestForm/>
            </div>
            <div className="md:h-1/2 overflow-auto">
                <ResponseViewer/>
            </div>
        </div>
    );
}