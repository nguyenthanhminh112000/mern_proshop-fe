import React from 'react';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearchInput,
  HeaderSearchButton,
  HeaderQuickLink,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>PROSHOP</HeaderLogo>
      <HeaderSearchInput></HeaderSearchInput>
      <HeaderSearchButton></HeaderSearchButton>
    </HeaderContainer>
  );
};

export default Header;
