'use client'

import Image from "next/image";
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
import { matches as staticMatch } from "@/data/match"

export default function MatchList() {
    const router = useRouter();
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const [matches, setMatches] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const time = setTimeout(() => {
            setMatches(staticMatch.slice(0, 5));
            setIsLoading(false);
        }, 1500);

        return () => {
            clearTimeout(time)
        }
    }, []);
    return (
        <>
            {isLoading ?
                (
                    [...Array(5)].map((_, index) => (
                        <div key={index} className="flex flex-col items-center justify-between mx-auto mt-2 max-w-[1436px] md:flex-row animate-pulse">
                            <div className="w-full md:w-[250px] md:h-[124px] bg-gray-300 rounded-lg"></div>
                            <div className="flex-1 bg-white flex gap-3 justify-center items-center py-3 px-4">
                                <div className="flex items-center gap-4 flex-col md:flex-row">
                                    <div className="w-[100px] h-[100px] bg-gray-300 rounded-full"></div>
                                    <div className="text-center">
                                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                                        <div className="w-10 h-4 bg-gray-300 rounded mt-1"></div>
                                    </div>
                                </div>

                                <div className="w-[103px] h-[64px] bg-gray-300 rounded"></div>

                                <div className="flex items-center gap-4 flex-col md:flex-row-reverse">
                                    <div className="w-[100px] h-[100px] bg-gray-300 rounded-full"></div>
                                    <div className="text-center">
                                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                                        <div className="w-10 h-4 bg-gray-300 rounded mt-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[250px] md:h-[124px] bg-gray-300 rounded-lg"></div>
                            <div className="w-full md:w-[380px] md:h-[124px] bg-gray-300 rounded-lg"></div>
                        </div>
                    ))
                )
                : (
                    matches.slice(0, 5).map((match) => (
                        <div key={match.id} className="flex flex-col items-center justify-between mx-auto mt-2 max-w-[1436px] cursor-pointer md:flex-row"
                            onClick={() => router.push(`/matches/${match.id}`)}
                        >
                            <div className="flex items-center w-full justify-center bg-[linear-gradient(to_bottom,#AC0E10,#460607)] text-white text-center py-3 px-4 md:w-[250px] md:h-[124px]">
                                <div className="uppercase">
                                    <p className="font-bold md:text-xl">{match.teams[0].name.split(' ')[0]}</p>
                                    <p className="font-bold md:text-xl">{match.teams[0].name.split(' ')[1]}</p>
                                </div>
                            </div>
                            <div className="flex-1 bg-white flex gap-3 justify-center items-center py-3 px-4">
                                <div className="flex items-center gap-4 flex-col md:flex-row">
                                    <Image src={match.teams[0].banner} width={100} height={100} alt={match.teams[0].name} />
                                    <div className="text-[#565656] text-center">
                                        <p className="font-bold text-xl tracking-tight">{match.teams[0].score}</p>
                                        <p className="text-sm">{match.teams[0].over}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <Image src="/img/versus.webp" width={103} height={64} alt="Versus" />
                                </div>
                                <div className="flex items-center gap-4 flex-col md:flex-row-reverse">
                                    <Image src={match.teams[1].banner} width={100} height={100} alt={match.teams[1].name} />
                                    <div className="text-[#565656] text-center">
                                        <p className="font-bold text-xl tracking-tight">{match.teams[1].score}</p>
                                        <p className="text-sm">{match.teams[1].over}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center bg-[linear-gradient(to_bottom,#AC0E10,#460607)] text-white text-center py-3 px-4
                    md:w-[250px] md:h-[124px]
                    ">
                                <div className="uppercase">
                                    <p className="font-bold md:text-xl">{match.teams[1].name.split(' ')[0]}</p>
                                    <p className="font-bold md:text-xl">{match.teams[1].name.split(' ')[1]}</p>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center text-white text-center py-2 px-4 bg-[linear-gradient(to_bottom,#282828_0%,#3F3F3F_100%)]
                    md:w-[380px]
                    md:h-[124px]
                    ">
                                <div className="uppercase">
                                    <p className="text-sm">{match.location}</p>
                                    <p className="font-bold md:text-xl">{match.league} | {match.date}</p>
                                    <p className="text-sm">{match.time} [IST]</p>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </>
    )
}