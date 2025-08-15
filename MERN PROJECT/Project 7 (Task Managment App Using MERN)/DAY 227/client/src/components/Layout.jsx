import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
const Layout = () => {
    return (
        <div className="max-w-screen-sm mx-auto mt-10 p-5 shadow-sm border rounded">
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Layout;