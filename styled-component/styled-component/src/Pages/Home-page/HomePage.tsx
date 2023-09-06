import React from 'react';
import Layout from '../Layout';
import HeaderTopSection from './HeaderTopSection';
import TeamCardSection from './TeamCardSection';
import BookmarkedCardSection from './Bookmarked';
import MoreForYOuSection from './MoreForYou';
import PopularTechDigestSection from './PopularTechDigest';

const HomePage = () => {
  return (
    <Layout
      Children={
        <>
          <HeaderTopSection />
          <TeamCardSection />
          <PopularTechDigestSection />
          <BookmarkedCardSection />
          <MoreForYOuSection />
        </>
      }
    />
  );
};

export default HomePage;
