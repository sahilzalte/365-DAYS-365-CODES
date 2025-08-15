import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RouteIndex, RouteTaskList } from "../Helper/Routename";

const Navigation = () => {
    const location = useLocation();

    const buttonClass =
        "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100";

    const activeButtonClass =
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none";

    return (
        <div className="pb-5 border-b flex gap-5">
            <NavLink
                to={RouteIndex}
                className={({ isActive }) =>
                    isActive ? activeButtonClass : buttonClass
                }
            >
                Add Task
            </NavLink>
            <NavLink
                to={RouteTaskList}
                className={({ isActive }) =>
                    isActive ? activeButtonClass : buttonClass
                }
            >
                My Task
            </NavLink>
        </div>
    );
};

export default Navigation;