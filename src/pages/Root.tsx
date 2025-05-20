import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export function Root() {

    return (
        <div className="flex flex-col h-screen">
        {/* Add your root component implementation here */}
            <h1 className="flex sticky top-0 z-50 w-full h-[3rem] text-gray-600 bg-gray-100 shadow-xs">
                <span className="my-2 mx-10 font-bold text-xl">
                    API Client
                </span>
            </h1>
            <div className="grid grid-cols-12 md:h-full">
                <div className="col-span-12 shadow-sm md:col-span-3">
                    <SideBar/>
                </div>
                <div className="col-span-12 md:col-span-9 bg-gray-100">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}