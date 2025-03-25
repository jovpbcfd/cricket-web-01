'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    location: string;
    teams: Teams[]
};

type Teams = {
    banner: string;
    name: string;
    score: string;
    over: string
}

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
            <div className='bg-[url(/img/bg-page-matches.webp)] bg-no-repeat'>
                <div className="max-w-[1500px] mx-auto py-4 px-2 rounded-md md:py-10 md:px-4">
                    <div className="max-w-[939px] w-full mx-auto">
                        <div className='bg-[#1E1E1E] py-5 px-10 text-center'>
                            <span className='md:mr-2'>{matches?.league}</span> |
                            <span className='md:mx-2'>{matches?.date}</span> |
                            <span className='md:ml-2'>{matches?.time} IST</span>
                        </div>
                        <div className='bg-[#FFFFFF] text-[#1E1E1E] text-center py-5'>
                            <h1 className=' uppercase text-md font-bold md:text-[40px] md:font-[900] md:leading-[50px]'>
                                {matches?.team1}
                                <span className='mx-2 text text-[#ac0e10]'>vs</span>
                                {matches?.team2}
                            </h1>
                        </div>
                        <div className='bg-gradient-to-r from-[#460607] via-[#AC0E10] to-[#460607] py-5 md:py-10'>
                            <div className='flex items-center justify-center'>
                                <div className='flex items-center gap-2 md:gap-5'>
                                    <div className='bg-[#FFFFFF] rounded-full flex items-center justify-center md:w-[150px] md:h-[150px]'>
                                        {loading ? (<div className="md:w-[150px] md:h-[150px] bg-gray-300 rounded-full animate-pulse"></div>) : (
                                            <Image src={matches?.teams[0].banner as string} width={100} height={100} alt={matches?.teams[0].name as string} />
                                        )}
                                    </div>
                                    <div className='text-center self-end'>
                                        <div className='font-[900] bg-[#D8BD74] p-2 text-[#8B0000] rounded-md md:leading-[50px] md:text-[40px]'>
                                            {matches?.teams[0].score}
                                        </div>
                                        <p className='text-white font-bold md:text-[20px] md:pt-2'>{matches?.teams[0].over}</p>
                                    </div>
                                </div>
                                <span className='font-bold text-3xl md:text-6xl md:mx-10'>-</span>
                                <div className='flex flex-row-reverse items-center gap-2 md:gap-5'>
                                    <div className='bg-[#FFFFFF] rounded-full flex items-center justify-center md:w-[150px] md:h-[150px]'>
                                        {loading ? (<div className="md:w-[150px] md:h-[150px] bg-gray-300 rounded-full animate-pulse"></div>) : (

                                            <Image src={matches?.teams[1].banner as string} width={100} height={100} alt={matches?.teams[1].name as string} />
                                        )}
                                    </div>
                                    <div className='text-center self-end'>
                                        <div className='font-[900] bg-[#D8BD74] p-2 text-[#8B0000] rounded-md md:leading-[50px] md:text-[40px]'>
                                            {matches?.teams[1].score}
                                        </div>
                                        <p className='text-white font-bold md:text-[20px] md:pt-2'>{matches?.teams[1].over}</p>
                                    </div>
                                </div>
                            </div>
                            <p className='uppercase text-center font-bold text-[20px] p-[10px] md:mt-5'>{matches?.location}</p>
                        </div>
                        <div>
                            <h2 className='text-center text-[#282828] py-3 font-bold uppercase md:font-[900] md:text-[40px] md:leading-[50px] md:py-10'>Match information</h2>
                            <div className="bg-[url(/img/match-info-bg.webp)]  bg-no-repeat w-full mx-auto h-40 text-white font-semibold flex">
                                <div className="w-1/2 flex flex-col justify-around p-4">
                                    <p><span className="font-bold">MATCH:</span> {matches?.league}</p>
                                    <p><span className="font-bold">DATE:</span> {matches?.date}</p>
                                    <p><span className="font-bold">TIME:</span> 04:00</p>
                                </div>
                                <div className="w-1/2 flex flex-col justify-around p-4 text-right">
                                    <p><span className="font-bold">TEAM 1:</span> {matches?.team1}</p>
                                    <p><span className="font-bold">TEAM 2:</span> {matches?.team2}</p>
                                    <p><span className="font-bold">ODDS:</span> {matches?.odds[0]} | {matches?.odds[1]} | {matches?.odds[2]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

