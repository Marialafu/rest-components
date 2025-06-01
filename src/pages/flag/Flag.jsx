import { useLocation } from 'react-router-dom';
import { StyledGrid, StyledImg, StyledTextContainer } from './flags.styled';
import InnerFlagText from '../../components/inner-flag-text/InnerFlagText';
import { useContext } from 'react';
import { ModeContext } from '../../contexts/ModesContext';

const Flag = () => {
  const { lightMode } = useContext(ModeContext);
  const { state } = useLocation();
  const country = state;

  return (
    <StyledGrid $lightMode={lightMode}>
      <StyledImg src={country.flags.png} />
      <StyledTextContainer>
        <InnerFlagText country={country} />
      </StyledTextContainer>
    </StyledGrid>
  );
};

export default Flag;
