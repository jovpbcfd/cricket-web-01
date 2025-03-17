import Link from "next/link"
import { matches } from "@/data/match"

export default function Page() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Today's matches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matches.map((match) => (
                    <Link key={match.id} href={`/matches/${match.id}`}>
                        <div className="border border-[#4b4b4b] rounded-lg shadow-md p-4 text-center bg-[#373737]">
                            <h3 className="text-lg font-semibold">{match.team1} vs {match.team2}</h3>
                            <p className="text-gray-500 text-sm">{match.league}</p>

                            <div className="flex justify-center items-center mt-4">
                                <div className="flex flex-col items-center mx-4">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500">
                                        <span className="sr-only">Team banner 1</span>
                                    </div>
                                    <p className="font-bold mt-2">{match.team1Short}</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-gray-600">{match.date}</p>
                                    <p className="text-xl font-bold">{match.time}</p>
                                </div>

                                <div className="flex flex-col items-center mx-4">
                                    <div className="w-12 h-12 rounded-full bg-red-500">
                                        <span className="sr-only">Team banner 2</span>
                                    </div>
                                    <p className="font-bold mt-2">{match.team2Short}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-center gap-2">
                                <button className="bg-[#282828] text-white px-4 py-1 rounded-md">Upcoming</button>
                                <button className="bg-[#282828] text-white px-4 py-1 rounded-md">Highlights</button>
                                <button className="bg-[#282828] text-white px-4 py-1 rounded-md">Details</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}