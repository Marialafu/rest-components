import { useContext } from 'react';
import {
  StyledSubtitle,
  StyledSubtitleContainer,
  StyledTagsContainer,
  StyledText,
  StyledTextContainer,
  StyledTitle
} from './home-flag-text';
import { ModeContext } from '../../contexts/ModesContext';

const HomeFlagText = ({ country }) => {
  const { lightMode } = useContext(ModeContext);
  return (
    <StyledTextContainer>
      <StyledTitle $lightMode={lightMode}>{country.name.common}</StyledTitle>
      <StyledSubtitleContainer>
        <StyledTagsContainer>
          <StyledSubtitle $lightMode={lightMode}>Population:</StyledSubtitle>
          <StyledText $lightMode={lightMode}>{country.population}</StyledText>
        </StyledTagsContainer>
        <StyledTagsContainer>
          <StyledSubtitle $lightMode={lightMode}>Region:</StyledSubtitle>
          <StyledText $lightMode={lightMode}>{country.region}</StyledText>
        </StyledTagsContainer>

        <StyledTagsContainer>
          <StyledSubtitle $lightMode={lightMode}>Capital:</StyledSubtitle>
          <StyledText $lightMode={lightMode}>{country.capital}</StyledText>
        </StyledTagsContainer>
      </StyledSubtitleContainer>
    </StyledTextContainer>
  );
};

export default HomeFlagText;
