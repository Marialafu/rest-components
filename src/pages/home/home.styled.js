import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: ${({$lightMode}) => $lightMode ? '#FCFCFC' : '#202C36'};
`;
