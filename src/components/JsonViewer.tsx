import ReactJson from 'react-json-view'

export function JsonViewer({ json }: { json: string }) {
    try {
        const parsedJson = JSON.parse(json);
        return (
            <div className="overflow-auto h-full w-full">
                <ReactJson
                    src={parsedJson}
                    name={false}
                    displayDataTypes={false}
                    enableClipboard={false}
                    displayObjectSize={false}
                    style={{ fontSize: '14px' }}
                />
            </div>
        );
    } catch (error) {
        return (
            <div className="text-red-500">
                Invalid JSON: {error instanceof Error ? error.message : 'Unknown error'}
            </div>
        );
    }
}