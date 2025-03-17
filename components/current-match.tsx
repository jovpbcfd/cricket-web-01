export default function CurrentMatch() {
    return (
        <div className="w-full md:w-[30%] shadow-md">
            <div className="w-full mx-auto bg-black text-white rounded-lg overflow-hidden shadow-lg">
                <div className="text-center p-4 bg-[#373737] border-b border-[#4b4b4b]">
                    <p className="text-sm text-gray-400">MAR 13 - 2025</p>
                    <h2 className="text-lg font-bold">
                        TEAM 2 WON BY 47 RUNS
                    </h2>
                    <p className="text-xs text-gray-400">[QUALIFIED]</p>
                </div>

                <div className="bg-[#282828] p-4 flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                        <div className="text-center">
                            <div className="h-12 w-12 rounded-md bg-red-500">
                                <span className="sr-only">Team banner</span>
                            </div>
                            <p className="text-xl font-bold">213/4</p>
                            <p className="text-xs text-gray-400">20 Overs</p>
                        </div>
                        <span className="text-lg font-bold">VS</span>
                        <div className="text-center">
                            <div className="h-12 w-12 rounded-md bg-cyan-500">
                                <span className="sr-only">Team banner</span>
                            </div>
                            <p className="text-xl font-bold">166/10</p>
                            <p className="text-xs text-gray-400">19.2 Overs</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 w-full mt-3 text-xs">
                        <p className="text-gray-400">T20</p>
                        <p className="text-yellow-400 cursor-pointer">SCORE CARD</p>
                    </div>
                </div>

                <div className="bg-[#282828] p-4 flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-md bg-cyan-500">
                            <span className="sr-only">Team banner</span>
                        </div>
                        <p className="text-xl font-bold text-yellow-400">15 MAR</p>
                        <div className="h-12 w-12 rounded-md bg-red-500">
                            <span className="sr-only">Team banner</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#282828] text-center py-4">
                    <p className="text-sm">STAY CONNECTED</p>
                    <p className="text-lg font-bold text-yellow-400">WITH RCB FAMILY</p>
                    <div className="flex justify-center space-x-4 mt-3">
                        {/* <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-8"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                            alt="App Store"
                            className="h-8"
                        /> */}
                    </div>
                </div>

                <div className="p-4 flex flex-col space-y-2 bg-[#373737] border-t border-[#4b4b4b]">
                    <button className="w-full bg-amber-500 py-2 rounded-md font-bold cursor-pointer">
                        BUY TICKETS
                    </button>
                    <button className="w-full bg-green-500 py-2 rounded-md font-bold cursor-pointer">
                        BUY MERCHANDISE
                    </button>
                </div>
            </div>
        </div>
    )
}