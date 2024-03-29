const chartkijkuren = function () {
  const kijkuren = document.querySelector(".js-kijkurendb");

  new Chart(kijkuren, {
    type: "line",
    data: {
      labels: ["zo", "ma", "di", "woe", "do", "vri", "za"],
      datasets: [
        {
          backgroundColor: ["#FF0A5A"],
          borderColor: "#FF0A5A",
          data: [4, 2, 3, 3, 2, 4, 4],
          label: "21+",
        },
        {
          backgroundColor: ["#CC0243"],
          borderColor: "#CC0243",
          data: [4.5, 2.1, 3.5, 2.8, 2, 4.2, 3.8],
          label: "12-21",
        },
        {
          backgroundColor: ["#FED71F"],
          borderColor: "#FED71F",
          data: [3, 1, 2, 1, 2, 3, 3],
          label: "onder 12",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 5,
          grid: { color: "rgba(166, 169, 183, 0.2)" },
          ticks: {
            color: "white",
            // forces step size to be 5 units
            stepSize: 1, // <----- This prop sets the stepSize
          },
        },
        x: {
          grid: { color: "rgba(0,0,0,0)" },
          ticks: {
            color: "white",
          },
        },
      },
      title: {
        display: true,
        text: "World population per region (in millions)",
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        point: {
          borderWidth: 0,
          radius: 1,
          backgroundColor: "rgba(0,0,0,0)",
        },
      },
    },
  });
};

const init = function () {
  if (document.querySelector(".js-page-dashboard")) {
    chartkijkuren();
  }
};

document.addEventListener("DOMContentLoaded", init);
