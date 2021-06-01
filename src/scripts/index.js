/* eslint-disable no-unused-vars */
import "regenerator-runtime";
import "../styles/main.css";
import "../styles/queries.css";

import App from "./views/app";

const app = new App({
  button: document.querySelector(".ham-icon"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector(".box-wrapper"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

export default App;
