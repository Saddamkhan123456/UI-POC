import React from 'react';
import Layout from '../Layout';
import PopularTechDigest from '../PopularTechDigest';
import HeaderTopSection from './HeaderTopSection';
import TeamCardSection from './TeamCardSection';

const HomePage = () => {
  return (
    <Layout
      Children={
        <>
          <HeaderTopSection />
          <TeamCardSection />
          <PopularTechDigest />
        </>
      }
    />
  );
};

export default HomePage;
