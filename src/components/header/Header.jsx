import { Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledImgMode,
  StyledMode,
  StyledTextMode,
  StyledTitle
} from './header.styled';
import { useContext } from 'react';
import { ModeContext } from '../../contexts/ModesContext';

const Header = () => {
  const { lightMode, setLightMode } = useContext(ModeContext);

  return (
    <StyledHeader $lightMode={lightMode}>
      <Link to={'/'}>
        <StyledTitle $lightMode={lightMode}>Where in the world?</StyledTitle>
      </Link>
      <StyledMode onClick={() => setLightMode(!lightMode)}>
        {lightMode && (
          <>
            <StyledImgMode src='public/assets/images/light-mode.png' />
            <StyledTextMode $lightMode={lightMode}>Light Mode</StyledTextMode>
          </>
        )}
        {!lightMode && (
          <>
            <StyledImgMode src='public/assets/images/dark-mode.png' />
            <StyledTextMode $lightMode={lightMode}>Dark Mode</StyledTextMode>
          </>
        )}
      </StyledMode>
    </StyledHeader>
  );
};

export default Header;
