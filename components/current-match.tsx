import Image from "next/image"

export default function CurrentMatch() {
    return (
        <div className="w-full md:w-[30%] shadow-md">
            <div className="w-full mx-auto bg-black text-white rounded-lg overflow-hidden shadow-lg">
                <div className="text-center p-4 bg-[linear-gradient(to_right,#AC0E10_17%,#D20C14_81%)] border-b border-[#4b4b4b]">
                    <p className="text-sm text-white">MAR 13 - 2025</p>
                    <h2 className="text-lg font-bold uppercase">
                        Chennai super kings won by 4 wickets
                    </h2>
                </div>
                <div className="bg-[linear-gradient(to_bottom,#3F3F3F_0%,#282828_100%)]">
                    <div className="p-4 flex items-center justify-around">
                        <div className="text-center">
                            <div className="w-[100px] h-[100px]">
                                <Image src="/img/teams/MIoutline.webp" width={100} height={100} alt="Mumbai Indians" />
                            </div>
                            <div className="leading-[25px] text-center">
                                <p className="text-[24px] font-bold">155/09</p>
                                <p className="text-[16px]">20.0 overs</p>
                            </div>
                            <p className="mt-4">
                                IPL 2025
                            </p>
                        </div>
                        <div className="text-[48px] font-bold text-[#FFBF13] leading-[37px]">
                            vs
                        </div>
                        <div className="text-center">
                            <div className="w-[100px] h-[100px]">
                                <Image src="/img/teams/CSKroundbig.webp" width={100} height={100} alt="Chennai Super Kings" />
                            </div>
                            <div className="leading-[25px] text-center">
                                <p className="text-[24px] font-bold">158/06</p>
                                <p className="text-[16px]">19.1 overs</p>
                            </div>
                            <p className="mt-4">
                                SCORE CARD
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center justify-around">
                            <div className="w-[100px] h-[100px] ml-10">
                                <Image src="/img/teams/DCoutline.webp" width={100} height={100} alt="Delhi Capitals" />
                            </div>
                            <div className="text-[24px] font-bold text-[#FFBF13] leading-[37px]">
                                24 MAR 2025
                            </div>
                            <div className="w-[100px] h-[100px] mr-10">
                                <Image src="/img/teams/LSGoutline.webp" width={100} height={100} alt="Delhi Capitals" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-center py-5">
                            <div className="leading-[37px] uppercase">
                                <p className="text-[16px]">Stay connected</p>
                                <p className="text-[24px] text-[#FFBF13] font-bold">with rcb family</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 flex flex-col space-y-2 bg-[linear-gradient(to_bottom,#3F3F3F_0%,#282828_75%)]  border-t border-[#4b4b4b]">
                    <button className="w-full bg-[#AC0E10] py-2 rounded-md font-bold cursor-pointer">
                        BUY TICKETS
                    </button>
                    <button className="w-full bg-[#FFBF13] text-black py-2 rounded-md font-bold cursor-pointer">
                        BUY MERCHANDISE
                    </button>
                </div>
            </div>
        </div>
    )
}