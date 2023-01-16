const formUpload = function () {
const UPLOAD_BUTTON = document.getElementById("upload-button");
const FILE_INPUT = document.querySelector("input[type=file]");
const AVATAR = document.getElementById("js-avatar");

UPLOAD_BUTTON.addEventListener("click", () => FILE_INPUT.click());{
  FILE_INPUT.addEventListener("change", event => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    AVATAR.setAttribute("aria-label", file.name);
    AVATAR.style.background = `url(${reader.result}) center center/cover`;
    UPLOAD_BUTTON.classList.add("c-form__preview--hide");
  };
});
};


AVATAR.addEventListener("click", () => FILE_INPUT.click());

FILE_INPUT.addEventListener("change", event => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    AVATAR.setAttribute("aria-label", file.name);
    AVATAR.style.background = `url(${reader.result}) center center/cover`;
  };
});


}

const init = function () {

    if (document.querySelector(".js-form")) {
        setTimeout(formUpload,500);
    }
  };
  
document.addEventListener("DOMContentLoaded", init);