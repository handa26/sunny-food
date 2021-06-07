/* eslint-disable no-unused-vars */
import "regenerator-runtime";
import "../styles/main.css";
import "../styles/queries.css";

import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector(".ham-icon"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector(".box-wrapper"),
});

window.addEventListener("hashchange", () => {
  let page = window.location.hash.substring(1, 8);
  const header = document.querySelector("header");
  const heroWrapper = document.querySelector(".hero-text-box");
  const sectionRestaurantsTitle = document.querySelector(".section-restaurants__title");

  if (page === "/detail") {
    heroWrapper.classList.add("hide-hero-wrapper");
    header.classList.add("hide-header");
    sectionRestaurantsTitle.style.display = "none";
  } else if (page === "/favori") {
    heroWrapper.classList.add("hide-hero-wrapper");
    header.classList.add("hide-header");
    sectionRestaurantsTitle.style.display = "none";
  } else {
    header.classList.remove("hide-header");
    heroWrapper.classList.remove("hide-hero-wrapper");
    sectionRestaurantsTitle.style.display = "block";
  }

  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

export default App;
