import { CommonInput } from "./CommonInput";

export const ContentsLayout = () => {
    return (
        <>
            <section className="w-1/3 sm:w-[640px] md:w-[640px] min-h-full border-2">
                <div className="h-full pl-7 pr-7 pt-16 pb-16 gap-14 space-y-10 border-4 border-red bg-customBackground-2">
                    <h1> Main Title </h1>
                    {/* 1 */}
                    <div className="p-2 border-4 border-purple">
                        <span> Sub Title </span>
                        {/* flex */}
                        <div className="flex md:flex-col sm:flex-col">
                            <span className="w-1/3 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                            <span className="w-1/3 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                            <span className="w-1/3 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                        </div>
                        <CommonInput isValid={undefined} onChange={undefined} />
                        {/* grid */}
                        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
                            <span className="w-full sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                            <span className="w-full sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                            <span className="w-full sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                        </div>
                    </div>
                    
                    {/* 2 */}
                    <div className="p-2 border-4 border-purple space-y-3">
                        <h1> Sub Title </h1>
                        <CommonInput isValid={undefined} onChange={undefined} />
                        <CommonInput isValid={undefined} onChange={undefined} />
                        <CommonInput isValid={undefined} onChange={undefined} />
                        <CommonInput isValid={undefined} onChange={undefined} />
                    </div>
                </div>
            </section>
        </>
    );
};
