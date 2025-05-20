import classNames from "classnames";
import { type JSX } from "react";
import type { FieldError } from "react-hook-form";

interface SelectProps {
    options: string[] | JSX.Element[];
    selected?: string;
    onSelect?: (option: string) => void;
    className?: string;
    errors?: FieldError | undefined;
}

export function Select({options, selected, className, onSelect, errors,  ...props}: SelectProps) {
    return (
        <div className={classNames("relative flex items-center", className)}>
            <select
                onChange={(e) => onSelect && onSelect(e.target.value)}
                {...props}
                className={
                    classNames(
                    "w-full h-full px-2 bg-white border cursor-pointer border-gray-300 hover:border-blue-200 focus:border-blue-200 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                    className)
                }
            >
                {options.map((option,index) => (
                    <option defaultChecked={option === selected} key={index}>
                        {option}
                    </option>
                ))}
            </select>
            {
                errors && 
                <span className="text-red-500 text-xs">
                    {errors.message}
                </span>
            }
        </div>
    );

}