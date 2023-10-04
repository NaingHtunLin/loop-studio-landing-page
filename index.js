const hamburgerButton = document.querySelector(".hamburger");
const navigateUl = document.querySelector(".navlinks");

hamburgerButton.addEventListener("click", () => {
     if (navigateUl.classList.contains("active")) {
          navigateUl.classList.remove("active");
     } else {
          navigateUl.classList.add("active");
     }
});

function menuIconChg() {
     const menuIcon = document.getElementById("menuIcon");
     const isOpen =
          menuIcon.getAttribute("src") === "./images/icon-hamburger.svg";

     if (isOpen) {
          menuIcon.setAttribute("src", "./images/icon-close.svg");
          menuIcon.setAttribute("alt", "closeICon");
     } else {
          menuIcon.setAttribute("src", "./images/icon-hamburger.svg");
          menuIcon.setAttribute("alt", "hamburgerIcon");
     }
}

hamburgerButton.addEventListener("click", menuIconChg);
