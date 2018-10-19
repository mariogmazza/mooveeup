import styled from "styled-components";

// .topnav-left {
//     overflow: hidden;
//     background-color: rgb(255, 255, 255);
// }

// .topnav-left a {
//     float: left;
//     display: block;
//     color: #707070;
//     text-align: center;
//     padding: 14px 16px;
//     text-decoration: none;
//     font-size: 17px;
// }

// .topnav-left a:first-child {
//     color: #ddd;
// }

// .topnav-left a:hover {
//     background-color: #ddd;
//     color: black;
// }

// .active {
//     background-color: #C64747;
//     color: white;
// }

// .topnav-left .icon {
//     display: none;
// }

// .topnav-right {
//     float: right;
// }

// @media screen and (max-width: 600px) {
//     .topnav-left a:not(:first-child) {
//         display: none;
//     }

//     .topnav-right a {
//         display: none;
//     }

//     .topnav-left a.icon {
//         float: right;
//         display: block;
//     }
// }

// @media screen and (max-width: 600px) {
//     .topnav-left .responsive {
//         position: relative;
//     }

//     .topnav-left.responsive .icon {
//         position: absolute;
//         right: 0;
//         top: 0;
//     }

//     .topnav-left .responsive a {
//         float: none;
//         display: block;
//         text-align: left;
//     }
// }

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


