import {useState} from "react";
import classNames from "classnames";
import {IoSearch} from "react-icons/io5";

interface Props {
    handleSearch : (arg: string) => void;
    className? : string;
    placeholder? : string;
}

export function SearchBar({handleSearch, placeholder ,className, ...props}: Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(searchTerm);
    }
    return (
        <div className="relative">
            <form onSubmit={handleSubmit}>
                <input
                    {...props}
                    type="text"
                    className={classNames('w-full py-0.5 pl-6 px-2 bg-white rounded-lg border border-gray-200 focus:border-blue-200',className)}
                    value={searchTerm}
                    onChange={e => {setSearchTerm(e.target.value)}}
                    placeholder={placeholder}
                />
            </form>
            <div
                className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-1 text-gray-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <IoSearch/>
            </div>
        </div>
    )
}