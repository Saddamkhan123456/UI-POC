import React from 'react';
import Categories from '../../Components/Molecules/Categories/Categories';
import styles from './Home.module.css';
import Bookmarked from '../../Components/Molecules/Bookmarked/Bookmarked';
import MoreForYou from '../../Components/Molecules/MoreForYou/MoreForYou';
import TechDigest from '../../Components/Molecules/TechDigest/TechDigest';

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <Categories />
        <TechDigest />
        <Bookmarked />
        <MoreForYou />
      </div>
    </div>
  );
};

export default Home;
