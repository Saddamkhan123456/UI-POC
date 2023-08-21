import React from 'react';
import Card from '../Components/Card/Card';
import { GridContainer } from './GlobalStyles';
import { Sections } from './Home-page/styles';

const PopularTechDigest = () => {
  return (
    <Sections>
      <GridContainer>
        {teamCards.map((item, index) => (
          <Card variant='SolidCard' isIcon={item.isIcon} isBackgroundImg={item.isBackgroundImg} kind={item.kind} />
        ))}
      </GridContainer>
    </Sections>
  );
};

export default PopularTechDigest;
