import { type KeyValue } from "../store/slices/RequestSlice";

interface ParamsTabProps{
    params: KeyValue[];
}

export function ParamsTab({params}: ParamsTabProps ) {
    console.log("ParamsTab", params);
    return (
        <>
            <p>ParamsTab</p>
        </>
    )
}