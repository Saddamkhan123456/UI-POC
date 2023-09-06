import React from 'react';
import Card from '../../Components/Card/Card';
import { MoreForYouData, TEXT_CONSTANTS } from '../../Utils/Constants';
import { AlignedLeft, GridContainer } from '../GlobalStyles';
import { Sections } from './styles';
import { H2 } from '../../Assets/Styles/Utils';

const MoreForYOuSection = () => {
  return (
    <>
      <AlignedLeft>
        <H2>{TEXT_CONSTANTS.MORE_FOR_YOU}</H2>
      </AlignedLeft>
      <Sections>
        <GridContainer columnCount={3}>
          {MoreForYouData.map((item, index) => (
            <Card
              variant={'SolidCard'}
              text={item.text}
              isIcon={false}
              isBackgroundImg={true}
              backgroundImage={item.backgroundImage}
            />
          ))}
        </GridContainer>
      </Sections>
    </>
  );
};

export default MoreForYOuSection;
