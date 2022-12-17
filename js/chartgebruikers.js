const chartgebruikers = function () {
  const gebruikers = document.querySelector(".js-gebruikersdb");
  new Chart(gebruikers, {
    type: "doughnut",
    data: {
      labels: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Brussel"],
      datasets: [
        {
          label: "Streamz gebruikers",
          backgroundColor: ["#F64900", "#FED71F", "#FF0A5A", "#CC0243", "#F20D3A", "#7D839F"],
          data: [110000, 95600, 89632, 86521, 89200, 59000],
          borderColor: "none",
          borderWidth: 0,
          cutout: "90%",
          radius: "100%",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};

const init = function () {
  chartgebruikers();
};

document.addEventListener("DOMContentLoaded", init);
