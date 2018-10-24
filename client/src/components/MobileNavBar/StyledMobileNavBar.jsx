import styled from "styled-components";

export const MobNavDiv = styled.div`
  grid-column: 1 / -1;
  overflow: hidden;
  background-color: rgb(64, 72, 84);
  height:48px;
`;
export const BurgerIconMob = styled.a`
    float: left;
`;

export const IconImg = styled.img`
  height: 20px;
  width: 20px;
  margin: 10px;
`;

export const NavA = styled.a`
  float: right;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;
