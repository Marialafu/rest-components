import { Link } from 'react-router-dom';
import HomeFlagText from '../home-flag-text/HomeFlagText';
import {
  StyledContainer,
  StyledGrid,
  StyledImg
} from './flag-container.styled';

const FlagContainer = ({ countries }) => {
  if (!countries) return;
  return (
    <StyledGrid>
      {countries.map(country => (
        <Link
          key={country.name.common}
          to={`country/${country.name.common}`}
          state={country}
        >
          <StyledContainer>
            <StyledImg
              src={country.flags.png}
              alt={country.flags.alt}
            />
            <HomeFlagText country={country} />
          </StyledContainer>
        </Link>
      ))}
    </StyledGrid>
  );
};

export default FlagContainer;
