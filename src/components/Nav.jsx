import React, { useEffect, useState } from "react";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
const Nav = ({ isLoged }) => {
    const [openNav, setOpenNav] = useState(false);
    const [openYourSitting, setOpenYourSitting] = useState(false);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link
                to="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                Pages
            </Link>
            <Link
                to="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                Account
            </Link>
            <Link
                to="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                Blocks
            </Link>
            <Link
                to="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                Docs
            </Link>
        </ul>
    );
    return (
        <div>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to="/">Quraan</Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block text-red-800">
                            {navList}
                        </div>
                        {isLoged ? (
                            <div
                                className="bg-[#045b9e] rounded-[50%] p-4 relative cursor-pointer hidden lg:inline-block"
                                onClick={() =>
                                    setOpenYourSitting(!openYourSitting)
                                }
                            >
                                <FaUserCircle
                                    size={30}
                                    className=" rounded-[50%] text-white"
                                />
                                {openYourSitting ? (
                                    <div className="translate-y-[50px]  translate-x-8 absolute top-0 right-0 bg-[#0e86d4] rounded-lg p-6 flex flex-wrap gap-2">
                                        <Link to={"/profile"}>Profile</Link>
                                        <Link to={"/favourate"}>favourate</Link>
                                        <Link to={"/bookmark"}>bookmark</Link>
                                    </div>
                                ) : null}
                            </div>
                        ) : (
                            <div className="flex items-center gap-x-1">
                                <Link to={"/login"}>
                                    <Button
                                        variant="text"
                                        size="sm"
                                        className="hidden lg:inline-block cursor-pointer"
                                    >
                                        Log In
                                    </Button>
                                </Link>
                                <Link to={"/signup"}>
                                    <Button
                                        variant="gradient"
                                        size="sm"
                                        className="hidden lg:inline-block cursor-pointer"
                                    >
                                        Sign in
                                    </Button>
                                </Link>
                            </div>
                        )}

                        <IconButton
                            variant="text"
                            className="cursor-pointer ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6 bg-amber-900"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 bg-amber-900"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse className="text-red-700 " open={openNav}>
                    {navList}
                    {isLoged ? (
                        <div
                            className="bg-[#045b9e] rounded-[50%] p-4 relative cursor-pointer w-[62px]"
                            onClick={() => setOpenYourSitting(!openYourSitting)}
                        >
                            <FaUserCircle
                                size={30}
                                className=" rounded-[50%] text-white"
                            />
                            {openYourSitting ? (
                                <div className="translate-24 translate-y-[-60px] absolute bg-[#0e86d4] rounded-lg p-6 flex  gap-2">
                                    <Link to={"/profile"}>Profile</Link>
                                    <Link to={"/favourate"}>favourate</Link>
                                    <Link to={"/bookmark"}>bookmark</Link>
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <div className="flex items-center justify-between gap-x-1">
                            <Link to={"/login"} className="w-1/2">
                                <Button
                                    fullWidth
                                    variant="text"
                                    size="sm"
                                    className="cursor-pointer"
                                >
                                    Log In
                                </Button>
                            </Link>
                            <Link to={"/signup"} className="w-1/2">
                                <Button
                                    fullWidth
                                    variant="gradient"
                                    size="sm"
                                    className="cursor-pointer"
                                >
                                    Sign in
                                </Button>
                            </Link>
                        </div>
                    )}
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;
