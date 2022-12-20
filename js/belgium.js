const belgiumlegendhover = function () {
  document.querySelector(".js-belgium-text-wv").addEventListener("mouseover", function () {
    document.querySelector(".js-belgium-map-wv").classList.add("c-gebruikersbedb__color--wv");
  });
  document.querySelector(".js-belgium-text-wv").addEventListener("mouseout", function () {
    document.querySelector(".js-belgium-map-wv").classList.remove("c-gebruikersbedb__color--wv");
  });
  //   oost
  document.querySelector(".js-belgium-text-ov").addEventListener("mouseover", function () {
    document.querySelector(".js-belgium-map-ov").classList.add("c-gebruikersbedb__color--ov");
  });
  document.querySelector(".js-belgium-text-ov").addEventListener("mouseout", function () {
    document.querySelector(".js-belgium-map-ov").classList.remove("c-gebruikersbedb__color--ov");
  });
  //   antwerpen
  document.querySelector(".js-belgium-text-a").addEventListener("mouseover", function () {
    document.querySelector(".js-belgium-map-a").classList.add("c-gebruikersbedb__color--a");
  });
  document.querySelector(".js-belgium-text-a").addEventListener("mouseout", function () {
    document.querySelector(".js-belgium-map-a").classList.remove("c-gebruikersbedb__color--a");
  });
  //   limburg
  document.querySelector(".js-belgium-text-l").addEventListener("mouseover", function () {
    document.querySelector(".js-belgium-map-l").classList.add("c-gebruikersbedb__color--l");
  });
  document.querySelector(".js-belgium-text-l").addEventListener("mouseout", function () {
    document.querySelector(".js-belgium-map-l").classList.remove("c-gebruikersbedb__color--l");
  });
  //   vlaams brabant
  document.querySelector(".js-belgium-text-vb").addEventListener("mouseover", function () {
    document.querySelector(".js-belgium-map-vb").classList.add("c-gebruikersbedb__color--vb");
  });
  document.querySelector(".js-belgium-text-vb").addEventListener("mouseout", function () {
    document.querySelector(".js-belgium-map-vb").classList.remove("c-gebruikersbedb__color--vb");
  });
  //   brussel
  document.querySelector(".js-belgium-text-b").addEventListener("mouseover", function () {
    document.querySelector(".js-belgium-map-b").classList.add("c-gebruikersbedb__color--b");
  });
  document.querySelector(".js-belgium-text-b").addEventListener("mouseout", function () {
    document.querySelector(".js-belgium-map-b").classList.remove("c-gebruikersbedb__color--b");
  });
};

const init = function () {
  if (document.querySelector(".js-page-dashboard")) {
    belgiumlegendhover();
  }
};

document.addEventListener("DOMContentLoaded", init);
