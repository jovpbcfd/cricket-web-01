import Image from "next/image"

export default function TeamPartners() {
    return (
        <div className="grid grid-cols-1  md:gap-10 md:grid-cols-2">
            <div className="bg-[#DDDDDDBF] p-2 h-full md:p-8 md:w-full">
                <h2 className="uppercase text-[#8B0000] mb-2 text-xl text-center md:mb-10 md:text-[48px] md:leading-[37px] md:font-[900]">Mens team partners</h2>
                <div>
                    <div className="text-center md:mb-5">
                        <h3 className="uppercase text-[#282828] md:text-[32px] md:leading-[37px] md:font-bold md:mb-5">Principal partners</h3>
                        <div className="flex flex-col items-center justify-center md:gap-10 md:flex-row">
                            <Image src="/img/lauritz_knudsen.webp" width={239} height={101} alt="Electrical & Automation" className="w-[100px] h-[100px] md:w-[239px] h-[101px]" />
                            <Image src="/img/DHL.webp" width={217} height={100} alt="DHL" className="w-[100px] h-[100px] md:w-[217px] h-[100px]" />
                        </div>
                    </div>
                    <div className="text-center md:mb-5">
                        <h3 className="uppercase text-[#282828]  md:text-[32px] md:leading-[37px] md:font-bold md:mb-5">Associate sponsors</h3>
                        <div className="flex items-center justify-center">
                            <Image src="/img/sponsors_red_jio.webp" alt="Jio" width={150} height={83} className="w-[100px] h-[100px] md:w-[150px] h-[83px]" />
                        </div>
                    </div>
                    <div className="text-center md:mb-5">
                        <h3 className="uppercase text-[#282828] md:text-[32px] md:leading-[37px] md:font-bold md:mb-5">Associate partners</h3>
                        <div className="flex flex-col items-center justify-center md:gap-2 md:flex-row">
                            <Image src="/img/IDFC_bank_first.webp" alt="IDFC Bank" width={142} height={80} />
                            <Image src="/img/W2024_skechers.webp" alt="Skechers" width={177} height={100} />
                            <Image src="/img/new_astral_pipes.webp" alt="Astral Pipes" width={190} height={107} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#DDDDDDBF] p-2 h-full md:p-8 md:w-full">
                <h2 className="uppercase text-[#8B0000] mb-2 text-xl text-center md:mb-10 md:text-[48px] md:leading-[37px] md:font-[900]">Women's team partners</h2>
                <div>
                    <div className="text-center md:mb-5">
                        <h3 className="uppercase text-[#282828] md:text-[32px] md:leading-[37px] md:font-bold md:mb-5">Principal partners</h3>
                        <div className="flex items-center justify-center gap-10">
                            <Image src="/img/W2024_lotus_herbals.webp" alt="Lotus Herbals" width={200} height={100} />
                            <Image src="/img/W2024_ashok_leyland.webp" alt="Ashok Leyland" width={245} height={100} />
                        </div>
                    </div>
                    <div className="text-center md:mb-5">
                        <h3 className="uppercase text-[#282828]  md:text-[32px] md:leading-[37px] md:font-bold md:mb-5">Associate partners</h3>
                        <div className="flex items-center justify-center">
                            <Image src="/img/rexona.webp" alt="Rexona" width={150} height={69} />
                            <Image src="/img/W2024_skechers.webp" alt="Skechers" width={177} height={100} />
                        </div>
                    </div>
                    <div className="text-center md:mb-5">
                        <h3 className="uppercase text-[#282828] md:text-[32px] md:leading-[37px] md:font-bold md:mb-5">Official partners</h3>
                        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
                            <Image src="/img/W2024_USHA.webp" alt="Usha" width={106} height={60} />
                            <Image src="/img/W2024_lovechild.webp" alt="Lovechild" width={106} height={60} className="bg-white" />
                            <Image src="/img/DHL.webp" alt="DHL" width={106} height={60} />
                            <Image src="/img/soframycin.webp" alt="Soframcyin" width={106} height={60} />
                            <Image src="/img/radiocity.webp" alt="Radio City" width={106} height={60} />
                            <Image src="/img/2024_fever_FM.webp" alt="Fever" width={106} height={60} />
                            <Image src="/img/radiooneinternational.webp" alt="94.3 Radio One" width={106} height={60} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}