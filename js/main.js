import { checkScroll } from "./modules/checkScroll.js";
import { clickBurger } from "./modules/clickBurger.js";
import { getHeaderAPosition } from "./modules/getHeaderAPosition.js";
import { scrollOnClick } from "./modules/scrollOnClick.js";
import { setBurgerPosition } from "./modules/setBurgerPosition.js";
import { timecount } from "./modules/timecount.js";
import { mixitup } from "./modules/mixitup.js";



setBurgerPosition();
scrollOnClick();
clickBurger();
timecount();
getHeaderAPosition();
mixitup();


document.addEventListener("DOMContentLoaded", () => {
  checkScroll(getHeaderAPosition());
});


window.addEventListener("scroll", () => {
  timecount(getHeaderAPosition());
});

window.addEventListener("scroll", () => {
  mixitup(getHeaderAPosition());
});
window.addEventListener("scroll", () => {
  setBurgerPosition(getHeaderAPosition());
});
window.addEventListener("scroll", () => {
  clickBurger(getHeaderAPosition());
});

