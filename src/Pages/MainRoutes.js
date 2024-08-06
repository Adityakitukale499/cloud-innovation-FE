import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LogIn from "./LogIn";
import MovieDetail from "./MovieDetail";
import LoadingOverlay from "react-loading-overlay-ts";
import BounceLoader from "react-spinners/BounceLoader";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const { movies, isLoading, isError } = useSelector((state) => state.movies);
  return (
    <LoadingOverlay active={isLoading} spinner={<BounceLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </LoadingOverlay>
  );
};

export default MainRoutes;
