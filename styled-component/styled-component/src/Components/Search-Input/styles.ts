import styled from 'styled-components';
import { theme } from '../../theme';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 0.0625rem solid ${theme.gray700};
  background: ${theme.white};
  width: 100%;
`;

export const SearchIcon = styled.span`
  background-color: ${theme.primary};
  color: white;
  border: none;
  border-radius: 0rem 0.375rem 0.375rem 0rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  line-height: 1;
  font-size: 1.25rem;
  margin-right: -0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInputGroup = styled.div`
  display: flex;
  align-items: center;
  border: none;
  min-width: 23.25rem;
  border-radius: 0.25rem;
  width: 100%;
  height: 2.125rem;
`;

export const SearchInputField = styled.input`
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  width: 100%;
  padding: 0.5rem;
  line-height: 1;
  border-radius: 0.25rem;
`;

export const SearchButton = styled.button`
  background-color: ${theme.primary};
  color: white;
  border: none;
  border-radius: 0rem 0.375rem 0.375rem 0rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  line-height: 1;
  font-size: 1.25rem;
`;
