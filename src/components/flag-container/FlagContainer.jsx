import HomeFlagText from '../home-flag-text/HomeFlagText';
import { StyledContainer, StyledGrid } from './flag-container.styled';

const FlagContainer = ({ countries }) => {
  if (!countries) return;
  return countries.map(country => (
    <StyledGrid key={country.name.common}>
      <StyledContainer>
        <img src={country.flags.svg} alt={country.flags.alt} />
        <HomeFlagText country={country} />
      </StyledContainer>
    </StyledGrid>
  ));
};

export default FlagContainer;
