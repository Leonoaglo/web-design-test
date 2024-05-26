//header scroll
$(document).on("scroll", function () {
  updateHeaderStyle();
});

function updateHeaderStyle() {
  var header = $("header");
  var shouldAddClass = $(document).scrollTop() > 100;

  header.toggleClass("header-dark", shouldAddClass);
}



//change background hover
const buttons = document.querySelectorAll(".menu-btn");
const stage = document.querySelector("#background-panel");

buttons.forEach((button) => {
  button.onmouseover = function () {
    document.querySelector(button.dataset.show).style.opacity = 1;
  };
  button.onmouseout = function () {
    document.querySelector(button.dataset.show).style.opacity = 0;
  };
});
