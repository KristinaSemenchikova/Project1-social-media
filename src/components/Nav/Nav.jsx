import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const NavBar = styled.nav`
  grid-area: n;
  background-color: #94c5e6;
  padding: 10px 20px;
  margin: 10px 0px 10px 50px;
  height: 250px;
  border-radius: 10px;
  text-align: center;
  color: #ad7cfc;
`;
const Item = styled.div`
margin: 15px;
`;
const Link = styled(NavLink)`
text-decoration: none;
  color: white;

  &.active {
    color: rgb(68, 0, 255);
  }
  `;

const Nav = (props) => {
  return (
    <NavBar>
    <Item> <Link to='/profile' > Profile </Link> </Item>
    <Item> <Link  to='/album'> Photos </Link> </Item>
    <Item> <Link to='/dialogs' > Messages </Link> </Item>
    <Item> <Link to='/news'> News </Link> </Item>
    <Item> <Link to='/music' > Music </Link> </Item>
  </NavBar>   
  )
}
export default Nav;
