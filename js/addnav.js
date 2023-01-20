
let added = false;
function updateNav() {
    var nav = document.querySelector("li#c-nav-responsive-js");
    if (window.innerWidth <= 1200) {
        if (!added) {
            added = true;
            nav.insertAdjacentHTML('beforeend', `
            <div class="c-sidenav__wrap">
            <ul class="c-sidenav__menu c-sidenav__menu--responsive navbar-primary-menu">
                    <li class="c-sidenav__item col-12">
                        <a class="c-sidenav__link col-4" href="index.html"><img class="c-sidenav__icon c-sidenav__icon--active" src="./img/dashboardicon.svg" alt="dashboardicon">Dashboard</a>
                    </li>
                    <li class="c-sidenav__item col-12">
                        <a class="c-sidenav__link col-4" href="overzichtspagina.html"><img class="c-sidenav__icon" src="./img/movieicon.svg" alt="dashboardicon">Content</a>
                    </li>  
                    <li class="c-sidenav__item col-12">
                        <a class="c-sidenav__link col-4" href="gebruikers.html"><img class="c-sidenav__icon" src="./img/usericon.svg" alt="dashboardicon">Gebruikers</a>
                    </li>
                    <li class="c-sidenav__item col-12">
                    <a class="c-sidenav__link col-4" href="startscherm-beheer.html"><img class="c-sidenav__icon" src="./img/schermbeheer.svg" alt="dashboardicon" />Schermbeheer</a>
                    </li>
                <li class="c-sidenav__item col-12">
                    <a class="c-sidenav__link col-4" href="instellingen.html"><img class="c-sidenav__icon" src="./img/settings.svg" alt="dashboardicon">Instellingen</a>
                </li>       
                </ul>
                <div class="row">
                <div class="c-sidenav__rapport">
                <p>PDF rapport</p>
                <p>Download maandelijks rapport</p>
                <button class="c-btn col-4">download</button>
              </div>
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

window.addEventListener('resize', function () {
    if (window.innerWidth !== windowWidth) {
        location.reload();
    }
});

const init = function () {
    updateNav()
};

document.addEventListener("DOMContentLoaded", init);


