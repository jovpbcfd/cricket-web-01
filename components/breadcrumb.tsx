'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { matches } from "@/data/match"

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    if (pathSegments.length === 0) return null; // Hide breadcrumb on homepage

    return (
        <nav className="max-w-7xl mx-auto text-sm text-gray-500 px-4 py-2 md:px-10 md:py-5 md:text-md" >
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="text-[#565656] font-bold hover:underline">
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathSegments.length - 1;

                    const getMatch = matches.find((match) => match.id === segment)

                    const getSegment = getMatch !== undefined ? `${getMatch?.team1} vs ${getMatch?.team2}` : segment

                    return (
                        <li key={href} className="flex items-center">
                            <span className="mx-2">/</span>
                            {isLast ? (
                                <span className="text-[#565656]">{decodeURIComponent(getSegment)}</span>
                            ) : (
                                <Link href={href} className="text-[#565656] hover:underline">
                                    {decodeURIComponent(segment)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}