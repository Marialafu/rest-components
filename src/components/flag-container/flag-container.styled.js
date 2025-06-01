import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4.5rem;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  border-radius: 0.3125rem;
  width: 16.5625rem;
  border-radius: 0.3125rem;
  overflow: hidden;
  box-shadow: 0 0 0.4375rem 0.125rem rgba(0, 0, 0, 0.1);
  background-color: ${({$lightMode}) => $lightMode ? '#FCFCFC' : '#2B3844'};

  @media screen and (min-width: 768px) {
    width: 16.5rem;
  }
`;

const StyledImg = styled.img`
  height: 10rem;
  width: 16.5rem;
  object-fit: cover;
`

export { StyledGrid, StyledContainer, StyledImg };
