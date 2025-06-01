import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 1rem 1.5156rem;
  background-color: ${({$lightMode}) => $lightMode ? '#FCFCFC' : '#2B3844'};
  color: ${({$lightMode}) => $lightMode ? '#2B3844' : '#FCFCFC' };
  border-radius: 0.3125rem;
  border: none;
  width: 12.5rem;
  &:focus {
    outline: none;
    color: ${({$lightMode}) => $lightMode ? '#2B3844' : '#FCFCFC' }
  }
`;
