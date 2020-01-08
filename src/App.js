import React, { Fragment } from 'react';
import logo from './logo.svg';
import './style.scss';
import { NavMain } from "./components/NavMain";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Services } from "./components/Services";
import hero from './img/hero.jpg';  
import { Banner } from "./components/Banner";
function App() {
  return (
    <Fragment>
      <img src={hero} className="hero" />
      <NavMain />
      <Banner />
      <Content />
      <Header />
      <Services />
    </Fragment>
  );
}

export default App;
