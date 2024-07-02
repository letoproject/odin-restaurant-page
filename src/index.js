import "./styles/style.css";
import MenuImage1 from "./imgs/menu-1.jpg";
import MenuImage2 from "./imgs/menu-2.jpg";
import MenuImage3 from "./imgs/menu-3.jpg";

const menuImage1 = new Image();
const menuImage2 = new Image();
const menuImage3 = new Image();
menuImage1.src = MenuImage1;
menuImage2.src = MenuImage2;
menuImage3.src = MenuImage3;

const menuContainer = document.querySelector(".menu-content.fst");
menuImage1.classList.add("menu-image");
menuContainer.appendChild(menuImage1);

const menuContainer2 = document.querySelector(".menu-content.snd");
menuImage2.classList.add("menu-image");
menuContainer2.appendChild(menuImage2);

const menuContainer3 = document.querySelector(".menu-content.trd");
menuImage3.classList.add("menu-image");
menuContainer3.appendChild(menuImage3);
console.log("message");
