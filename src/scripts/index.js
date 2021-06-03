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
  const sectionRestaurantsTitle = document.querySelector(".section-restaurants__title");
  if (page === "/detail") {
    header.style.display = "none";
    sectionRestaurantsTitle.style.display = "none";
  } else if (page === "/favori") {
    header.style.display = "none";
    sectionRestaurantsTitle.style.display = "none";
  } else {
    header.style.display = "block";
    sectionRestaurantsTitle.style.display = "block";
  }

  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

export default App;
