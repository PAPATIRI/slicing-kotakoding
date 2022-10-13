import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import Button from "../../Button";

const NavbarContainer = tw.div`flex items-center justify-between fixed z-50 w-full h-16 bg-white px-20 border-b-4 border-orangePrimary`;
const Logo = tw.img`w-32`;
const Nav = tw.nav`flex-1 px-48`;
const MenuWrapper = tw.ul`flex items-center gap-4`;
const MenuItem = tw.li`font-bold cursor-pointer border border-white text-gray-500 capitalize py-2 px-4 rounded duration-300 hover:border hover:border-greenPrimary active:bg-greenPrimary active:text-white`;
const ButtonWrapper = tw.div`flex items-center gap-4`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo src="/images/kotakode logo.svg" alt="logo kotakode" />
      </Link>
      <Nav>
        <MenuWrapper>
          <MenuItem>
            <Link to="/tentang">tentang</Link>{" "}
          </MenuItem>
          <MenuItem className="duration-300 hover:bg-greenPrimary hover:text-white">
            <Link to="/products">products</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/faq">FAQ</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/events">events</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/partnership">partnership</Link>
          </MenuItem>
        </MenuWrapper>
      </Nav>
      <ButtonWrapper>
        <Button typeButton="secondary">
          <Link to="/login">masuk</Link>
        </Button>
        <Button typeButton="success">
          <Link to="/register">daftar</Link>
        </Button>
      </ButtonWrapper>
    </NavbarContainer>
  );
}
