import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const PrimaryHeader = {
  args: {
    primary: true,
    label: 'Button',
  },
};
