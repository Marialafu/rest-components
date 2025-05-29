import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 1.875rem 1rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 900;
`;

const StyledMode = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const StyledImgMode = styled.img`
  width: 1rem;
`;

const StyledTextMode = styled.span`
  font-size: 0.875rem;
`;

export { StyledHeader, StyledTitle, StyledMode, StyledImgMode, StyledTextMode };
