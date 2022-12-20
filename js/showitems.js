const showLimit = function () {
    console.log('loaded');
}

const init = function() {
    if (document.querySelector(".js-page-table")) {
        showLimit();
    }
}
  
document.addEventListener("DOMContentLoaded", init);