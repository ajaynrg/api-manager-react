import classNames from "classnames";
import { type JSX } from "react";

interface SelectProps {
    options: string[] | JSX.Element[];
    selected?: string;
    onSelect: (option: string) => void;
    className?: string;
}

export function Select({options, selected, className, onSelect, ...props}: SelectProps) {
    return (
        <div className={className}>
            <select
                onChange={(e) => {onSelect(e.target.value)}}
                {...props}
                className={
                    classNames(
                    "w-full h-full px-2 bg-white border cursor-pointer border-gray-300 hover:border-blue-200 focus:border-blue-200 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                    className)
                }
            >
                {options.map((option) => (
                    <option defaultChecked={option === selected}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );

}