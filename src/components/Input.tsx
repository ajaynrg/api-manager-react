import classNames from "classnames";

interface InputProps {
    handleInput : (arg: string) => void;
    className? : string;
    placeholder? : string;
}

export function Input({handleInput, placeholder, className, ...props}: InputProps) {

    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => handleInput(e.target.value)}
                className={classNames('w-full py-0.5 pl-6 px-2 bg-white border border-gray-200 focus:border-blue-200',className)}
                {...props}
            />
        </>
    )
}