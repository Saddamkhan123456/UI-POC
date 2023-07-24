import TagContainer from './TagContainer';

export default {
  title: 'Component/TagContainer',
  component: TagContainer,
  //   tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Tag = () => {
  return <TagContainer />;
};
