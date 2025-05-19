import { Outlet } from "react-router-dom";

export function Root() {

    return (
        <>
        <h1>Root Component</h1>
        {/* Add your root component implementation here */}
        <Outlet />
        </>
    );
}