import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { RiCloseLine } from 'react-icons/ri';

const chipSmall = css`
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: centre;
  gap: 2.5rem;
  font-size: 0.75rem;
  font-weight: 400;
`;
const chipMedium = css`
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: centre;
  gap: 2.5rem;
  font-size: 0.875rem;
  font-weight: 400;
`;
const chipLarge = css`
  padding: 0.625rem 1rem;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: centre;
  gap: 2.5rem;
  font-size: 0.875rem;
  font-weight: 400;
`;

const outlined = css`
  border: 1px solid #dedeed;
  background: '#fff;
  color: '#000'
`;
const iconSpan = css`
  cursor: pointer;
  font-size: 0;
  color: #b6b9be;
  &:hover {
    color: #343434;
  }
`;

interface ChipProps {
  color?: string;
  backgroundColor?: string;
  label: string;
  handleDelete?: () => void;
  size: 'small' | 'medium' | 'large';
  outlined?: boolean;
}

const getSizeVariant = (a: string) => {
  switch (a) {
    case 'small':
      return chipSmall;
    case 'medium':
      return chipMedium;
    case 'large':
      return chipLarge;
  }
};

const StyledChip = styled.span<{ chipsize: string; isOutlined?: boolean }>`
  ${(props) => getSizeVariant(props.chipsize)};
  ${(props) => (props.isOutlined ? outlined : '')}
`;

const StyledIconContainer = styled.span`
  ${iconSpan}
`;

const Chip: React.FC<ChipProps> = ({
  outlined,
  color = outlined ? '' : '#000',
  backgroundColor = outlined ? '' : '#EAF5FF',
  label,
  size,
  handleDelete,
}) => {
  return (
    <StyledChip chipsize={size} isOutlined={outlined} style={{ color, backgroundColor }}>
      {label}
      {handleDelete && (
        <StyledIconContainer onClick={handleDelete}>
          <RiCloseLine size={'0.825rem'} color='currentColor' />
        </StyledIconContainer>
      )}
    </StyledChip>
  );
};

export default Chip;
