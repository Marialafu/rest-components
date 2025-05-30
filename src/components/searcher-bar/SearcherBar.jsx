import { StyledContainer, StyledImg, StyledInput } from './searcher-bar.styled';

const SearcherBar = ({ setSearcherBar }) => {
  return (
    <StyledContainer>
      <StyledImg src='/assets/images/search.svg' />
      <StyledInput
        placeholder='Search for a country...'
        onChange={event => setSearcherBar(event.target.value)}
      />
    </StyledContainer>
  );
};

export default SearcherBar;
