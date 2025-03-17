import Link from "next/link"
import Image from "next/image"

export default function TeamPartners() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    )
}