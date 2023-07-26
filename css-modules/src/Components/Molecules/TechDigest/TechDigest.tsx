import React from 'react';
import Heading from '../../Atoms/Heading/Heading';
import Carousel from '../../Atoms/Carousel/Carousel';
import styles from './TechDigest.module.css';
import Divider from '../../Atoms/Divider/Divider';
import { techDigestData } from './Data';

const TechDigest = () => {
  return (
    <>
      <div className={styles.techDigestContainer}>
        <Heading label='Popular Tech Digest' textCenterAlign />
        <Carousel techData={techDigestData} />
      </div>
      <Divider />
    </>
  );
};

export default TechDigest;
