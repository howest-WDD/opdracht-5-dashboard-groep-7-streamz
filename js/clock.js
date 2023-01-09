function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    let time = h + ":" + m;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  // var time = h + ":" + m;
  // document.getElementById("MyClockDisplay").innerText = time;
  // document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}








function ShowDate() {
    let newdate = new Date().toLocaleDateString('nl-be', { year:"numeric", weekday:"short", month:"long", day:"numeric"});

  document.getElementById("MyDateDisplay").innerHTML = newdate;
}

const init = function () {
    showTime();
    ShowDate();
};

  document.addEventListener("DOMContentLoaded", init);

// const init = function () {
//   ShowDate();
//   showTime();
// };

document.addEventListener("DOMContentLoaded", init);

