export default function Page() {
    return (
        <>
            <div className="bg-[#DDDDDDBF]">
                <div className="max-w-[1200px] mx-auto py-4 px-2 rounded-md md:py-8 md:px-4">
                    <div className="flex flex-col-reverse gap-2 md:flex-row md:gap-10 md:mb-5 md:items-center">
                        <div className="border-2 border-[#373737] border-dashed text-black w-full h-[200px] flex items-center justify-center rounded-md md:w-[60%] md:h-[300px]">
                            Image:
                            <span>827</span>
                            <span> x </span>
                            <span>435</span>
                        </div>
                        <div className="w-full bg-[#FFFFFF] md:w-[40%]">
                            <div className="mb-2 text-sm text-black bg-[linear-gradient(to_bottom,#AC0E10,#460607)] md:py-2 md:px-3">
                                <span className="text-white rounded-md py-[0.5px] px-2">Latest</span>
                                <span className="text-white rounded-md py-[0.5px] px-2 ml-2">News</span>
                                <span className="text-white rounded-md py-[0.5px] px-2 ml-2">Featured</span>
                            </div>
                            <h1 className="font-bold mb-2 text-2xl text-black md:text-4xl md:py-2 md:px-3">Blog Title for today</h1>
                            <p className="mb-2 text-black md:py-2 md:px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ex earum ab inventore in qui cumque, quam maxime reiciendis enim quisquam optio hic impedit nulla? Voluptate,
                                placeat expedita? Quod delectus eligendi possimus fugiat natus deserunt,
                                dicta aliquam asperiores obcaecati assumenda beatae.
                            </p>
                            <div className="md:py-2 md:px-3">
                                <span className="text-black">
                                    March 13 2025
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="my-2">
                        <h2 className="text-xl text-[#1E1E1E] font-bold md:text-4xl">All</h2>
                        <div className="grid mt-2 gap-2 md:grid-cols-3 md:gap-4">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="bg-[#FFFFFF] p-2 rounded-md">
                                    <div className="border-2 border-[#282828] border-dashed text-black w-full h-[200px] flex items-center justify-center rounded-md">
                                        Image
                                    </div>
                                    <h3 className="font-bold text-2xl my-2 text-[#1E1E1E] md:text-3xl">Blog Title</h3>
                                    <p className="mb-5 text-[#1E1E1E]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum illum optio aliquid neque? Doloribus soluta commodi sequi aut in!</p>
                                    <div className="mb-2">
                                        <span className="h-full w-full py-2 pr-2 relative rounded-s-md">
                                            <span className="ml-2 font-bold text-[#1E1E1E]">
                                                March 12, 2025
                                            </span>
                                            <div className="absolute w-1 h-full bg-[#57534e] left-0 top-0 rounded-s-md"></div>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}