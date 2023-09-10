import React from 'react';
import Card from '../../Components/Card/Card';
import { TEXT_CONSTANTS } from '../../Utils/Constants';
import { Sections } from './styles';
import { H2 } from '../../Assets/Styles/Utils';
import Carousel from '../../Components/Carousel/Carousel';

const PopularTechDigestSection = () => {
  const carouselItems = [
    <Card
      key={1}
      variant={'MediaCard'}
      heading={'Purescript'}
      isBackgroundImg={true}
      backgroundImage={'https://www.talentica.com/wp-content/uploads/2022/10/Blog-Inserting-code-scaled-1.jpg'}
      centerAlign={true}
    />,
    <Card
      key={2}
      variant={'MediaCard'}
      heading={'Apache Kafka'}
      isBackgroundImg={true}
      backgroundImage={
        'https://www.talentica.com/wp-content/uploads/2021/04/prem-baranwal-cryptography-blockchain-blog-1.jpg'
      }
      centerAlign={true}
    />,
    <Card
      key={3}
      variant={'MediaCard'}
      heading={'Redis'}
      isBackgroundImg={true}
      backgroundImage={'https://www.talentica.com/wp-content/uploads/2022/10/blog-fetaure-4.jpg'}
      centerAlign={true}
    />,
    <Card
      key={4}
      variant={'MediaCard'}
      heading={'Aerospike'}
      isBackgroundImg={true}
      backgroundImage={'https://www.talentica.com/wp-content/uploads/2022/01/blog-amit-kumar-.jpg'}
      centerAlign={true}
    />,
    <Card
      key={5}
      variant={'MediaCard'}
      heading={'Apache Kafka'}
      isBackgroundImg={true}
      backgroundImage={
        'https://www.talentica.com/wp-content/uploads/2021/04/prem-baranwal-cryptography-blockchain-blog-1.jpg'
      }
      centerAlign={true}
    />,
  ];
  return (
    <>
      <H2>{TEXT_CONSTANTS.POPULAR_TECH_DIGEST}</H2>
      <Sections>
        <Carousel items={carouselItems} />
      </Sections>
    </>
  );
};

export default PopularTechDigestSection;
