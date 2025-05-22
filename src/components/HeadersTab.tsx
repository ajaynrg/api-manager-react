import type { KeyValue } from "../store/slices/RequestSlice";

interface HeadersTabProps{
    headers: KeyValue[];
}

export function HeadersTab({headers}: HeadersTabProps ){
    console.log("HeadersTab", headers);
    return (
        <>
            <p>HeadersTab</p>
        </>
    )
}