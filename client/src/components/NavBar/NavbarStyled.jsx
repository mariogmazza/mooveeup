import styled from "styled-components";



export const TopNavLeft = styled.div`
  overflow: hidden;
  background-color: rgb(255, 255, 255);
`;

export const NavA = styled.a`
  float: left;
  display: block;
  color: #707070;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

// export const NavActiveR = styled.a`
//   float: left;
//   display: block;
//   background-color: #c64747;
//   color: #ddd;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
//   &:hover {
//     background-color: #ddd;
//     color: black;
//   }
//   @media screen and (max-width: 600px) {
//     display: none;
//   }
// `;

// export const NavActive = styled.a`
//   float: left;
//   display: block;
//   background-color: #c64747;
//   color: #ddd;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
//   &:hover {
//     background-color: #ddd;
//     color: black;
//   }
// `;

export const BurgerIcon = styled.a`
  display: none;

  @media screen and (max-width: 600px) {
    float: right;
    display: block;
  }
`;

export const IconImg = styled.img`
  height: 20px;
  width: 20px;
  margin: 10px;
`;

export const TopNavRight = styled.div`
  float: right;
`;


