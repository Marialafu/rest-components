import styled from 'styled-components';

const StyledContainer = styled.div`
  min-width: 21.4375rem;
  padding: 1rem 0 1rem 2rem;
  display: flex;
  gap: 1.5rem;
  background-color: ${({$lightMode}) => $lightMode ? '#FCFCFC' : '#2B3844'};
  border-radius: 0.3125rem;
`;

const StyledInput = styled.input`
  border: none;
  background-color: ${({$lightMode}) => $lightMode ? '#FCFCFC' : '#2B3844'};
  &:focus {
    outline: none;
  }
`;

const StyledImg = styled.img`
  width: 1rem;
`;

export { StyledContainer, StyledInput, StyledImg };
