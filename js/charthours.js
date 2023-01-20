const chartsubs = function () {
  const subs = document.querySelector(".js-subsdb");

  new Chart(subs, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Maa", "Apr", "Mei", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      fontColor: "white",
      datasets: [
        {
          label: "Uren bekeken",
          backgroundColor: ["#FF0A5A"],
          data: [200, 99, 205, 180, 120, 190, 300, 199, 215, 170, 140, 150],
          stack: 1,
        }
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          beginAtZero: true,
          max: 750,
          grid: { color: "rgba(166, 169, 183, 0.2)" },
          ticks: {
            color: "white",
            // forces step size to be 5 units
            stepSize: 25, // <----- This prop sets the stepSize
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
  if (document.querySelector(".js-form-chart")) {
    chartsubs();
  }
};

document.addEventListener("DOMContentLoaded", init);
