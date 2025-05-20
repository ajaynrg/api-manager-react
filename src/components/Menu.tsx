import { useState } from "react";
import type { JSX } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

interface MenuProps {
    name: string;
    items: string[] | JSX.Element[];
}

export function Menu({ name, items}: MenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const renderItems = items.map((item, index) => {
        return (
            <div key={index} className="p-2 text-xs font-bold text-gray-500 hover:bg-gray-100 cursor-pointer">
                {item}
            </div>
        );
    })
    return (
        <>
            <div onClick={toggleMenu} className="flex sticky top-0 w-full z-50 bg-white hover:bg-gray-100 cursor-pointer">
                <span className="p-2 text-xs font-bold text-gray-500">{name}</span>
                <span className="ml-auto p-2 text-xs font-bold text-gray-500">
                    {isOpen ? <MdKeyboardArrowUp className="h-5 w-5" /> : <MdKeyboardArrowDown className="h-5 w-5"/>}
                </span>
            </div>
            <div className={`ml-5 border-l-1 border-gray-200 overflow-auto ${isOpen ? "block" : "hidden"}`}>
                {renderItems}
            </div>
        </>
    );
}