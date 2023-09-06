import styled from 'styled-components';
import { theme } from '../../theme';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${theme.gray700};
  background: ${theme.white};
  width: 100%;
  margin-bottom: 20px;
`;

export const SearchIcon = styled.span`
  background-color: ${theme.primary};
  color: white;
  border: none;
  border-radius: 0px 6px 6px 0px;
  padding: 13px 16px;
  cursor: pointer;
  outline: none;
  line-height: 1;
  font-size: 20px;
  height: 100%;
`;

export const SearchInputGroup = styled.div`
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  border-radius: 4px;
  width: 100%;
`;

export const SearchInputField = styled.input`
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  width: 100%;
  padding: 13px;
  line-height: 1;
`;

export const SearchButton = styled.button`
  background-color: ${theme.primary};
  color: white;
  border: none;
  border-radius: 0px 6px 6px 0px;
  padding: 13px 16px;
  cursor: pointer;
  outline: none;
  line-height: 1;
  font-size: 20px;
`;
