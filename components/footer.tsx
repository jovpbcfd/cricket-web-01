import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#231F20] text-white py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="flex justify-center md:justify-start">
                        {/* <Image src="" alt="Logo" className="h-16" width={100} height={100} /> */}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left text-sm font-semibold col-span-2">
                        <div className="space-y-2 flex flex-col">
                            <Link href="/">HOME</Link>
                            <Link href="/news">NEWS</Link>
                            <Link href="/matches">MATCHES</Link>
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                            <Link href="#">TEXT</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-6 border-t border-[#4b4b4b] pt-10 pb-5">
                Copyright @2025
            </div>
        </footer>
    )
} 