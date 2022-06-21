import { Story } from "@storybook/react";
import { DateSelector, DateSelectorProps } from "./index";

const DateSelectorComponent = {
  title: "Design System / Molecules / Date Picker",
  component: DateSelector,
  argTypes: {
    disabled: {
      type: "boolean",
    },
    isDateRange: {
      type: "boolean",
    }
  }
};

export default DateSelectorComponent

const Template: Story<DateSelectorProps> = (args) => <div>
  <DateSelector {...args} />
</div>;

export const DefaultDateSelector = Template.bind({});
DefaultDateSelector.args = {
  disabled: false,
};

export const DateRangeSelector = Template.bind({});
DateRangeSelector.args = {
  isDateRange: true,
};
