import React from 'react';
import Categories from '../../Components/Molecules/Categories/Categories';
import styles from './Home.module.css';
import Bookmarked from '../../Components/Molecules/Bookmarked/Bookmarked';
import MoreForYou from '../../Components/Molecules/MoreForYou/MoreForYou';
import TechDigest from '../../Components/Molecules/TechDigest/TechDigest';
import Header from '../../Components/Molecules/Header/Header';
import Banner from '../../Components/Molecules/Banner/Banner';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.homeWrapper}>
        <div className={styles.container}>
          <Categories />
          <TechDigest />
          <Bookmarked />
          <MoreForYou />
        </div>
      </div>
    </>
  );
};

export default Home;
