import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        // Storybook의 Story 위치가 stories 안에 있을 때 다음과 같이 설정
        "./stories/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        screens: {
            // sm: { min: "390px", max: "819px" },
            // md: { min: "820px", max: "1023px" },
            // lg: { min: "1080px" },
            sm: { min: "0px", max: "640px" },
            md: { min: "641px", max: "1024px" },
            lg: { min: "1025px" },
        },
        colors: {
            "customBackground-1": "#E2F7FF",
            "customBackground-2": "#DADADA",
            white: "#ffffff",
            purple: "#3f3cbb",
            red: "#ff0000",
            midnight: "#121063",
            metal: "#565584",
            tahiti: "#3ab7bf",
            silver: "#ecebff",
            blue: "#0000ff",
            "bubble-gum": "#ff77e9",
            bermuda: "#78dcca",
            footer: "#3F3F3F",
            "textBackground-1": "#F5F5F5",
            "textOutline-1": "#4399FF",
            "plh-1": "#7A7A7A",
        },
    },
    plugins: [],
};
export default config;
