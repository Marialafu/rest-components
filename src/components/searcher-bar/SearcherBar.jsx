import { StyledContainer, StyledImg, StyledInput } from './searcher-bar.styled';

const SearcherBar = () => {
  return (
    <StyledContainer>
      <StyledImg src='/assets/images/search.svg' />
      <StyledInput placeholder='Search for a country...' />
    </StyledContainer>
  );
};

export default SearcherBar;
