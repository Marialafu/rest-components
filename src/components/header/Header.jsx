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
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledMode>
        <StyledImgMode src='public/assets/images/light-mode.png' />
        <StyledTextMode>Light Mode</StyledTextMode>
      </StyledMode>
    </StyledHeader>
  );
};

export default Header;
