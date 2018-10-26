import styled from "styled-components";

export const SideNav = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1 / 12;

  display: grid;
  /* grid-template-areas: */
  grid-template-columns: 1fr;
  grid-template-rows: 100px 100px auto;
  background-color: #070920;
`;

export const MenuIcon = styled.img`
  width: 28px;
  height: 24px;
  padding: 15px;
  margin-top: 170px;
`;

export const SaveHeart = styled.img`
  width: 34px;
  height: 30px;
  padding: 12px;
  margin-top: 132px;
`;

export const BackBTN = styled.img`
  width: 36px;
  height: 33px;
  padding: 12px;
  margin-top: 20px;
`;

export const WatchedIcon = styled.img`
  width: 35px;
  height: 42px;
  padding: 12px;
  margin-top: 150px;
`;
