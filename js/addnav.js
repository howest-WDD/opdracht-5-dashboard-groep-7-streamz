
let added = false;
function updateNav() {
    var nav = document.querySelector("div#c-nav-responsive-js");
    if (window.innerWidth <= 992) {
        if (!added) {
            added = true;
            nav.insertAdjacentHTML('beforeend', `
            <div class="c-sidenav__wrap">
            <ul class="c-sidenav__menu c-sidenav__menu--responsive navbar-primary-menu">
                    <li class="c-sidenav__item">
                        <a class="c-sidenav__link" href="#"><img class="c-sidenav__icon c-sidenav__icon--active" src="./img/dashboardicon.svg" alt="dashboardicon">Dashboard</a>
                    </li>
                    <li class="c-sidenav__item">
                        <a class="c-sidenav__link" href="#"><img class="c-sidenav__icon" src="./img/movieicon.svg" alt="dashboardicon">Content</a>
                    </li>  
                    <li class="c-sidenav__item">
                        <a class="c-sidenav__link" href="#"><img class="c-sidenav__icon" src="./img/usericon.svg" alt="dashboardicon">Gebruikers</a>
                    </li>
                    <li class="c-sidenav__item">
                    <a class="c-sidenav__link" href="#"><img class="c-sidenav__icon" src="./img/help.svg" alt="dashboardicon">Help</a>
                </li>
                <li class="c-sidenav__item">
                    <a class="c-sidenav__link" href="#"><img class="c-sidenav__icon" src="./img/settings.svg" alt="dashboardicon">Instellingen</a>
                </li>       
                </ul>
                <div class="c-sidenav__rapport">
                <p>PDF rapport</p>
                <p>Download maandelijks rapport</p>
                <button class="c-btn">download</button>
              </div>
              </div>`);
        }
    } else {
        if (added) {
            added = false;
            var newNav = nav.querySelector(".c-sidenav__menu--responsive");
            nav.removeChild(newNav);
        }
    }
}

let windowWidth = window.innerWidth;

window.addEventListener('resize', function() {
    if (window.innerWidth !== windowWidth) {
        location.reload();
    }
});

const init = function () {
  updateNav()
};

document.addEventListener("DOMContentLoaded", init);


