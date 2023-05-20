"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function Header() {
    const pathname = usePathname();
    const tabsStyle = ` hover:rounded-2xl hover:scale-105`;

    useEffect(() => {
        const tabs = document.querySelectorAll('li[select="tab"]');
        const activeTab = document.querySelector(".active");

        if (pathname == "/") {
            activeTab.style.width = tabs[0].clientWidth + "px";
            activeTab.style.left = 0;
        } else if (pathname == "/projects") {
            activeTab.style.width = tabs[1].clientWidth + "px";
            activeTab.style.left = tabs[0].clientWidth + "px";
        } else {
            activeTab.style.width = tabs[2].clientWidth + "px";
            activeTab.style.left = tabs[0].clientWidth + tabs[1].clientWidth + "px";
        }
    });

    return (
        <header className=" w-full px-8 h-20 flex fixed top-0 z-10  justify-between items-center bg-[var(--primary-color)] ">
            <Link className=" " href="/">
                <h1 className="text-5xl text-white font-bold">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1cbff0] to-[#f0a]">
                        NV
                    </span>
                    <span className="text-[#fff] text-6xl ">B</span>
                </h1>
            </Link>
            <nav className="relative">
                <ul className="flex text-white text-xl ">
                    <li select="tab" className={`${tabsStyle} `}>
                        <Link className="px-3 py-3 block" href="/">
                            Home
                        </Link>
                    </li>
                    <li select="tab" className={`${tabsStyle}`}>
                        <Link className="px-3 py-3 block" href="/projects">
                            Project
                        </Link>
                    </li>
                    <li select="tab" className={`${tabsStyle} `}>
                        <Link className="px-3 py-3 block" href="/about">
                            About
                        </Link>
                    </li>
                </ul>
                <div className="active absolute px-2 bottom-2 h-0.5 transition-all bg-transparent left-0 w-20">
                    <div className="h-full bg-[#df849f]"></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
