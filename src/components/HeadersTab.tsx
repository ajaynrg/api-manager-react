import type { KeyValue } from "../store/slices/RequestSlice";
import { KeyValueList } from "./KeyValueList";

interface HeadersTabProps{
    headers: KeyValue[];
}

export function HeadersTab({headers}: HeadersTabProps ){
    return (
        <div className="flex flex-col items-center">
            <KeyValueList list={headers} headers/>
        </div>
    )
}