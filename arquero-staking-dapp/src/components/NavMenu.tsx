import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <Container>
      <Logo>AST Staking Pool</Logo>
      <Menu>
        <MenuItem>
          <StyledNavLink to="/" exact activeClassName="active">
            Home
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/staking" activeClassName="active">
            Staking App
          </StyledNavLink>
        </MenuItem>
      </Menu>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  color: ${(props) => props.theme.black};
  /* background-image: url(/images/logo.png); */
  background-repeat: no-repeat;
  background-size: contain;
  padding-left: 50px;
`;

const Menu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-left: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.black};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &.active {
    color: ${(props) => props.theme.gold};
    font-weight: 700;
  }
`;

export default NavMenu;
