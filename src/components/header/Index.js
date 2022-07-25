import React from "react";
import HeaderInner from "./HeaderInner";
import HeaderMenu from "./HeaderMenu";
import HeaderSide from "./HeaderSide";
const Header = () => {
  return (
    <header id="side-header" class="main-header">
      <HeaderSide />
      <HeaderInner />
      <HeaderMenu />
    </header>
  );
};

export default Header;
