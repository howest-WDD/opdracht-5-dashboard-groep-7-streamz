const dropdowndb = function () {
  const btn = document.querySelector(".js-dropdownicondb");
  const menu = document.querySelector(".js-dropdowndb");

  btn.addEventListener("click", function () {
    if (menu.classList.contains("u-hidedropdown")) {
      menu.classList.remove("u-hidedropdown");
    } else {
      menu.classList.add("u-hidedropdown");
    }
  });
};

const init = function () {
  if (document.querySelector(".js-page-dashboard")) {
    dropdowndb();
  }
};

document.addEventListener("DOMContentLoaded", init);
