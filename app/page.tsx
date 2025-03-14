// import HeroImage from '@/public/img/cricket-site-hero.webp'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const matches = [
    { date: "March 01, 2025", time: "04:00", team1: "Team 1", team2: "Team 2", odds: [1.95, 3.30, 4.20] },
    { date: "March 01, 2025", time: "01:45", team1: "Team 1", team2: "Team 2", odds: [1.90, 3.60, 4.10] },
    { date: "March 01, 2025", time: "04:00", team1: "Team 1", team2: "Team 2", odds: [1.40, 4.75, 7.50] },
    { date: "March 01, 2025", time: "01:45", team1: "Team 1", team2: "Team 2", odds: [1.90, 3.90, 3.75] },
    { date: "March 01, 2025", time: "01:45", team1: "Team 1", team2: "Team 2", odds: [1.45, 4.75, 6.50] },
    { date: "March 01, 2025", time: "01:45", team1: "Team 1", team2: "Team 2", odds: [1.57, 4.33, 5.25] },
    { date: "March 01, 2025", time: "04:00", team1: "Team 1", team2: "Team 2", odds: [2.70, 3.75, 2.45] },
  ];
  return (
    <>
      <section className="max-w-[1800px] mx-auto py-4 px-2 md:py-8 md:px-4">
        <div className="flex flex-col gap-2 md:flex-row md:gap-5">
          <div className='w-full bg-[url(/img/cricket-site-hero.webp)] bg-no-repeat  w-full rounded-md md:flex-row md:w-[70%] md:items-center shadow-md md:h-[574px]'>
            <div className="w-full h-full text-center p-2 md:w-[50%] flex items-center justify-center flex-col">
              <h1 className="font-bold text-5xl mb-2">Best Live Cricket</h1>
              <p className="te">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam aliquam quas ipsum fuga molestias soluta inventore similique aliquid nulla?</p>
            </div>
            <div className="md:sr-only"></div>
          </div>
          <div className="w-full md:w-[30%] shadow-md">
            <div className="w-full mx-auto bg-black text-white rounded-lg overflow-hidden shadow-lg">
              {/* Match Result */}
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
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-8"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                    alt="App Store"
                    className="h-8"
                  />
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
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md md:py-1 md:px-4">
        <h2 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4">Live matches</h2>
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
              {matches.map((match, index) => (
                <tr key={index} className="border-t border-[#4b4b4b] hover:bg-[#282828]">
                  <td className="p-2">
                    <div>
                      <p></p>
                      {match.time}

                    </div>
                  </td>
                  <td className="p-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                        <span>
                          {match.team1}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <span>
                          {match.team2}
                        </span>
                      </div>
                      <span className="text-sm">{match.date}</span>
                    </div>
                  </td>
                  <td className="p-2 text-yellow-300">{match.odds[0]}</td>
                  <td className="p-2 text-yellow-300">{match.odds[1]}</td>
                  <td className="p-2 text-yellow-300">{match.odds[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md md:py-1 md:px-4">
        <h2 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-2 w-full h-[500px]">
          <div className="relative overflow-hidden md:row-span-3 border-2 border-[#373737] border-dashed m-2 rounded-md">
            <span className="hidden absolute bg-cyan-500 p-1 font-bold top-0 left-0 md:block">
              Featured
            </span>
            <Image src="/img/cricket-site-hero.webp" alt="Bet" height={1000} width={574} className="absolute inset-0 z-[-5] w-full h-full" />
            <div className="absolute bottom-3 left-3">
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, natus.</span>
              <span>Lorem ipsum dolor sit amet.</span>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
            </div>
          </div>
          <div className="flex flex-row p-2 items-center gap-2 md:flex-col md:gap-0 md:items-start">
            <div className="relative border-2 border-[#373737] border-dashed text-white/50 w-full h-full flex items-center justify-center rounded-md mb-2 relative md:h-[400px] md:w-[80%]">
              <Image src="/img/cricket-site-hero.webp" alt="Bet" height={500} width={500} className="absolute inset-0 z-[-5] w-full h-full" />
              <span className="hidden absolute bg-cyan-500 text-white p-1 font-bold left-0 top-0 md:block">March 12, 2025</span>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl">News title</h3>
              <p className="w-full md:w-[70%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, iure unde molestiae dolorum iste ab!</p>
            </div>
          </div>
          <div className="flex flex-row p-2 gap-2 items-center md:flex-col md:gap-0 md:items-start">
            <div className="relative border-2 border-[#373737] border-dashed text-white/50 w-full h-full flex items-center justify-center rounded-md mb-2 relative md:h-[400px] md:w-[80%]">
              <Image src="/img/cricket-site-hero.webp" alt="Bet" height={500} width={500} className="absolute inset-0 z-[-5] w-full h-full" />
              <span className="hidden absolute bg-cyan-500 p-1 font-bold left-0 top-0 text-white md:block">February 13, 2025</span>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl">News title</h3>
              <p className="w-full md:w-[70%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, iure unde molestiae dolorum iste ab!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md md:py-1 md:px-4">
        <h2 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4">About us</h2>
        <div>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, alias veritatis? Provident nobis consectetur, dicta dignissimos maxime fugiat officiis deleniti.
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consectetur animi. Quam dolores accusantium impedit unde? Dignissimos sapiente nam maiores repudiandae ipsum quis eligendi aliquid numquam dicta minus, sint tenetur ab? Blanditiis sed illum recusandae modi tempora laudantium dolor itaque vero non hic, ab nulla molestiae,
            eaque est esse voluptatem error! Omnis eaque, culpa at consectetur illum vel porro distinctio.
          </p>
          <div className="flex flex-col-reverse md:flex-row md:gap-5">
            <div className="w-full md:w-[70%]">
              <div className="relative overflow-hidden border-2 border-[#373737] border-dashed text-white/50 w-full h-[200px] flex items-center justify-center mb-4 rounded-md md:h-[400px]">
                <Image src="/img/cricket-site-hero.webp" alt="about here" width={1000} height={574} className="absolute w-full h-full" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis nostrum eius quaerat dolor,
                unde rerum aut? Modi velit nesciunt, qui accusamus cum vero odit non dolore placeat error quae iusto culpa aperiam deserunt quos.
                Eum alias explicabo veritatis aut soluta rerum, illo eius corporis, voluptates omnis amet accusantium saepe.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis nostrum eius quaerat dolor,
                unde rerum aut? Modi velit nesciunt, qui accusamus cum vero odit non dolore placeat error quae iusto culpa aperiam deserunt quos.
                Eum alias explicabo veritatis aut soluta rerum, illo eius corporis, voluptates omnis amet accusantium saepe.
              </p>
            </div>
            <div className="w-full md:w-[30%] shadow-md">
              <div className="w-full mx-auto bg-black text-white rounded-lg overflow-hidden shadow-lg">
                {/* Match Result */}
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
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-8"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                      alt="App Store"
                      className="h-8"
                    />
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
          </div>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md mt-10 md:py-1 md:px-4">
        <div className="max-w-6xl mx-auto p-6">
          {/* Title */}
          <div className="grid grid-cols-2 text-center font-bold text-lg md:text-2xl pb-4">
            <h2>MEN'S TEAM PARTNERS</h2>
            <h2>WOMEN'S TEAM PARTNERS</h2>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Men's Team Sponsors */}
            <div className="space-y-6">
              <div className="border-t border-l border-[#4b4b4b] py-2">
                <h3 className="text-center font-semibold">PRINCIPAL PARTNERS</h3>
                <div className="flex justify-center space-x-6 mt-3">
                  <Link href="#">
                    <Image src="/img/lauritz_knudsen.webp" alt="Lauritz Knudsen" width={180} height={80} />
                  </Link>
                  <Link href="#">
                    <Image src="/img/DHL.webp" alt="DHL" width={216} height={100} />
                  </Link>
                </div>
              </div>

              <div className="border-t border-l border-[#4b4b4b] py-2">
                <h3 className="text-center font-semibold">ASSOCIATE SPONSOR</h3>
                <div className="flex justify-center mt-3">
                  <Link href="#">
                    <Image src="/img/sponsors_red_jio.webp" alt="Jio" width={216} height={100} />
                  </Link>
                </div>
              </div>

              <div className="border-t border-l border-[#4b4b4b] py-2">
                <h3 className="text-center font-semibold">ASSOCIATE PARTNERS</h3>
                <div className="flex justify-center space-x-6 mt-3 flex-wrap">
                  <Link href="#">
                    <Image src="/img/IDFC_bank_first.webp" alt="IDFC Bank" width={141} height={80} />
                  </Link>
                  <Link href="#">
                    <Image src="/img/W2024_skechers.webp" alt="Skechers" width={141} height={80} className="bg-white" />
                  </Link>
                  <Link href="#">
                    <Image src="/img/new_astral_pipes.webp" alt="Astral Pipes" width={141} height={80} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Women's Team Sponsors */}
            <div className="space-y-6">
              <div className="border-t border-l border-[#4b4b4b] py-2">
                <h3 className="text-center font-semibold">PRINCIPAL PARTNERS</h3>
                <div className="flex justify-center space-x-6 mt-3">
                  <Link href="#">
                    <Image src="/img/W2024_lotus_herbals.webp" alt="Lotus Herbals" width={245} height={100} />
                  </Link>
                  <Link href="#">
                    <Image src="/img/W2024_ashok_leyland.webp" alt="Ashok Leyland" width={245} height={100} />
                  </Link>
                </div>
              </div>

              <div className="border-t border-l border-[#4b4b4b] py-2">
                <h3 className="text-center font-semibold">ASSOCIATE PARTNERS</h3>
                <div className="flex justify-center space-x-6 mt-3">
                  <Link href="#">
                    <Image src="/img/rexona.webp" alt="Rexona" width={245} height={100} />
                  </Link>
                  <Link href="#">
                    <Image src="/img/W2024_skechers.webp" alt="Skechers" width={141} height={80} className="bg-white" />
                  </Link>
                </div>
              </div>

              <div className="border-t border-l border-[#4b4b4b] py-2">
                <h3 className="text-center font-semibold">OFFICIAL PARTNERS</h3>
                <div className="flex justify-center space-x-4 mt-3 flex-wrap p-2">
                  <Link href="#">
                    <Image src="/img/W2024_USHA.webp" alt="Usha" width={106} height={60} />
                  </Link>
                  <Link href="#">
                    <Image src="/img/W2024_lovechild.webp" alt="Lovechild" width={106} height={60} className="bg-white" />
                  </Link>
                  <Link href="#">
                    <Image src="/img/DHL.webp" alt="DHL" width={106} height={60} />
                  </Link>
                  <Link href="#">
                    <Image src="/img/soframycin.webp" alt="Soframcyin" width={106} height={60} />
                  </Link>
                  <Link href="#" className="md:m-6">
                    <Image src="/img/radiocity.webp" alt="Radio City" width={106} height={60} />
                  </Link>
                  <Link href="#" className="md:m-6">
                    <Image src="/img/2024_fever_FM.webp" alt="Fever" width={106} height={60} className="bg-white" />
                  </Link>
                  <Link href="#" className="md:m-5">
                    <Image src="/img/radiooneinternational.webp" alt="94.3 Radio One" width={106} height={60} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
