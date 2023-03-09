import { Logo } from "../components";
import Main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from "react";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              I'm baby tumblr schlitz helvetica, Brooklyn hammock live-edge tonx
              pickled austin artisan vegan. Shabby chic trust fund bespoke,
              crucifix drinking vinegar farm-to-table blog pabst ugh edison
              bulb. Retro air plant butcher praxis literally direct trade,
              church-key bruh etsy bitters stumptown you probably haven't heard
              of them asymmetrical.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login / Register
            </Link>
          </div>
          <img src={Main} alt="main" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
