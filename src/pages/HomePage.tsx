import RequestForm from "../components/RequestForm";
import ResponseViewer from "../components/ResposnseViewer";

export default function HomePage() {
    return (
        <div className="flex flex-col h-full gap-y-3">
            <div className="h-1/2 overflow-auto">
                <RequestForm/>
            </div>
            <div className="h-1/2 overflow-auto">
                <ResponseViewer/>
            </div>
        </div>
    );
}