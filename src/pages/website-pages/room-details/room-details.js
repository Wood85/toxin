import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const labels = ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  dataArray = [130, 65, 65, 0],
  backgroundColors = ['yellow', 'green', 'blue', 'black'],
  dataArrayReversed = dataArray.reverse(),
  labelsArrayReversed = labels.reverse(),
  backgroundColorsReversed = backgroundColors.slice(0, dataArray.length).reverse(),
  data = {
    labels: labelsArrayReversed,
    datasets: [{
      backgroundColor: backgroundColorsReversed,
      data: dataArrayReversed,
    }]
  },
  config = {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        legend: {
          reverse: true,
          labels: {
            boxWidth: 12,
            boxHeight: 12,
            borderRadius: '50%',
            font: {
              family: 'Montserrat',
              size: 14
            },
          },
          position: 'right',
        }
      },
      cutout: '90%',
      responsive: true
    }
  },
  myChart = new Chart(
    document.querySelector('.page-room-details__chart'),
    config
  );