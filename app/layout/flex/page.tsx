import { CommonInput } from "../../components/CommonInput";

export default function layout() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow bg-customBackground-1">
                    <div className="flex w-screen min-h-full bg-customBackground-1">
                        <div className="w-1/4 sm:hidden min-h-full bg-customBackground-1 border-2">
                            Side
                        </div>
                        <div className="w-2/4 sm:w-[640px] md:w-[640px] min-h-full border-2">
                            <div className="flex flex-col flex-grow">
                                <div className="h-96 border-2 bg-purple">
                                    Logo
                                </div>
                                {/* Content 1 */}
                                <div className="border-2 rounded-t-xl bg-white flex-grow space-y-5">
                                    {/* Main box */}
                                    <div className="pl-7 pr-7 pt-16 pb-16 gap-14">
                                        {/* Sub box */}
                                        <div className="flex flex-col">
                                            <span className="text-xl bold">
                                                피보험자 인적 사항 및 보상
                                                안내받으실 분
                                            </span>
                                            <div>
                                                {/* 첫 번째 방법 : (1) 전체 화면일 때 flex-row (2) sm, md일 때 flex-col */}
                                                <div className="flex md:flex-col sm:flex-col">
                                                    <span className="w-1/3 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                                                    <span className="w-1/3 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                                                    <span className="w-1/3 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                                                </div>
                                                {/* 두 번째 방법 : wrap 흘러 내리는 느낌 */}
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <div className="flex flex-wrap gap-3">
                                                    <span className="w-1/4 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                                                    <span className="w-1/4 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                                                    <span className="w-1/4 sm:w-full md:w-full h-10 border-2 border-red-300"></span>
                                                </div>
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Content 2 */}
                                <div className="border-2 rounded-t-xl bg-white flex-grow space-y-5">
                                    {/* Main box */}
                                    <div className="pl-7 pr-7 pt-16 pb-16 gap-14">
                                        {/* Sub box */}
                                        <div className="flex flex-col">
                                            <span className="text-xl bold">
                                                보험 청구 사항
                                            </span>
                                            <div>
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Content 3 */}
                                <div className="border-2 rounded-t-xl bg-white flex-grow space-y-5">
                                    {/* Main box */}
                                    <div className="pl-7 pr-7 pt-16 pb-16 gap-14">
                                        {/* Sub box */}
                                        <div className="flex flex-col">
                                            <span className="text-xl bold">
                                                증빙 서류 등록 (복수 업로드 가능)
                                            </span>
                                            <div>
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Content 4 */}
                                <div className="border-2 rounded-t-xl bg-white flex-grow space-y-5">
                                    {/* Main box */}
                                    <div className="pl-7 pr-7 pt-16 pb-16 gap-14">
                                        {/* Sub box */}
                                        <div className="flex flex-col">
                                            <span className="text-xl bold">
                                                보험금 청구를 위한 확인 및 동의
                                            </span>
                                            <div>
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                                <CommonInput isValid={undefined} onChange={undefined} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 sm:hidden min-h-full bg-customBackground-1 border-2">
                            Side
                        </div>
                    </div>
                </div>

                <footer className="bg-gray-800 p-4 text-white text-center bg-footer">
                    <div className="w-full flex flex-wrap flex-col justify-center items-center">
                        <h3 className="font-bold text-white">
                            보상 청구 시스템
                        </h3>
                        <p className="py-4 text-sm">개인정보처리방침</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
