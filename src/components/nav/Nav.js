import Link from "next/link";
import { useEffect } from "react";

function Nav() {
    const tabsStyle = `hover:scale-105`;
    useEffect(() => {
        const tab = document.querySelectorAll('li[select="tab"]');
        const button = document.querySelector("#menu-button");
        const menu = document.querySelector("#menu");
        tab.forEach((item) => {
            item.onclick = () => {
                menu.classList.toggle("hidden");
            };
        });
        button.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }, []);
    return (
        <nav className="absolute right-0 w-full h-full md:w-fit md:flex md:relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-8 w-8 cursor-pointer md:hidden block absolute right-0 mx-8 my-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <ul
                id="menu"
                className="hidden px-8 bg-[var(--primary-color)] absolute top-20 w-full border-y border-slate-700 text-xl  text-white 
                md:flex md:px-0  md:pt-0 md:top-0 md:border-0 md:relative md:items-center"
            >
                <li select="tab" className="">
                    <Link className="md:px-3 py-3 block select-none" href="/">
                        Home
                    </Link>
                </li>
                <li select="tab" className="">
                    <Link className="md:px-3 py-3 block select-none" href="/projects">
                        Project
                    </Link>
                </li>
                <li select="tab" className="">
                    <Link className="md:px-3 py-3 block select-none" href="/about">
                        About
                    </Link>
                </li>
            </ul>
            <div className="hidden md:block active absolute px-2 bottom-4 h-0.5 transition-all bg-transparent left-0 w-20">
                <div className="h-full bg-[#00ffff]"></div>
            </div>
        </nav>
    );
}

export default Nav;
