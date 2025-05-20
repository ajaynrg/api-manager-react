import classNames from "classnames";
import type { FieldError } from "react-hook-form";

interface InputProps {
    handleInput? : (arg: string) => void;
    className? : string;
    placeholder? : string;
    errors?: FieldError | undefined;
}

export function Input({handleInput, placeholder, className,errors, ...props}: InputProps) {
    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => handleInput && handleInput(e.target.value)}
                className={classNames('w-full py-0.5 pl-6 px-2 bg-white border border-gray-200 focus:border-blue-200',className)}
                {...props}
            />
            {
                errors && 
                <span className="text-red-500 text-xs">
                    {errors.message}
                </span>
            }
        </div>
    )
}