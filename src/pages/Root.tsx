import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export function Root() {

    return (
        <>
        <h1>Root Component</h1>
        {/* Add your root component implementation here */}
        <div className="flex flex-row h-screen">
            <SideBar/>
            <Outlet />
        </div>
        </>
    );
}