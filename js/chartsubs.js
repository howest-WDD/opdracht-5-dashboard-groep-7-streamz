const chartsubs = function () {
  const subs = document.querySelector(".js-subsdb");

  new Chart(subs, {
    type: "bar",
    data: {
      labels: ["jul", "aug", "sept", "oct", "nov", "Dec"],
      fontColor: "white",
      datasets: [
        {
          label: "Streamz",
          backgroundColor: ["#FF0A5A"],
          data: [418000, 415000, 410000, 420590, 425000, 420690],
          barThickness: 50,
        },
        {
          label: "Streamz+",
          backgroundColor: ["#CC0243"],
          data: [189599, 190000, 210000, 140000, 180000, 150000],
        },
        {
          label: "Gratis",
          backgroundColor: ["#FED71F"],
          data: [12, 19, 3, 5, 2, 80000],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 500000,
          grid: { color: "white" },
          ticks: {
            color: "white",
            // forces step size to be 5 units
            stepSize: 200000, // <----- This prop sets the stepSize
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  });
};

const init = function () {
  chartsubs();
};

document.addEventListener("DOMContentLoaded", init);
