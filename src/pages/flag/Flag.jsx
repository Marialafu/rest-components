import { useLocation } from 'react-router-dom';
import { StyledGrid, StyledImg, StyledTextContainer } from './flags.styled';
import InnerFlagText from '../../components/inner-flag-text/InnerFlagText';

const Flag = () => {
  const { state } = useLocation();
  const country = state;

  return (
    <StyledGrid>
      <StyledImg src={country.flags.png} />
      <StyledTextContainer>
        <InnerFlagText country={country} />
      </StyledTextContainer>
    </StyledGrid>
  );
};

export default Flag;
