import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[linear-gradient(to_bottom,#AC0E10,#460607)]">
            <div className="bg-[#1E1E1E] h-[13px]"></div>
            <div className="max-w-[1500px] mx-auto text-white py-8 flex flex-col items-center justify-center gap-y-10 md:justify-between md:flex-row">
                <div className="flex flex-col items-center justify-center md:justify-normal md:flex-row md:gap-10">
                    <div>
                        <Image src="/img/teams/RCBoutline.webp" alt="Logo" width={176} height={176} className="object-contain h-[100px] md:w-[176px] md:h-[176px]" />
                    </div>
                    <div className="mt-10 md:ml-10 md:p-[20px]">
                        <ul className="leading-[37px] flex flex-row md:flex-col">
                            <li><Link href="/" className="uppercase block px-2">Home</Link></li>
                            <li><Link href="/news" className="uppercase block px-2">News</Link></li>
                            <li><Link href="/matches" className="uppercase block px-2">Matches</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="mb-5 flex flex-col items-center gap-3 md:flex-row">
                        <ul className="flex items-center justify-center gap-5 md:justify-normal">
                            <li>
                                <Link href="#">
                                    <Image src="/img/socials/facebook.webp" width={30} height={30} alt="Facebook Logo" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image src="/img/socials/twitter.webp" width={30} height={30} alt="X Logo" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image src="/img/socials/instagram.webp" width={30} height={30} alt="Instagram Logo" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image src="/img/socials/youtube.webp" width={30} height={30} alt="Youtube Logo" />
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center md:flex-col">
                            <Image src="/img/socials/playstore.webp" width={20} height={20} alt="Play store" />
                            <Image src="/img/socials/appstore.webp" width={20} height={20} alt="Play store" />
                        </div>
                    </div>
                    <div className="uppercase text-center md:text-left">
                        <p>Connect with RCB</p>
                        <p>Players on the rcb app</p>
                        <p>Download now.</p>
                    </div>
                    <div className="mt-5">
                        <p>Copyright Royal Challengers Sports Pvt. Ltd</p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 