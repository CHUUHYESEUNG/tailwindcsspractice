import { CommonInput } from "../../components/CommonInput";

export default function layout() {
    return (
        <> 
            <header className="bg-customBackground-1 p-4">  
                <div className="w-full flex flex-wrap flex-col justify-center items-center bg-customBackground-1">  
                    <h1 className="font-bold text-black">
                        보상 청구 시스템
                    </h1>  
                    <p className="py-4 text-sm">Header</p>
                </div>  
            </header>  
            
            {/* Contents 영역 */}
            <div className="flex min-h-screen">
                <div className="w-1/3 sm:hidden p-2  bg-customBackground-1 border-4 border-blue">Side</div>
                <div className="w-1/3 sm:w-[640px] md:w-[640px] min-h-full border-2">
                    <div className="h-full pl-7 pr-7 pt-16 pb-16 gap-14 border-4 border-red bg-customBackground-2">
                        <span> Main Title </span>
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
                    </div>
                </div>
                <div className="w-1/3 sm:hidden p-2  bg-customBackground-1 border-4 border-blue">Side</div>
            </div>

            <footer className="bg-gray-800 p-4 bg-footer">
                <div className="w-full flex flex-wrap flex-col justify-center items-center">
                    <h3 className="font-bold text-white">
                        보상 청구 시스템
                    </h3>
                    <p className="py-4 text-sm">Footer</p>
                </div>
            </footer>
        </>
    );
}
