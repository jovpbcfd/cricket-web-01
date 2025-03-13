// import HeroImage from '@/public/img/cricket-site-hero.webp'

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
      <div className="max-w-[1200px] mx-auto py-4 px-2 md:py-8 md:px-4">
        <div className='bg-[url(/img/hero-1.webp)] bg-no-repeat h-[400px] w-full rounded-md md:flex-row md:items-center shadow-md'>
          <div className="w-full h-full text-center p-2 md:w-[50%] flex items-center justify-center flex-col">
            <h1 className="font-bold text-5xl mb-2">Best Live Cricket</h1>
            <p className="te">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam aliquam quas ipsum fuga molestias soluta inventore similique aliquid nulla?</p>
          </div>
          <div className="md:sr-only"></div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-4 px-2 rounded-md md:py-8 md:px-4">
        <div>
          <h2>Live matches</h2>
        </div>

        {/* <div className="bg-[#373737]">
          <p>T20 Krushnamai Premier League</p>
            <div>
              
            </div>
        </div> */}
        <div className="bg-[#373737] text-white p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Fri 14 Mar</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-yellow-400">
                <th className="p-2">Time</th>
                <th className="p-2">Match</th>
                <th className="p-2">1</th>
                <th className="p-2">X</th>
                <th className="p-2">2</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index} className="border-t border-[#4b4b4b] hover:bg-gray-800">
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
      </div>
    </>
  );
}
