import { getHeaderAPosition } from "./getHeaderAPosition.js";

export const setBurgerPosition = () => {
  const mainEl = document.getElementById("main");
  const burgerEl = document.querySelector(".header__burger");
  let activatingValue = 5;

  activatingValue = getHeaderAPosition();

  window.addEventListener("resize", setBurgerPosition);
};