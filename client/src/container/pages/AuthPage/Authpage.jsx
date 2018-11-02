import React from "react";
import { Redirect } from "react-router-dom";

import Auth from "../../../components/Auth/Auth";
// import AllWatchedMovies from "../../../components/AllWatchedMovies/AllWatchedMovies";
// import AllWishlistMovies from "../../../components/AllWishedlistMovies/AllWishlistMovies";
import SavedWatched from "../SavedWatched/SavedWatched";
import SavedWished from "../SavedWished/SavedWished";

const Authpage = ({ route, authType, isAuthenticated }) => {
  return (
    <div>
      {route ? (
        route === "watched" ? (
          // <AllWatchedMovies />
          <SavedWatched />
        ) : (
          // <AllWishlistMovies />
          <SavedWished />
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
