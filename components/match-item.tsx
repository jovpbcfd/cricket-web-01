'use client'

import { useEffect, useState } from 'react';

type Match = {
    id: string;
    date: string;
    time: string;
    team1: string;
    team2: string;
    odds: number[];
    league: string;
    team1Short: string;
    team2Short: string;
};

const SkeletonLine = ({ width, height = "20px" }: { width: string; height?: string }) => (
    <div className="bg-[#323232] rounded-md animate-pulse mx-auto" style={{ width, height }}></div>
);


export default function MatchItem({ match }: { match: Match | undefined }) {
    const [matches, setMatches] = useState<Match | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMatches(match || null);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [match]);

    return (
        <>
            <div className="max-w-[1500px] mx-auto py-4 px-2 rounded-md md:py-1 md:px-4">
                <div className="max-w-[500px] w-full mx-auto flex flex-col items-center justify-center md:mt-16 md:mb-10 md:gap-10">
                    <div className="border-b border-[#4b4b4b] mb-8 pb-10 w-full text-center md:mb-0">
                        <h1>
                            {loading ? (
                                <SkeletonLine width="60%" height="40px" />
                            ) : (
                                <>
                                    <span className="font-bold text-xl md:text-5xl">{matches?.team1}</span>
                                    <span>{" "}</span>
                                    <span className="text-2xl">vs</span>
                                    <span>{" "}</span>
                                    <span className="font-bold text-xl md:text-5xl">{matches?.team2}</span>
                                </>
                            )}
                        </h1>
                    </div>
                    <div className="flex  items-center mb-8 gap-10 md:gap-18 md:justify-around md:mb-0">
                        <div className="text-center">
                            <div className="bg-cyan-500 rounded-full w-12 h-12 md:w-22 md:h-22"></div>
                            <div className="mt-2">{loading ? <SkeletonLine width="50px" /> : matches?.team1Short}</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center gap-2 mb-2 justify-center md:justify-normal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="text-[#57534e] w-5 h-5 w-5 h-5 hidden md:inline-block"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                                {loading ? <SkeletonLine width="120px" /> :
                                    matches?.league}
                            </div>
                            <div className="flex items-center gap-2 mb-2 justify-center md:justify-normal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="text-[#57534e] w-5 h-5 hidden md:inline-block">
                                    <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" />
                                    <path d="M12 18h.01" />
                                    <path d="M16 18h.01" />
                                </svg>
                                {loading ? <SkeletonLine width="120px" /> : matches?.date}
                            </div>
                            <div className="flex items-center gap-2 justify-center md:justify-normal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="text-[#57534e] w-5 h-5 w-5 h-5 hidden md:inline-block"><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></svg>
                                {loading ? <SkeletonLine width="80px" /> : matches?.time}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-500 rounded-full w-12 h-12 md:w-22 md:h-22"></div>
                            <div className="mt-2">{loading ? <SkeletonLine width="50px" /> : matches?.team2Short}</div>
                        </div>
                    </div>
                    <button
                        className={`w-full py-3 rounded-md font-bold cursor-pointer transition my-2 md:my-0 ${loading ? "bg-[#323232] cursor-not-allowed" : "bg-green-600"
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "PLACE BET"}
                    </button>
                </div>
            </div>
            <div className="max-w-[800px] mx-auto py-4 px-2">
                <h2 className="text-center font-bold text-2xl mb-2">Match Info</h2>
                <div className="mt-5 mb-10">
                    <table className="w-full border-collapse border border-[#4b4b4b]">
                        <tbody>
                            {[
                                ['Match:', match?.league],
                                ['Date:', match?.date],
                                ['Time:', match?.time],
                                ['Team 1:', match?.team1],
                                ['Team 2:', match?.team2],
                                ['Odds:', match ? match.odds.join(' | ') : null],
                            ].map(([label, value], index) => (
                                <tr key={index} className="border border-[#4b4b4b]">
                                    <td className="p-2 font-semibold border border-[#4b4b4b] bg-[#57534e] w-22">{label}</td>
                                    <td className="p-2 border border-[#4b4b4b]">{!loading ? (
                                        value
                                    ) : (<div className="h-4 bg-[#323232] rounded w-3/4 animate-pulse"></div>)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>


    );
}

