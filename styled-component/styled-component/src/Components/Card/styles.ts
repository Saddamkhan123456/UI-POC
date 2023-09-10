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
  border-radius: 0.75rem;
  box-shadow: 0 0 0.625rem 0 rgba(184, 188, 192, 0.25);
  color: ${(props) => (props.isBackgroundImg ? `${theme.white}` : `${theme.gray500}`)};
  background-image: ${(props) => props.isBackgroundImg && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.0625rem;
  height: 11.25rem;
  background-position: center;
  background-size: cover;
  font-family: sans-serif;
  padding: 0.625rem;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: sans-serif;
  text-align: center;
`;

export const MediaCard = styled.div<ICardOverlay>`
  border-radius: 0.75rem;
  box-shadow: 0 0 0.625rem 0 rgba(184, 188, 192, 0.25);
  background-color: ${theme.white};
  background-repeat: no-repeat;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.0625rem;
  height: 11.25rem;
  font-family: sans-serif;
  padding: 0.625rem;
`;

export const MediaCardC = styled.div<IMediaCard>`
  border-radius: 0.75rem;
  background-image: ${(props) => props.isBackgroundImg && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  border: 0;
  gap: 0.0625rem;
  font-family: sans-serif;
`;

export const MediaCardParagraph = styled.p<IMediaCard>`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.gray500};
  font-family: sans-serif;
`;

export const MediaCardHeading = styled.p<IMediaCard>`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  color: ${theme.gray500};
  font-family: sans-serif;
`;

export const MediaCardBanner = styled.div<IMediaCard>`
  background-image: ${(props) => props.isBackgroundImg && `url(${props.backgroundImage}) !important`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain !important;
  height: 8.9375rem;
  margin-bottom: 1.5rem;
  font-family: sans-serif;
  border-radius: 0.375rem;
  background: #fff;
  box-shadow: 0 0 0.625rem 0 rgba(184, 188, 192, 0.25);
  padding: 1.25rem;
`;

export const MediaCardContentWrapper = styled.div<IMediaCard>`
  text-align: ${(props) => (props.centerAlign ? 'center' : 'left')};
};
`;
