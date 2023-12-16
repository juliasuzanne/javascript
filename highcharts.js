let chart; // globally available
document.addEventListener("DOMContentLoaded", function () {
  chart = Highcharts.stockChart("container", {
    rangeSelector: {
      selected: 1,
    },
    series: [
      {
        name: "USD to EUR",
        data: usdtoeur, // predefined JavaScript array
      },
    ],
  });
});
