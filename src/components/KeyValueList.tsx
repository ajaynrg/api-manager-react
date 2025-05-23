import type { KeyValue } from "../store/slices/RequestSlice";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

interface KeyValueItemProps {
    list: KeyValue[];
}

interface ItemsType extends KeyValue {
    checked?: boolean;
}

export function KeyValueList({list}: KeyValueItemProps) {

    const [items, setItems] = useState<ItemsType[]>(list);

    useEffect(() => {
        setItems(list);
        console.log('items', items);
    }, [list]);

    const handleCheckboxChange = (index: number) => {
        const updatedItems = [...items];
        updatedItems[index].checked = !updatedItems[index].checked;
        setItems(updatedItems);
    };

    const renderedKeyValueItems  = items.map((item, index) => {
        return <tr key={index} className="border-b border-gray-200 h-12">
            <td className="text-left">
                <input type="checkbox" checked onChange={()=>{handleCheckboxChange(index)}} className="w-4 h-4 cursor-pointer"/>
            </td>
            <td>{item.key}</td>
            <td>{item.value}</td>
            <td>
                <span className="flex flex-row justify-between mr-20">
                    <span>{item.description}</span>
                    <span className="text-lg text-gray-500 cursor-pointer self-center mt-1 hover:text-red-500">
                            <AiFillDelete />
                    </span>
                </span>
            </td>
        </tr>;
    });
    return (
        <div className="flex flex-col gap-2 w-full mx-14">
            <table className="w-full">
                <thead className="border-b border-gray-200 bg-gray-200 h-10">
                    <tr>
                        <th className="text-left"></th>
                        <th className="text-left">Key</th>
                        <th className="text-left">Value</th>
                        <th className="text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedKeyValueItems}
                </tbody>
            </table>
        </div>
    );
}