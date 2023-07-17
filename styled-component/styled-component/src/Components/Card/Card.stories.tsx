import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const SolidCardOverlayWithoutBackground = {
  args: {
    variant: 'SolidCard',
    text: 'Languages',
    kind: 'logo',
    isIcon: true,
    isBackgroundImg: false,
  },
};
export const SolidCardOverlayWithBackground = {
  args: {
    variant: 'SolidCard',
    text: 'Languages',
    kind: 'logo',
    isIcon: true,
    isBackgroundImg: true,
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2022/10/Blog-Inserting-code-scaled-1.jpg',
  },
};

export const MediaCardWithText = {
  args: {
    variant: 'MediaCard',
    heading: 'How To Start Automation Issue With Cypress Quickly?',
    mediaText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2022/10/Blog-Inserting-code-scaled-1.jpg',
    centerAlign: false,
  },
};
export const MediaCardWithHeading = {
  args: {
    variant: 'MediaCard',
    heading: 'Purescript',
    // mediaText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2021/10/kafka.png',
    centerAlign: true,
  },
};
