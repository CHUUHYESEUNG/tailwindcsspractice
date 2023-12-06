import { Meta, StoryObj } from "@storybook/react";
import { CommonInput } from "./CommonInput";

const meta = {
    title: "Example/CommonInput",
    component: CommonInput,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof CommonInput>;

export default meta;
type Story = StoryObj<typeof CommonInput>;

export const DefaultInput: Story = {
    args: {
        labelName: "label",
        inputName: "inputName",
        required: true,
        validCheckYN: true,
        type: "string",
        placeholder: "I AM PLACEHOLDER",
    },
};
