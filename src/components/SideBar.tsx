import { CollectionList } from "./CollectionList";
import HistoryList from "./HistoryList";
export function SideBar() {
  return (
    <div className="flex flex-col h-full gap-y-3">
        <div className="overflow-auto h-1/2">
            <CollectionList/>
        </div>
        <div className="overflow-auto h-1/2">
            <HistoryList/>
        </div>
    </div>
  );
}