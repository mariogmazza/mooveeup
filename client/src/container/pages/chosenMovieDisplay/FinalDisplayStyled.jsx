import styled from "styled-components";


export const BackDropImg = styled.div`
  grid-column-start: 2;
  grid-column-end: -1;
  background-color: #404854;
  grid-row-start: 1;
  grid-row-end: 3;
`;

export const PosterImg = styled.div`
  width: 120px;
  height: 148px;
  background-color: aqua;
  z-index: 300;
  margin-top: -86px;
  margin-left: 20px;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
`;

export const LogoContainer = styled.div`
  /* width: 130px; */
  /* height: 80px; */
`;

export const LogoSmall = styled.img`
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
  width: 82px;
  height: 66px;
  z-index: 10;
`;

export const MovieDesCont = styled.div`
  grid-column-start: 3;
  grid-column-end: 10;
  grid-row-start: 6;
  grid-row-end: 8;
  width: 235px;
  height: 118px; 
  margin-left: 15px;
  font-size: 12px;
  overflow: scroll;
  color: #b6b6b7;
  text-align: center;
`;

export const MovieTitle = styled.div`
  text-align: center;
  color: #6f6f6f;
  font-size: 13px;
  display: inline;
  grid-column-start: 2;
  grid-column-end: 12; 
  grid-row-start: 5;
  grid-row-end: 6;
  margin: 0px;
  font-weight: bold;
`;

export const MovieYearCont = styled.div`
  width: 98px;
  height: 78px;
  margin-left: 148px;
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 3;
  grid-row-end: 5;
`;

export const ReleaseTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #bcbcbc;
`;

export const YearRelease = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #6f6f6f;
`;
