// routes
export enum APP_PAGES {
  HOME_PAGE = '/',
  BOOKMARKED = 'Bookmarked',
}

//TEXT_CONSTANTS = {
export const TEXT_CONSTANTS = {
  HOME_PAGE_HEADING: 'Hello, how may I help you ?',
  BOOKMARK_HEADING: 'Bookmarked',
  MORE_FOR_YOU: 'More for you',
  POPULAR_TECH_DIGEST: 'Popular Tech Digest',
};

export const teamCards = [
  { text: 'language', kind: 'language', isIcon: true, isBackgroundImg: false },
  { text: 'web frameworks', kind: 'web-frameworks', isIcon: true, isBackgroundImg: false },
  { text: 'database', kind: 'database', isIcon: true, isBackgroundImg: false },
  { text: 'Architecture & Deisgn', kind: 'architecture & deisgn', isIcon: true, isBackgroundImg: false },
  { text: 'big-data', kind: 'big-data', isIcon: true, isBackgroundImg: false },
  { text: 'devops', kind: 'devops', isIcon: true, isBackgroundImg: false },
  { text: 'UX', kind: 'UX', isIcon: true, isBackgroundImg: false },
  { text: 'QA', kind: 'QA', isIcon: true, isBackgroundImg: false },
];
export const BookMarkedCardData = [
  {
    heading: 'How To Start Automation Issue With Cypress Quickly?',
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2022/01/blog-amit-kumar-.jpg',
    mediaText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    isBackgroundImg: true,
  },
  {
    heading: 'How To Start Automation Issue With Cypress Quickly?',
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2022/10/blog-fetaure-4.jpg',
    mediaText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    heading: 'How To Start Automation Issue With Cypress Quickly?',
    backgroundImage:
      'https://www.talentica.com/wp-content/uploads/2021/04/prem-baranwal-cryptography-blockchain-blog-1.jpg',
    mediaText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    heading: 'How To Start Automation Issue With Cypress Quickly?',
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2022/10/Azure-Active-Directory-feature-image.jpg',
    mediaText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

export const MoreForYouData = [
  {
    text: 'Recently Uploaded',
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2022/01/blog-amit-kumar-.jpg',
    isBackgroundImg: true,
  },
  {
    text: 'Trending',
    backgroundImage:
      'https://www.talentica.com/wp-content/uploads/2021/04/prem-baranwal-cryptography-blockchain-blog-1.jpg',
    isBackgroundImg: true,
  },
  {
    text: 'Recommended',
    backgroundImage: 'https://www.talentica.com/wp-content/uploads/2022/10/Blog-Inserting-code-scaled-1.jpg',
    isBackgroundImg: true,
  },
];
export const PopularTechDigestData = [
  {
    heading: 'Purescript',
    backgroundImage: '../Assets/Images/kafka.png',
    isBackgroundImg: true,
  },
  {
    heading: 'Apache Kafka',
    backgroundImage: '../Assets/Images/aerospike.png',
    isBackgroundImg: true,
  },
  {
    heading: 'Redis',
    backgroundImage: '../Assets/Images/purescript.png',
    isBackgroundImg: true,
  },
  {
    heading: 'Aerospike',
    backgroundImage: '../Assets/Images/redis.png',
    isBackgroundImg: true,
  },
];
