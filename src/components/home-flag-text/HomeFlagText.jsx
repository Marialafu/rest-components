import {
  StyledSubtitle,
  StyledSubtitleContainer,
  StyledTagsContainer,
  StyledText,
  StyledTextContainer,
  StyledTitle
} from './home-flag-text';

const HomeFlagText = ({ country }) => {
  return (
    <StyledTextContainer>
      <StyledTitle>{country.name.common}</StyledTitle>
      <StyledSubtitleContainer>
        <StyledTagsContainer>
          <StyledSubtitle>Population:</StyledSubtitle>
          <StyledText>{country.population}</StyledText>
        </StyledTagsContainer>
        <StyledTagsContainer>
          <StyledSubtitle>Region:</StyledSubtitle>
          <StyledText>{country.region}</StyledText>
        </StyledTagsContainer>

        <StyledTagsContainer>
          <StyledSubtitle>Capital:</StyledSubtitle>
          <StyledText>{country.capital}</StyledText>
        </StyledTagsContainer>
      </StyledSubtitleContainer>
    </StyledTextContainer>
  );
};

export default HomeFlagText;
