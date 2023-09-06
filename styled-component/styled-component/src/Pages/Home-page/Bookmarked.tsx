import React from 'react';
import Card from '../../Components/Card/Card';
import { BookMarkedCardData, TEXT_CONSTANTS } from '../../Utils/Constants';
import { AlignedLeft, GridContainer } from '../GlobalStyles';
import { Sections } from './styles';
import { H2 } from '../../Assets/Styles/Utils';

const BookmarkedCardSection = () => {
  return (
    <>
      <AlignedLeft>
        <H2>{TEXT_CONSTANTS.BOOKMARK_HEADING}</H2>
      </AlignedLeft>
      <Sections>
        <GridContainer columnCount={4}>
          {BookMarkedCardData.map((item, index) => (
            <Card
              variant='MediaCard'
              heading={item.heading}
              backgroundImage={item.backgroundImage}
              mediaText={item.mediaText}
              centerAlign={false}
              isBackgroundImg={true}
            />
          ))}
        </GridContainer>
      </Sections>
    </>
  );
};

export default BookmarkedCardSection;
