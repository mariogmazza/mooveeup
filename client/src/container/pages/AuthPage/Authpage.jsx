import React from "react";
import { Redirect } from "react-router-dom";

import Auth from "../../../components/Auth/Auth";
import AllWatchedMovies from "../../../components/AllWatchedMovies/AllWatchedMovies";
import AllWishlistMovies from "../../../components/AllWishedlistMovies/AllWishlistMovies";

const Authpage = ({ route, authType, isAuthenticated }) => {
  return (
    <div>
      {route ? (
        route === "watched" ? (
          <AllWatchedMovies />
        ) : (
          <AllWishlistMovies />
        )
      ) : (
        <React.Fragment>
          {isAuthenticated ? (
            <Redirect to="/xmovieweb" />
          ) : (
            <Auth authType={authType} />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Authpage;
