import React from "react";
import "./GenreList.css";
import { GenreStyle, Container1Closed, Container2 } from "./ListItems";



 
export default () => {
  return (
    <React.Fragment>
      <Container1Closed>
        <Container2>
        <GenreStyle >Action</GenreStyle>
          <GenreStyle>Adventure</GenreStyle>
          <GenreStyle>Animation</GenreStyle>
          <GenreStyle>Comedy</GenreStyle>
          <GenreStyle>Crime</GenreStyle>
          <GenreStyle>Documentary</GenreStyle>
          <GenreStyle>Drama</GenreStyle>
          <GenreStyle>Family</GenreStyle>
          <GenreStyle>Fantasy</GenreStyle>
          <GenreStyle>History</GenreStyle>
          <GenreStyle>Horror</GenreStyle>
          <GenreStyle>Music</GenreStyle>
          <GenreStyle>Mystery</GenreStyle>
          <GenreStyle>Romance</GenreStyle>
          <GenreStyle>Science Fiction</GenreStyle>
          <GenreStyle>TV Movie</GenreStyle>
          <GenreStyle>Thriller</GenreStyle>
          <GenreStyle>War</GenreStyle>
          <GenreStyle>Western</GenreStyle>
        </Container2>
      </Container1Closed>
    </React.Fragment>
  );
};
