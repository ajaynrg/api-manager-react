interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string,
}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-gray-400 ${className}`}
        {...props}
        >
        {children}
        </button>
    );
}