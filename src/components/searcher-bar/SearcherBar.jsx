import { useContext } from 'react';
import { StyledContainer, StyledImg, StyledInput } from './searcher-bar.styled';
import { ModeContext } from '../../contexts/ModesContext';

const SearcherBar = ({ setSearcherBar }) => {
  const { lightMode } = useContext(ModeContext);
  return (
    <StyledContainer $lightMode={lightMode}>
      <StyledImg src='/assets/images/search.svg' />
      <StyledInput
        $lightMode={lightMode}
        placeholder='Search for a country...'
        onChange={event => setSearcherBar(event.target.value)}
      />
    </StyledContainer>
  );
};

export default SearcherBar;
