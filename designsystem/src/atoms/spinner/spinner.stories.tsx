import { Story } from "@storybook/react";
import Spinner from "./spinner";

const BannerComponent = {
  title: "Design System/Atoms/Banner",
  component: Spinner,
};

export default BannerComponent;

const Template: Story<any> = (args) => <Spinner {...args} />;

export const BasicBanner = Template.bind({});
