import {
  StyledBoldText,
  StyledInnerContainer,
  StyledSubtitleContainer,
  StyledText,
  StyledTitle
} from './inner-flag-text';

const InnerFlagText = ({ country }) => {
  console.log(country);

  return (
    <>
      <StyledTitle>{country.name.common}</StyledTitle>
      <StyledSubtitleContainer>
        <StyledInnerContainer>
          <StyledText>
            <StyledBoldText>Native Name:</StyledBoldText>CORREGIR
          </StyledText>
          <StyledText>
            <StyledBoldText>Population:</StyledBoldText>
            {country.population}
          </StyledText>
          <StyledText>
            <StyledBoldText>Region:</StyledBoldText>
            {country.region}
          </StyledText>
          <StyledText>
            <StyledBoldText>Sub Region:</StyledBoldText>
            {country.subregion}
          </StyledText>
          <StyledText>
            <StyledBoldText>Capital:</StyledBoldText>
            {country.capital}
          </StyledText>
        </StyledInnerContainer>
        <StyledInnerContainer>
          <StyledText>
            <StyledBoldText>Top Level Domain:</StyledBoldText>
            {country.tld}
          </StyledText>
          <StyledText>
            <StyledBoldText>Currencies:</StyledBoldText>
          </StyledText>
          <StyledText>
            <StyledBoldText>Languajes</StyledBoldText>belgie
          </StyledText>
        </StyledInnerContainer>
      </StyledSubtitleContainer>
    </>
  );
};

export default InnerFlagText;
