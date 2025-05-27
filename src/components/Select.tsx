import classNames from "classnames";
import { type JSX } from "react";
import type { FieldError } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";

interface SelectProps {
    options: string[] | JSX.Element[];
    selectedVal?: string;
    onSelect?: (option: string) => void;
    className?: string;
    errors?: FieldError | undefined;
}

export function Select({options, selectedVal, className, onSelect, errors,  ...props}: SelectProps) {
    const errorClass = errors ? "border-red-500" : "";
    return (
        <div className={classNames("relative flex items-center", className)}>
            <select 
                onChange={(e) => onSelect && onSelect(e.target.value)}
                {...props}
                className={
                    classNames(
                        "w-full h-full px-2 pr-8 bg-white border cursor-pointer border-gray-300 hover:border-blue-200 focus:border-blue-200 focus:ring focus:ring-blue-200 focus:ring-opacity-50 appearance-none",
                        className, errorClass
                    )
                }
                defaultValue={selectedVal}
            >
                {options.map((option, index) => (
                    <option key={index}>
                        {option}
                    </option>
                ))}
            </select>
            {/* Custom arrow */}
            <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <IoIosArrowDown/>
            </span>
            {
                errors && 
                <span className="text-red-500 text-xs">
                    {errors.message}
                </span>
            }
        </div>
    );

}