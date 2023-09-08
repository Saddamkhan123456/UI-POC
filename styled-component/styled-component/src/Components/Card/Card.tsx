import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { ICardOverlay, IMediaCard } from './styles';

import {
  MediaCardC,
  MediaCardBanner,
  MediaCardContentWrapper,
  MediaCardHeading,
  MediaCardParagraph,
  SolidCardOverlay,
  StyledParagraph,
} from './styles';

interface ICardOverlayCProps extends ICardOverlay, IMediaCard {
  backgroundImage?: string;
}

const CardOverlayC: React.FC<ICardOverlayCProps> = ({
  variant,
  isIcon,
  text,
  isBackgroundImg,
  backgroundImage,
  kind,
  mediaText,
  heading,
  centerAlign,
}) => {
  switch (variant) {
    case 'SolidCard':
      return (
        <SolidCardOverlay isBackgroundImg={isBackgroundImg} backgroundImage={backgroundImage}>
          {isIcon && <Icon kind={kind} width={40} height={40} />}
          <StyledParagraph>{text}</StyledParagraph>
        </SolidCardOverlay>
      );
    case 'MediaCard':
      return (
        <MediaCardC>
          <MediaCardBanner isBackgroundImg={isBackgroundImg} backgroundImage={backgroundImage}></MediaCardBanner>
          <MediaCardContentWrapper centerAlign={centerAlign}>
            <MediaCardHeading>{heading}</MediaCardHeading>
            {mediaText && <MediaCardParagraph>{mediaText}</MediaCardParagraph>}
          </MediaCardContentWrapper>
        </MediaCardC>
      );
    default:
      return null;
  }
};

export default CardOverlayC;
