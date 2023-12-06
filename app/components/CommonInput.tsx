interface PropType {
    isValid: any;
    onChange: any;
}

export const CommonInput = ({
    isValid,
    onChange
}: PropType) => {
    return (
        <>
            <div className="flex flex-col gap-1">
                <label>이메일</label>
                <input
                    type="text"
                    placeholder="이메일을 입력해주세요."
                    className="w-full rounded-xl px-2 py-4 sm:p-4 text-lg sm:text-lg placeholder:text-plh-1 resize-none focus:outline-1 focus:outline-textOutline-1 textBackground-1 border-2"
                />
            </div>
            <p className="text-sm text-[#FF7D10]">올바르게 입력해주세요. </p>
        </>
    );
};
