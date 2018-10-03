import React from "react";
// import "./GenreList.css";
import { DecadeStyle, Container1Closed, Container2 } from "./ListItemDecade";

 
export default () => {
  return (
    <React.Fragment>
      <Container1Closed>
        <Container2>
        <DecadeStyle >2000+</DecadeStyle>
          <DecadeStyle>90's</DecadeStyle>
          <DecadeStyle>80's</DecadeStyle>
          <DecadeStyle>70's</DecadeStyle>
        </Container2>
      </Container1Closed>
    </React.Fragment>
  );
};
