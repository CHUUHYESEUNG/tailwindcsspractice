import { Meta, StoryObj } from "@storybook/react";
import { InputBox } from "./InputBox";

const meta = {
    title: "Example/InputBox",
    component: InputBox,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof InputBox>;

export const DefaultInput: Story = {
    args: {
        value: "안녕",
    },
};
