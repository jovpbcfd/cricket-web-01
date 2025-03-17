import Image from "next/image";

import TeamPerformance from "@/components/team-perf";
import CurrentMatch from "@/components/current-match";
import TeamPartners from "@/components/team-partners";
import MatchList from "@/components/match-list";

export default function Home() {
  return (
    <>
      <section className="max-w-[1800px] mx-auto py-4 px-2 md:py-8 md:px-4">
        <div className="flex flex-col gap-2 md:flex-row md:gap-5">
          <div className='w-full bg-[url(/img/home-hero.webp)] bg-no-repeat  w-full rounded-md md:flex-row md:w-[70%] md:items-center shadow-md md:h-[574px]'>
            {/* <div className="w-full h-full text-center p-2 md:w-[50%] flex items-center justify-center flex-col">
              <h1 className="font-bold text-5xl mb-2 drop-shadow-lg">Best Live Cricket</h1>
              <p className="drop-shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam aliquam quas ipsum fuga molestias soluta inventore similique aliquid nulla?</p>
            </div> */}
            <div className="relative w-full h-full text-center p-2 md:w-[50%] flex items-center justify-center flex-col">
              <h1 className="relative font-bold text-5xl mb-2 text-white px-4 py-2 bg-[#373737] rounded-md inline-block shadow-lg">
                Best Live Cricket
              </h1>
              <p className="relative text-white px-3 py-1 bg-[#373737]/80 rounded-md mt-2 shadow-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam aliquam quas ipsum fuga molestias soluta inventore similique aliquid nulla?
              </p>
            </div>
            <div className="md:sr-only"></div>
          </div>
          <CurrentMatch />
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2  rounded-md md:py-1 md:px-4 md:mt-3">
        <h2 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4">Live matches</h2>
        <MatchList />
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md md:py-1 md:px-4 md:mt-5">
        <h2 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-2 w-full h-[500px] md:h-[600px]">
          <div className="relative overflow-hidden m-2 rounded-md md:row-span-3">
            <span className="hidden absolute bg-cyan-500 p-1 font-bold top-0 left-0 md:block">
              Featured
            </span>
            <Image src="/img/home-news-1.webp" alt="Bet" height={1000} width={574} className="absolute inset-0 z-[-5] w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 md:text-3xl">
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, natus.</span>
              <span>Lorem ipsum dolor sit amet.</span>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
            </div>
          </div>
          <div className="flex flex-row p-2 items-center gap-2 md:flex-col md:gap-0 md:items-start">
            <div className="relative text-white/50 w-full h-full flex items-center justify-center rounded-md mb-2 relative overflow-hidden md:h-[400px] md:w-full">
              <Image src="/img/home-news-2.webp" alt="Bet" height={500} width={500} className="absolute inset-0 z-[-5] w-full h-full object-cover" />
              <span className="hidden absolute bg-cyan-500 text-white p-1 font-bold left-0 top-0 md:block">March 12, 2025</span>
            </div>

            <div>
              <h3 className="font-bold text-xl md:text-2xl">News title</h3>
              <p className="w-full md:w-[70%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, iure unde molestiae dolorum iste ab!</p>
            </div>
          </div>
          <div className="flex flex-row p-2 gap-2 items-center md:flex-col md:gap-0 md:items-start">
            <div className="relative text-white/50 w-full h-full flex items-center justify-center rounded-md mb-2 overflow-hidden relative md:h-[400px] md:w-full">
              <Image src="/img/home-news-3.webp" alt="Bet" height={500} width={500} className="absolute inset-0 z-[-5] w-full h-full" />
              <span className="hidden absolute bg-cyan-500 p-1 font-bold left-0 top-0 text-white md:block">February 13, 2025</span>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl">News title</h3>
              <p className="w-full md:w-[70%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, iure unde molestiae dolorum iste ab!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md md:py-1 md:px-4 md:mt-5">
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
              <div className="relative overflow-hidden text-white/50 w-full h-[200px] flex items-center justify-center mb-4 rounded-md md:h-[400px]">
                <Image src="/img/home-about.webp" alt="about here" width={1000} height={574} className="absolute w-full h-full object-cover" />
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
            <CurrentMatch />
          </div>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md mt-10 md:py-1 md:px-4">
        <h2 className="font-bold text-2xl mb-2 md:text-4xl md:mb-4">Stats</h2>
        <TeamPerformance />
      </section>

      <section className="max-w-[1500px] mx-auto py-4 px-2 rounded-md mt-10 md:py-1 md:px-4">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-2 text-center font-bold text-lg md:text-2xl pb-4">
            <h2>MEN'S TEAM PARTNERS</h2>
            <h2>WOMEN'S TEAM PARTNERS</h2>
          </div>

          <TeamPartners />
        </div>
      </section>
    </>
  );
}
