import { styled } from 'styled-components';
import { theme } from '../../theme';

export interface ICardOverlay {
  variant?: string;
  isBackgroundImg?: boolean;
  backgroundImage?: string;
  text?: string;
  isIcon?: boolean;
  kind?: string;
}

export interface IMediaCard {
  backgroundImage?: any;
  heading?: string;
  mediaText?: string;
  centerAlign?: boolean;
  isBackgroundImg?: boolean;
}

export const SolidCardOverlay = styled.div<ICardOverlay>`
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(184, 188, 192, 0.25);
  color: ${(props) => (props.isBackgroundImg ? `${theme.white}` : `${theme.gray500}`)};
  background-image: ${(props) => props.isBackgroundImg && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 180px;
  background-position: center;
  background-size: cover;
  font-family: sans-serif;
  padding: 10px;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  font-family: sans-serif;
  text-align: center;
`;

export const MediaCard = styled.div<ICardOverlay>`
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(184, 188, 192, 0.25);
  background-color: ${theme.white};
  background-repeat: no-repeat;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 180px;
  font-family: sans-serif;
  padding: 10px;
`;

export const MediaCardC = styled.div<IMediaCard>`
  border-radius: 12px;
  background-image: ${(props) => props.isBackgroundImg && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  border: 0;
  gap: 1rem;
  font-family: sans-serif;
`;

export const MediaCardParagraph = styled.p<IMediaCard>`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.gray500};
  font-family: sans-serif;
`;

export const MediaCardHeading = styled.p<IMediaCard>`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 8px;
  color: ${theme.gray500};
  font-family: sans-serif;
`;

export const MediaCardBanner = styled.div<IMediaCard>`
  background-image: ${(props) => props.isBackgroundImg && `url(${props.backgroundImage}) !important`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain !important;
  height: 143px;
  margin-bottom: 24px;
  font-family: sans-serif;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(184, 188, 192, 0.25);
  padding: 0 20px;
`;

export const MediaCardContentWrapper = styled.div<IMediaCard>`
  text-align: ${(props) => (props.centerAlign ? 'center' : 'left')};
`;
