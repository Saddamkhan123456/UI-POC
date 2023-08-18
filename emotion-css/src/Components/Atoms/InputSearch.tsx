import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BiSearchAlt2 } from 'react-icons/bi';

interface InputSearchProps {
  value?: string;
  onChange?: () => void;
  onSubmit?: () => void;
  isSearchIcon?: boolean;
}

const inputCss = css`
  padding: 0.75rem 1rem;
  font-size: 0.825rem;
  line-height: 1.15;
  color: #343434;
  width: 100%;
  border: 1px solid #dedeed;
  border-radius: 0.25rem 0 0 0.25rem;
  border-right: none;
  &:active {
    border-color: #0b93df;
  }
`;

const buttonCss = css`
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.149;
  color: #fff;
  background: #0b93df;
  border: 1px solid #0b93df;
  border-radius: 0 0.25rem 0.25rem 0;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

const outerContainer = css`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  ${inputCss}
`;

const StyledButton = styled.button`
  ${buttonCss}
`;

const StyleContainer = styled.div`
  ${outerContainer}
`;

const InputSearch: React.FC<InputSearchProps> = ({
  value,
  onSubmit,
  onChange,
  isSearchIcon = false,
}) => {
  return (
    <StyleContainer>
      <StyledInput
        type='text'
        placeholder='Search here..'
        value={value}
        onChange={onChange}
        name='search'
      />
      <StyledButton type='submit' onClick={onSubmit}>
        {isSearchIcon ? <BiSearchAlt2 /> : 'Search'}
      </StyledButton>
    </StyleContainer>
  );
};

export default InputSearch;
