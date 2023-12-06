import React from "react";

interface InputBoxProps {
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ value, onChange }: InputBoxProps) => {
    return <input type="text" value={value} />;
};
