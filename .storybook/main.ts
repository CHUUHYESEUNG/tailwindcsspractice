import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: [
        // 스토리북에 사용할 .mdx, .stories 파일의 위치
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../../components/**/*.mdx",
        "../../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../../pages/**/*.mdx",
        "../../pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../../layout/**/*.mdx",
        "../../layout/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        // 적용할 addon
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "storybook-addon-next-router",
    ],
    framework: {
        // 프레임워크 종류
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        // docs 관련
        autodocs: "tag",
    },
    core: {
        builder: "@storybook/builder-webpack5",
    },
};
export default config;
