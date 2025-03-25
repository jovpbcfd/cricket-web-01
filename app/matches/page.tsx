import Link from "next/link"
import Image from "next/image"
import { matches } from "@/data/match"

export default function Page() {
    return (
        <div className="bg-[#DDDDDDBF] p-3 md:p-6">
            <h1 className="text-2xl text-[#8B0000] font-bold mb-4 uppercase">Matches</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matches.map((match) => (
                    <Link key={match.id} href={`/matches/${match.id}`}>
                        <div className="flex flex-col justify-between h-full bg-[#FFFFFF]">
                            <div className="uppercase text-center p-2 leading-[37px] bg-[linear-gradient(to_bottom,#AC0E10,#460607)]">
                                <p className="text-sm">{match.location}</p>
                                <p className="font-bold md:text-xl">{match.league} | {match.date}</p>
                                <p className="text-sm">{match.time} [IST]</p>
                            </div>

                            <div className="flex flex-col items-center justify-center mx-auto py-2 md:gap-3 md:pt-8 md:pb-5">
                                <div className="flex items-center gap-5 md:gap-12">
                                    <div>
                                        <Image src={match.teams[0].banner} width={150} height={150} className="w-[90px] h-[90px] md:w-[150px] md:h-[150px]" alt={match.teams[0].name} />
                                        <p className="text-black leading-[21px] text-center md:mt-2">
                                            <span className="font-[700] text-[#565656] block md:inline-block md:text-[24px]">{match.teams[0].score}</span>
                                            <span className="uppercase text-[16px] ml-2">{match.teams[0].over} overs</span>
                                        </p>
                                    </div>
                                    <div>
                                        <Image src={match.teams[1].banner} width={150} height={150} className="w-[90px] h-[90px] md:w-[150px] md:h-[150px]" alt={match.teams[1].name} />
                                        <p className="text-black leading-[21px] text-center md:mt-2">
                                            <span className="font-[700] text-[#565656] block md:inline-block md:text-[24px]">{match.teams[0].score}</span>
                                            <span className="uppercase text-[16px] ml-2">{match.teams[0].over} overs</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3 flex flex-col items-center justify-around md:flex-row">
                                    <div className="flex items-center w-full">
                                        <button className="bg-[linear-gradient(to_bottom,#AC0E10,#460607)] w-full p-3 uppercase ">
                                            {match.teams[0].name}
                                        </button>
                                    </div>
                                    <div>
                                        <Image src="/img/versus.webp" alt="versus" width={160} height={99} />
                                    </div>
                                    <div className="flex items-center w-full">
                                        <button className="bg-[linear-gradient(to_bottom,#AC0E10,#460607)] w-full p-3 uppercase ">
                                            {match.teams[1].name}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[linear-gradient(to_bottom,#AC0E10,#460607)] h-[10px]"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}