"use client"

import { matches } from '@/data/match';

export default function TeamStandings() {

    return (
        <div className="w-full mx-auto mt-6 p-4 bg-[#373737] rounded-lg shadow-md">
            <div className="overflow-x-auto">
                <table className="w-full border border-[#4b4b4b] rounded-lg shadow">
                    <thead className="bg-[#57534e] text-white">
                        <tr>
                            <th className="p-3">POS</th>
                            <th className="p-3">TEAMS</th>
                            <th className="p-3">PLD</th>
                            <th className="p-3">W</th>
                            <th className="p-3">L</th>
                            <th className="p-3">N/R</th>
                            <th className="p-3">NET RR</th>
                            <th className="p-3">PTS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {matches.slice(0, 7).map((match, index) => (
                            <tr
                                key={match.id}
                                className={`${index % 2 === 0 ? "bg-[#282828]" : "bg-[#373737]"
                                    } border-b border-[#4b4b4b] text-center`}
                            >
                                <td className="p-3 font-bold">{index + 1}</td>
                                <td className="p-3 font-medium flex items-center justify-center gap-2">
                                    <div className='w-5 h-5 bg-red-500 rounded-full'>
                                    </div>
                                    {match.team1}
                                </td>
                                <td className="p-3">8</td>
                                <td className="p-3">{Math.floor(Math.random() * 6)}</td>
                                <td className="p-3">{Math.floor(Math.random() * 6)}</td>
                                <td className="p-3">0</td>
                                <td className="p-3">{(Math.random() * 1).toFixed(3)}</td>
                                <td className="p-3">{Math.floor(Math.random() * 10)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
