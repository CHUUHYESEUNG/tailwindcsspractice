import { Meta, StoryObj } from "@storybook/react";
import { CommonInput } from "./CommonInput";

const meta = {
    title: "components/CommonInput",
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
        isValid: true,
        onChange: () => {}
    },
};
