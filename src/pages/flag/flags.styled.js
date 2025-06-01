import styled from "styled-components";

const StyledGrid = styled.div`
    display: grid;
    gap: 3.5rem;
    padding: 4rem 1.7188rem;
    align-items: center;
    background-color: ${({$lightMode}) => $lightMode ? '#FCFCFC' : '#2B3844'};

    @media screen and (min-width: 768px) {
    padding: 3.5rem 6.1875rem;
  }

    @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 7.5rem;
    padding: 5rem 5.0625rem;

  }
`
const StyledImg = styled.img`
    width: 20rem;
    height: 14.3125rem;
    display: block;
    border-radius: 0.3125rem;
    object-fit: cover;

     @media screen and (min-width: 768px) {
    width: 35.5625rem;
    height: 25.5rem;
  }

    @media screen and (min-width: 1400px) {
    width: 35rem;
    height: 25.0625rem;
    border-radius: 0.625rem;
  }
`

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export {StyledGrid, StyledImg, StyledTextContainer}