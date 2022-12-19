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
          data: [218000, 215000, 210000, 220590, 225000, 220690],
          stack: 1,
        },
        {
          label: "Streamz+",
          backgroundColor: ["#CC0243"],
          data: [189599, 190000, 210000, 140000, 180000, 150000],
          stack: 1,
        },
        {
          label: "Gratis",
          backgroundColor: ["#FED71F"],
          data: [39000, 41000, 42000, 72000, 65000, 80000],
          stack: 2,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          beginAtZero: true,
          max: 500000,
          grid: { color: "rgba(166, 169, 183, 0.2)" },
          ticks: {
            color: "white",
            // forces step size to be 5 units
            stepSize: 200000, // <----- This prop sets the stepSize
            callback: (value, index, values) => (index == values.length - 1 ? undefined : value),
          },
        },
        x: {
          stacked: true,
          ticks: {
            color: "white",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};

const init = function () {
  chartsubs();
};

document.addEventListener("DOMContentLoaded", init);
