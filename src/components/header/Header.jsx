import { Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledImgMode,
  StyledMode,
  StyledTextMode,
  StyledTitle
} from './header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Link to={'/'}>
        <StyledTitle>Where in the world?</StyledTitle>
      </Link>
      <StyledMode>
        <StyledImgMode src='public/assets/images/light-mode.png' />
        <StyledTextMode>Light Mode</StyledTextMode>
      </StyledMode>
    </StyledHeader>
  );
};

export default Header;
