import type { Preview } from "@storybook/react";
import "../stories/index.css";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const parameters = {
    nextRouter: {
      Provider: AppRouterContext.Provider, // next 13 (using next/navigation)
    },
}

export default preview;
