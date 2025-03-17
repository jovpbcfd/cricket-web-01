'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
import { matches as staticMatch } from "@/data/match"

export default function MatchList() {
    const router = useRouter();
    const [matches, setMatches] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const time = setTimeout(() => {
            setMatches(staticMatch.slice(0, 5));
            setLoading(false);
        }, 1500);

        return () => {
            clearTimeout(time)
        }
    }, []);
    return (
        <div className="bg-[#373737] text-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Fri 14 Mar</h3>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-[#282828] text-yellow-400">
                        <th className="p-2">Time</th>
                        <th className="p-2">Match</th>
                        <th className="p-2">1</th>
                        <th className="p-2">X</th>
                        <th className="p-2">2</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ?
                        [...Array(5)].map((_, index) => (
                            <tr key={index} className="border-t border-[#4b4b4b] animate-pulse">
                                <td className="p-2">
                                    <div className="h-6 w-16 bg-[#323232] rounded-md"></div>
                                </td>
                                <td className="p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-[#323232]"></div>
                                        <div className="h-6 w-20 bg-[#323232] rounded-md"></div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-4 h-4 rounded-full bg-[#323232]"></div>
                                        <div className="h-6 w-20 bg-[#323232] rounded-md"></div>
                                    </div>
                                    <div className="h-4 w-16 bg-[#323232] rounded-md mt-1"></div>
                                </td>
                                <td className="p-2">
                                    <div className="h-6 w-10 bg-[#323232] rounded-md"></div>
                                </td>
                                <td className="p-2">
                                    <div className="h-6 w-10 bg-[#323232] rounded-md"></div>
                                </td>
                                <td className="p-2">
                                    <div className="h-6 w-10 bg-[#323232] rounded-md"></div>
                                </td>
                            </tr>
                        ))
                        :
                        matches.map((match) => (
                            <tr
                                key={match.id}
                                className="border-t border-[#4b4b4b] hover:bg-[#282828] cursor-pointer"
                                onClick={() => router.push(`/matches/${match.id}`)}
                            >
                                <td className="p-2">{match.time}</td>
                                <td className="p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                                        <span>{match.team1}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                        <span>{match.team2}</span>
                                    </div>
                                    <span className="text-sm">{match.date}</span>
                                </td>
                                <td className="p-2 text-yellow-300">{match.odds[0]}</td>
                                <td className="p-2 text-yellow-300">{match.odds[1]}</td>
                                <td className="p-2 text-yellow-300">{match.odds[2]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}