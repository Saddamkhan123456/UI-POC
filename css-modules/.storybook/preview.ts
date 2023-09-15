import type { Preview } from "@storybook/react";
import "../src/Assets/Styles/Theme.module.css";
import "./Storybook.modules.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
