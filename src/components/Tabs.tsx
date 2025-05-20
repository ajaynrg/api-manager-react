import classNames from "classnames";

interface TabProps {
    tabs: string[];
    activeTab: string;
    onTabClick: (name: string) => void;
    className?: string;
}

export function Tabs({tabs, activeTab, onTabClick, className}: TabProps) {
    const renderedTabs = tabs.map((tab: string) => {
        return (
            <div key={tab} onClick={() => onTabClick(tab) } 
            className={classNames(
                `p-2 text-xs font-bold text-gray-500 cursor-pointer ${activeTab === tab ? "bg-gray-200" : ""}`
                , className
            )}>
                {tab}
            </div>
        )
    })
    return (
        <div className="flex flex-row w-full border-b-2 border-gray-200">
            {renderedTabs}
        </div>
    )
}