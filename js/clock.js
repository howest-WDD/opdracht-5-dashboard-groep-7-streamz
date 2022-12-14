function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  var time = h + ":" + m;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

function ShowDate() {
  var newdate = new Date().toLocaleDateString("nl-be", { year: "numeric", weekday: "short", month: "long", day: "numeric" });

  document.getElementById("MyDateDisplay").innerHTML = newdate;
}

const init = function () {
  ShowDate();
  showTime();
};

document.addEventListener("DOMContentLoaded", init);
