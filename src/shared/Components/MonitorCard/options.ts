export const options = {
  legend: { display: false },
  maintainAspectRatio: false,
  responsive: true,
  axes: { display: false },
  layout: {
    padding: {
      left: 20,
      right: 10,
      bottom: 9,
      top: 5,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        display: false,
        gridLines: {
          drawOnChartArea: false,
          drawBorder: false,
          scaleShowLabels: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        display: false,
      },
    ],
  },
};
