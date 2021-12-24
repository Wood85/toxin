import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


const labels = ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  dataArray = [130, 65, 65, 0],
  ctx = document.querySelector('.page-room-details__chart').getContext('2d'),
  gradientOne = ctx.createLinearGradient(0, 0, 0, 122),
  gradientTwo = ctx.createLinearGradient(0, 61, 0, 122),
  gradientThree = ctx.createLinearGradient(0, 0, 0, 61),
  gradientFour = ctx.createLinearGradient(0, 180, 0, 192),
  colors = [];

for (let i = 0; i < dataArray.length; i++) {
  switch (i) {
    case 0:
      gradientOne.addColorStop(0, 'rgba(255, 227, 156, 1)');
      gradientOne.addColorStop(1, 'rgba(255, 186, 156, 1)');
      colors.push(gradientOne);
      break;
    case 1:
      gradientTwo.addColorStop(0, 'rgba(111, 207, 151, 1)');
      gradientTwo.addColorStop(1, 'rgba(102, 210, 234, 1)');
      colors.push(gradientTwo);
      break;
    case 2:
      gradientThree.addColorStop(0, 'rgba(188, 156, 255, 1)');
      gradientThree.addColorStop(1, 'rgba(139, 164, 249, 1)');
      colors.push(gradientThree);
      break;
    case 3:
      gradientFour.addColorStop(0, 'rgba(144, 144, 144, 1)');
      gradientFour.addColorStop(1, 'rgba(61, 73, 117, 1)');
      colors.push(gradientFour);
      break;
  }
}

const backgroundColors = colors,
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
  getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.querySelector(id);
    console.log(id);
    let legendList = legendContainer.querySelector('ul');
    if(!legendList) {
      legendList = document.createElement('ul');
      legendList.classList.add('page-room-details__legend-list');
      legendContainer.appendChild(legendList);
    }
    return legendList;
  },
  htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
      console.log('htmlLegend');
      const ul = getOrCreateLegendList(chart, options.containerClass);
      console.log(ul.children);
      while(ul.firstChild) {
        ul.firstChild.remove()
      }
      const legendItems = chart.options.plugins.legend.labels.generateLabels(chart);
      legendItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('page-room-details__legend-item');

        li.addEventListener('click', function () {
          const {type} = chart.config;
          if(type === 'pie' || type === 'doughnut') {
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
          }
          chart.update();
        })

        const colorBox = document.createElement('span');
        colorBox.classList.add('page-room-details__color-box');
        colorBox.classList.add(`page-room-details__color-box_${index+1}`);
        const labelText = document.createElement('span');
        labelText.classList.add('page-room-details__label-text');
        const text = document.createTextNode(item.text);

        li.appendChild(colorBox);
        li.appendChild(labelText);
        labelText.appendChild(text);
        ul.appendChild(li);
      });
    }
  },
  config = {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        legend: {
          display:false,
        },
        htmlLegend: {
          containerClass: '.page-room-details__legend-container'
        }
      },
      cutout: '90%',
      radius: 62,
    },
    plugins: [htmlLegendPlugin]
  },
  myChart = new Chart(
    document.querySelector('.page-room-details__chart'),
    config
  );