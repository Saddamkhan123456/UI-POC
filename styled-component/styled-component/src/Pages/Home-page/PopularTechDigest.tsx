import React from 'react';
import Card from '../../Components/Card/Card';
import { PopularTechDigestData, TEXT_CONSTANTS } from '../../Utils/Constants';
import { GridContainer } from '../GlobalStyles';
import { Sections } from './styles';
import { H2 } from '../../Assets/Styles/Utils';

const PopularTechDigestSection = () => {
  return (
    <>
      <H2>{TEXT_CONSTANTS.POPULAR_TECH_DIGEST}</H2>

      <Sections>
        <GridContainer columnCount={4}>
          {PopularTechDigestData.map((item, index) => (
            <Card
              variant={'MediaCard'}
              heading={item.heading}
              isBackgroundImg={true}
              backgroundImage={item.backgroundImage}
              centerAlign={true}
            />
          ))}
        </GridContainer>
      </Sections>
    </>
  );
};

export default PopularTechDigestSection;
