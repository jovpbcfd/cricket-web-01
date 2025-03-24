'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Breadcrumb from "./breadcrumb";

function Menu() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" className="text-white"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

function Close() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="text-white"><path d="M18 6 6 18" /><path d="m6 6 12 12" />
        </svg>
    )
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="bg-[linear-gradient(to_right,#AC0E10_17%,#D20C14_81%)] shadow-md relative w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 md:py-4 lg:px-8">
                    <div className="flex justify-between items-center h-25">
                        {/* Logo */}
                        <Link href="/" className="">
                            <Image src="/img/rcb-logo.webp" alt="Logo" className="h-20 w-20" width={100} height={120} />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/" className="text-white hover:text-white/50">Home</Link>
                            <Link href="/news" className="text-white hover:text-white/50">News</Link>
                            <Link href="/matches" className="text-white hover:text-white/50">Matches</Link>
                            {/* <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
                            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link> */}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                            {isOpen ? <Close /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden bg-[linear-gradient(to_right,#AC0E10_17%,#D20C14_81%)] shadow-md absolute w-full left-0 top-16 flex flex-col space-y-4 p-4">
                        <Link href="/" className="text-white hover:text-white/50" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/news" className="text-white hover:text-white/50" onClick={() => setIsOpen(false)}>News</Link>
                        <Link href="/matches" className="text-white hover:text-white/50" onClick={() => setIsOpen(false)}>Matches</Link>
                    </nav>
                )}
            </header>
            <Breadcrumb />
        </>
    );
}
