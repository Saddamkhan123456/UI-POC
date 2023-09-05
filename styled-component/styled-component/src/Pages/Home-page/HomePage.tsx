import React from 'react';
import Layout from '../Layout';
import HeaderTopSection from './HeaderTopSection';
import TeamCardSection from './TeamCardSection';

const HomePage = () => {
  return (
    <Layout
      Children={
        <>
          <HeaderTopSection />
          <TeamCardSection />
        </>
      }
    />
  );
};

export default HomePage;
