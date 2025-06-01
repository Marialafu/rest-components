import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({$lightMode}) => $lightMode ? '#FCFCFC' : '#2B3844'};
  padding: 1.875rem 1rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 900;
  color: ${({$lightMode}) => $lightMode ? '#2B3844' : '#FCFCFC' };

  @media screen and (min-width: 1400px) {
    font-size: 1.875rem;
  }
`;

const StyledMode = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;

const StyledImgMode = styled.img`
  width: 1rem;

  @media screen and (min-width: 1400px) {
    width: 1.875rem;
  }
`;

const StyledTextMode = styled.span`
  font-size: 0.875rem;
  color: ${({$lightMode}) => $lightMode ? '#2B3844' : '#FCFCFC' };

  @media screen and (min-width: 1400px) {
    font-size: 1.625rem;
  }
`;

export { StyledHeader, StyledTitle, StyledMode, StyledImgMode, StyledTextMode };
