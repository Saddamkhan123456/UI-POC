import Dropdown from './Dropdown';

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
  //   tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Dropdowns = () => {
  return <Dropdown />;
};
