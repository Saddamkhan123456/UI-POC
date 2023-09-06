import React from 'react';
import Card from '../../Components/Card/Card';
import { TEXT_CONSTANTS, teamCards } from '../../Utils/Constants';
import { GridContainer } from '../GlobalStyles';
import { Sections } from './styles';
import { H2 } from '../../Assets/Styles/Utils';

const BookmarkedCardSection = () => {
  return (
    <Sections>
      <GridContainer>
        <H2>{TEXT_CONSTANTS.BOOKMARK_HEADING}</H2>
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

export default BookmarkedCardSection;
