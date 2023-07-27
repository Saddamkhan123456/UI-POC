import React from 'react';
import Categories from '../../Components/Molecules/Categories/Categories';
import styles from './Home.module.css';
import Bookmarked from '../../Components/Molecules/Bookmarked/Bookmarked';
import MoreForYou from '../../Components/Molecules/MoreForYou/MoreForYou';
import TechDigest from '../../Components/Molecules/TechDigest/TechDigest';
import Header from '../../Components/Molecules/Header/Header';
import Banner from '../../Components/Molecules/Banner/Banner';
import Container from '../../Components/Layout/Container/Container';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.homeWrapper}>
        <Container>
          <Categories />
          <TechDigest />
          <Bookmarked />
          <MoreForYou />
        </Container>
      </div>
    </>
  );
};

export default Home;
