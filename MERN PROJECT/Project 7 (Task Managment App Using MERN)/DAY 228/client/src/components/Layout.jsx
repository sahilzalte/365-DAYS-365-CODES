import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
const Layout = () => {
    return (
        <div className="max-w-screen-sm mx-auto mt-10 p-5 shadow-sm border rounded">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Slide}
            />
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Layout;