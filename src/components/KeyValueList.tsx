import type { KeyValue } from "../store/slices/RequestSlice";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { Input } from "./Input";
import { Select } from "./Select";
import { httpHeaderKeys } from "./KeyValueItem";

interface KeyValueItemProps {
    list: KeyValue[];
    headers?: boolean;
    params?: boolean;
}

interface ItemsType extends KeyValue {
    checked?: boolean;
}

export function KeyValueList({list, headers}: KeyValueItemProps) {

    const [items, setItems] = useState<ItemsType[]>(list);

    const handleCheckboxChange = (index: number) => {
        const updatedItems = [...items];
        updatedItems[index].checked = !updatedItems[index].checked;
        setItems(updatedItems);
        // console.log("Checkbox changed", updatedItems[index].checked);
    };

    const handleAddClick = () => {
        const newItem: ItemsType = { key: "", value: "", description: "" };
        setItems([...items, newItem]);
    };

    const handleDeleteClick = (index: number) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleValueChange = (index: number, value: string) => {
        const updatedItems = [...items];
        updatedItems[index].value = value;
        setItems(updatedItems);
    };

    const handleKeyChange = (index: number, value: string) => {
        const updatedItems = [...items];
        updatedItems[index].key = value;
        setItems(updatedItems);
    };

    const handleDescriptionChange = (index: number, value: string) => {
        const updatedItems = [...items];
        updatedItems[index].description = value;
        setItems(updatedItems);
    };

    const handleSelectAll = (checked: boolean) => {
        const updatedItems = items.map(item => ({ ...item, checked }));
        setItems(updatedItems);
    };

    const renderedKeyValueItems  = items.map((item, index) => {
        return <tr key={index} className="border-b border-gray-200 h-12">
            <td className="text-left pl-5 pt-1">
                <input 
                    type="checkbox" 
                    checked={item.checked || false}
                    onChange={()=>{handleCheckboxChange(index)}} 
                    className="w-4 h-4 cursor-pointer"/>
            </td>
            <td className="text-left px-5">
                {
                    headers ? 
                    <Select
                        options={httpHeaderKeys}
                        selectedVal={item.key}
                        onSelect={(value)=>{handleKeyChange(index, value)}}
                        className="h-8 text-s rounded-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    :
                    <Input
                        placeholder="Key"
                        className="h-8 text-s rounded-sm focus:border-blue-500 focus:ring-blue-500"
                        value={item.key}
                        handleInput={(val) => {handleKeyChange(index, val)}}
                    />
                }
            </td>
            <td className="text-left px-5">
                <Input
                    placeholder="Value"
                    className="h-8 text-s rounded-sm focus:border-blue-500 focus:ring-blue-500"
                    value={item.value}
                    handleInput={(val) => {handleValueChange(index, val)}}
                />
            </td>
            <td className="text-left px-5">
                <span
                    className="flex flex-row justify-between mr-20">
                    <span className="w-4/5">
                        <Input
                            placeholder="Description"
                            className="h-8 text-s rounded-sm focus:border-blue-500 focus:ring-blue-500"
                            value={item.description}
                            handleInput={(val) => {handleDescriptionChange(index, val)}}
                        />
                    </span>
                    <span onClick={() => handleDeleteClick(index)} className="text-lg text-gray-500 cursor-pointer self-center mt-1 hover:text-red-500">
                            <AiFillDelete />
                    </span>
                </span>
            </td>
        </tr>;
    });
    return (
        <div className="flex flex-col gap-2 w-full mx-8">
            <table className="w-full">
                <thead className="border-b border-gray-200 bg-gray-200 h-10">
                    <tr>
                        <th className="text-left pl-5 pt-1">
                            <input onChange={
                                (e) => {handleSelectAll(e.target.checked)}
                            } type="checkbox" className="w-4 h-4 cursor-pointer"/>
                        </th>
                        <th className="text-left px-5">Key</th>
                        <th className="text-left px-5">Value</th>
                        <th className="text-left px-5">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedKeyValueItems}
                </tbody>
            </table>
            <div 
                onClick={handleAddClick}
                className="flex flex-row gap-1 text-gray-500 text-sm cursor-pointer hover:text-blue-500">
                Add
                <span className="text-lg self-center">
                    <IoMdAddCircle />
                </span>
            </div>
        </div>
    );
}