let modal;
let sect;

const inViewport = new IntersectionObserver(function (el) {
  if (el[0].isIntersecting) {
    modal.classList.add("c-totop__animatein");
    console.log("yo");
    modal.classList.remove("c-totop__hidden");
  }
});

// const togglearrow = function () {
//   const arrow = document.querySelector(".js-newsletter-arrow");
//   arrow.addEventListener("click", function () {
//     // modal.classList.remove("c-newswletter__animatein");
//     if (modal.classList.contains("c-newsletter__animatearrowout")) {
//       modal.classList.remove("c-newsletter__animatearrowout");
//       modal.classList.add("c-newsletter__animatearrowin");
//       console.log("its small so make big");
//     } else {
//       modal.classList.remove("c-newsletter__animatearrowin");
//       modal.classList.add("c-newsletter__animatearrowout");
//       console.log("its big so make small");
//     }
//     console.log("click arrow");
//   });
// };


const init = function () {
  if (document.querySelector(".js-page-dashboard")) {
    sect = document.querySelector(".js-dbtotopsect");
    inViewport.observe(sect);
    modal = document.querySelector(".js-totop");

  }
};
document.addEventListener("DOMContentLoaded", init);
