import { useContext } from 'react';
import {
  StyledBoldText,
  StyledInnerContainer,
  StyledSubtitleContainer,
  StyledText,
  StyledTitle
} from './inner-flag-text';
import { ModeContext } from '../../contexts/ModesContext';

const InnerFlagText = ({ country }) => {
  const nativeName = Object.values(country.name.nativeName)[0].official;
  const languages = Object.values(country.languages).join(', ');
  const currencies = Object.values(country.currencies)[0];

  const { lightMode } = useContext(ModeContext);

  return (
    <>
      <StyledTitle $lightMode={lightMode}>{country.name.common}</StyledTitle>
      <StyledSubtitleContainer>
        <StyledInnerContainer>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>
              Native Name:{' '}
            </StyledBoldText>
            {nativeName}
          </StyledText>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>Population: </StyledBoldText>
            {country.population}
          </StyledText>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>Region: </StyledBoldText>
            {country.region}
          </StyledText>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>Sub Region: </StyledBoldText>
            {country.subregion}
          </StyledText>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>Capital: </StyledBoldText>
            {country.capital}
          </StyledText>
        </StyledInnerContainer>
        <StyledInnerContainer>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>
              Top Level Domain:{' '}
            </StyledBoldText>
            {country.tld}
          </StyledText>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>Currencies: </StyledBoldText>
            {currencies.name}
          </StyledText>
          <StyledText $lightMode={lightMode}>
            <StyledBoldText $lightMode={lightMode}>Languajes: </StyledBoldText>
            {languages}
          </StyledText>
        </StyledInnerContainer>
      </StyledSubtitleContainer>
    </>
  );
};

export default InnerFlagText;
