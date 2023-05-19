"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Header() {
    const pathname = usePathname();
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
    });
    const [navbar, setNavbar] = useState(false);
    return (
        <header className="w-full h-20 flex justify-between items-center bg-[#3d3d3d] ">
            <Link className=" ml-4  sm:ml-10" href="/">
                <h1 className="text-5xl text-white font-bold">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1cbff0] to-[#f0a]">
                        NV
                    </span>
                    <span className="text-[#fff] text-6xl ">B</span>
                </h1>
            </Link>
            <nav>
                <ul className="flex text-white text-xl mr-0 sm:mr-10">
                    <li className={`mx-1 hover:rounded-2xl hover:bg-[#1b1b1b] ${pathname == "/" ? "underline" : ""}`}>
                        <Link className="px-3 py-3 block" href="/">
                            Home
                        </Link>
                    </li>
                    <li
                        className={`mx-1 hover:rounded-2xl hover:bg-[#1b1b1b] ${
                            pathname == "/projects" ? "underline" : ""
                        }`}
                    >
                        <Link className="px-3 py-3 block" href="/projects">
                            Project
                        </Link>
                    </li>
                    <li
                        className={`mx-1 hover:rounded-2xl hover:bg-[#1b1b1b] ${
                            pathname == "/about" ? "underline" : ""
                        }`}
                    >
                        <Link className="px-3 py-3 block" href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
