import { type KeyValue } from "../store/slices/RequestSlice";
import { KeyValueList } from "./KeyValueList";

interface ParamsTabProps{
    params: KeyValue[];
}

export function ParamsTab({params}: ParamsTabProps ) {
    console.log("ParamsTab", params);
    return (
        <div className="flex flex-col items-center">
            <KeyValueList list={params} params/>
        </div>
    )
}