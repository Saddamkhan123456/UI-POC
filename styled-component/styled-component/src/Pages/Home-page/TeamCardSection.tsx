import React from 'react';
import Card from '../../Components/Card/Card';
import { teamCards } from '../../Utils/Constants';
import { GridContainer } from '../GlobalStyles';
import { Sections } from './styles';

const TeamCardSection = () => {
  return (
    <Sections>
      <GridContainer columnCount={4}>
        {teamCards.map((item, index) => (
          <Card
            variant='SolidCard'
            text={item.text}
            isIcon={item.isIcon}
            isBackgroundImg={item.isBackgroundImg}
            kind={item.kind}
          />
        ))}
      </GridContainer>
    </Sections>
  );
};

export default TeamCardSection;
