import React, { useEffect } from "react";
import MovieList from "../Components/MovieList";
import SideBar from "../Components/Sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Style/HomePage.css";

const HomePage = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  return (
    <div className="home-page">
      <div className="header"></div>
      <div className="home-container">
        <SideBar />
        <MovieList />
      </div>
    </div>
  );
};

export default HomePage;
