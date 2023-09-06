import React from 'react';
import Layout from '../Layout';
import HeaderTopSection from './HeaderTopSection';
import TeamCardSection from './TeamCardSection';
import BookmarkedCardSection from './Bookmarked';

const HomePage = () => {
  return (
    <Layout
      Children={
        <>
          <HeaderTopSection />
          <TeamCardSection />
          <BookmarkedCardSection />
        </>
      }
    />
  );
};

export default HomePage;
