import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #ffff88;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0 10px;
`;

export const NavLink = styled.a`
  font-size: 30px;
  text-decoration: none;
  color: #000;
  &.active {
    font-weight: bold;
  }
  &:hover {
    color: #555;
  }
`;
