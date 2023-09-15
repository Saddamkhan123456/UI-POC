import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const h3Styled = css`
  font-size: 2.375rem;
  line-height: 1.2;
`;
const h4Styled = css`
  font-size: 2rem;
  line-height: 1.2;
`;
const h5Styled = css`
  font-size: 1.5rem;
  line-height: 1.167;
`;
const h6Styled = css`
  font-size: 1.25rem;
  line-height: 1.4;
`;
const subtitleStyled = css`
  font-size: 1rem;
  line-height: 1.15;
`;
const bodyStyled = css`
  font-size: 0.875rem;
  line-height: 1.4;
`;
const captionStyled = css`
  font-size: 0.75rem;
  line-height: 1.167;
`;

export interface TypographyProps {
  variant: 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption';
  color?: string;
  text: any;
  fontWeight?: 'normal' | 'bold' | 'bolder';
}

const H3Typo = styled.h3`
  ${h3Styled}
`;
const H4Typo = styled.h4`
  ${h4Styled}
`;
const H5Typo = styled.h5`
  ${h5Styled}
`;
const H6Typo = styled.h6`
  ${h6Styled}
`;
const SubtileTypo = styled.p`
  ${subtitleStyled}
`;
const BodyTypo = styled.p`
  ${bodyStyled}
`;
const CaptionTypo = styled.span`
  ${captionStyled}
`;

const getFontWeight = (fontWeight: string) => {
  switch (fontWeight) {
    case 'normal':
      return 400;
    case 'bold':
      return 500;
    case 'bolder':
      return 700;
    default:
      return 400;
  }
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  text,
  fontWeight = 'normal',
}) => {
  switch (variant) {
    case 'h3':
      return (
        <H3Typo style={{ color: color, fontWeight: getFontWeight(fontWeight) }}>
          {text}
        </H3Typo>
      );
    case 'h4':
      return (
        <H4Typo style={{ color: color, fontWeight: getFontWeight(fontWeight) }}>
          {text}
        </H4Typo>
      );
    case 'h5':
      return (
        <H5Typo style={{ color: color, fontWeight: getFontWeight(fontWeight) }}>
          {text}
        </H5Typo>
      );
    case 'h6':
      return (
        <H6Typo style={{ color: color, fontWeight: getFontWeight(fontWeight) }}>
          {text}
        </H6Typo>
      );
    case 'subtitle':
      return (
        <SubtileTypo
          style={{ color: color, fontWeight: getFontWeight(fontWeight) }}
        >
          {text}
        </SubtileTypo>
      );
    case 'body':
      return (
        <BodyTypo
          style={{ color: color, fontWeight: getFontWeight(fontWeight) }}
        >
          {text}
        </BodyTypo>
      );
    case 'caption':
      return (
        <CaptionTypo
          style={{ color: color, fontWeight: getFontWeight(fontWeight) }}
        >
          {text}
        </CaptionTypo>
      );
    default:
      return <></>;
      break;
  }
};

export default Typography;
