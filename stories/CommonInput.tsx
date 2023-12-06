import { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";

interface PropType {
    labelName: string; // 라벨 이름
    inputName: string; // 세팅 할 프로퍼티 이름
    required: boolean; // 필수 표시 여부(별 표시)
    validCheckYN: boolean; // 유효성 검증 여부 (문자, 숫자, 이메일)
    type: string; // 유효성 검증 타입 (문자, 숫자, 이메일)
    placeholder: string; // placeholder 내용
    onChange: any; // onChange 이벤트 발생 시 호출 할 이벤트
    topText?: string; // 도움말
    maxLength?: number; // 최대 길이
    textAreaYn?: boolean; // textarea 여부
    textAreaSize?: number; // textarea 사이즈
}

export const CommonInput = ({
    labelName,
    inputName,
    required,
    validCheckYN,
    placeholder,
    onChange,
    topText,
    type,
    maxLength,
    textAreaYn,
    textAreaSize,
}: PropType) => {
    const [textInputStyle, setTextInputStyle] = useState(
        "resize-none focus:outline-1 focus:outline-[#4399FF] bg-[#F5F5F5] w-full rounded-[10px] px-2 py-4 sm:p-4 ${FdFontSize.fdText4} ${FdFontSize.fdText4} sm:${FdFontSize.fdText4} placeholder:text-[#7A7A7A]"
    );
    const [commonValue, setCommonValue] = useState("default value");

    const onChangeText = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const value = e.target.value;
        let isValidText = false;
        console.log("value", value);
    };

    return (
        <div className="w-full flex flex-col gap-1.5">
            <div>
                <input
                    type="text"
                    id={inputName}
                    name={inputName}
                    value={commonValue}
                    placeholder={placeholder}
                    onChange={onChangeText}
                    className={
                        "resize-none focus:outline-1 focus:outline-[#4399FF] bg-[#F5F5F5] w-full rounded-[10px] px-2 py-4 sm:p-4 ${FdFontSize.fdText4} ${FdFontSize.fdText4} sm:${FdFontSize.fdText4} placeholder:text-[#7A7A7A]"
                    }
                    required={required}
                    maxLength={maxLength}
                />
            </div>
        </div>
    );
};
