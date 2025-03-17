"use client"

import { Circle } from 'rc-progress';

export default function TeamPerformance() {
    const matchesPlayed = 14;
    const wins = 9;
    const losses = 4;
    const ties = 1;

    const TeamOnePossibility = (wins / matchesPlayed) * 100
    const TeamTwoPossibility = (losses / matchesPlayed) * 100

    return (
        <div className="flex flex-col items-center p-6 bg-[#373737] rounded-xl shadow-lg w-full max-w-3xl mx-auto">
            <div className="flex justify-around w-full mt-4">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24">
                        <Circle
                            percent={TeamOnePossibility}
                            strokeWidth={8}
                            strokeColor="oklch(0.769 0.188 70.08)"
                        />

                    </div>
                    <p className="mt-2 text-sm text-green-600 font-bold md:text-xl">{Math.round(TeamOnePossibility)}%</p>
                </div>
                <div className="text-center">
                    <p className="text-lg font-bold">{matchesPlayed} MATCHES PLAYED</p>
                    <p className="text-green-600">{wins} WON</p>
                    <p className="text-red-600">{losses} LOST</p>
                    <p className="text-gray-600">{ties} TIED</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24">
                        <Circle
                            percent={TeamTwoPossibility}
                            strokeWidth={8}
                            strokeColor="oklch(0.769 0.188 70.08)"
                        />
                    </div>
                    <p className="mt-2 text-sm text-red-500 font-bold md:text-xl">{Math.round(TeamTwoPossibility)}%</p>
                </div>
            </div>

            <div className="flex justify-around items-center w-full mt-12">
                <div className="text-center">
                    <div className='w-16 h-16 bg-cyan-500 rounded-md'>
                        <span className='sr-only'>Team banner 1</span>
                    </div>
                    <p className="font-bold mt-2">Team 1</p>
                    <p className="text-white">432 Runs</p>
                </div>
                <div className="text-center">
                    <div className='w-16 h-16 bg-red-500 rounded-md'>
                        <span className='sr-only'>Team banner 1</span>
                    </div>
                    <p className="font-bold mt-2">Team 2</p>
                    <p className="text-white">18 Wickets</p>
                </div>

            </div>
        </div>
    );
};

