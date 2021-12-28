import '../../../components/headers-and-footers/header/header';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function arrayOfIntervals1(start, end, interval) {
  const arr = [];
  for(let i = start; i <= end; i = i+interval) {
    if (i === 12 || i === 112 || i === 212 || i === 312 || i === 412 || i === 512 || i === 612 || i === 712 || i === 812 || i === 912) continue;
    arr.push(i);
    arr.push(i+1);
    arr.push(i+2)
  }
  return arr;
}

function arrayOfIntervals2(start, end, interval) {
  const arr = [];
  for(let i = start; i <= end; i = i+interval) {
    if (i === 11 || i === 111 || i === 211 || i === 311 || i === 411 || i === 511 || i === 611 || i === 711 || i === 811 || i === 911) continue;
    arr.push(i);
  }
  return arr;
}

const labels = ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  dataArray = [130, 65, 65, 0],
  dataSum = dataArray.reduce((a, b) => a + b),
  ctx = document.querySelector('.page-room-details__chart').getContext('2d'),
  gradientOne = ctx.createLinearGradient(0, 0, 0, 122),
  gradientTwo = ctx.createLinearGradient(0, 61, 0, 122),
  gradientThree = ctx.createLinearGradient(0, 0, 0, 61),
  gradientFour = ctx.createLinearGradient(0, 180, 0, 192),
  colors = [],
  firstArrayOfIntervals = arrayOfIntervals1(2,1000, 10),
  secondArrayOfIntervals = arrayOfIntervals2(1,1000,10);
let voices;
if(firstArrayOfIntervals.includes(dataSum)) {
  voices = 'голоса';
} else if(secondArrayOfIntervals.includes(dataSum)) {
  voices = 'голос';
} else {
  voices = 'голосов';
}
const subText = document.querySelector('.page-room-details__chart-subtext');
subText.textContent = voices;

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
  getOrCreateLegendList = (chart, htmlClass) => {
    const legendContainer = document.querySelector(`.${htmlClass}`);
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
  //counter plugin block
  counter = {
    id: 'counter',
    beforeDraw(chart, args, options) {
      const { ctx, chartArea: { top, left, width, height}} = chart;
      ctx.save();
      ctx.font = `${options.fontWeight} ${options.fontSize}px ${options.fontFamily}`;
      ctx.textAlign = 'center';
      ctx.fillStyle = options.fontColor;
      ctx.fillText(options.text, left + (width / 2), top + (height / 2) + options.xPadding);
    },

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
          containerClass: 'page-room-details__legend-container'
        },
        counter: {
          text: String(dataSum),
          fontWeight: 700,
          fontColor: '#BC9CFF',
          fontSize: '24',
          fontFamily: 'Montserrat',
          xPadding: -3,
        },
      },
      cutout: '90%',
      radius: 62,
    },
    plugins: [htmlLegendPlugin, counter]
  },
  myChart = new Chart(
    document.querySelector('.page-room-details__chart'),
    config
  );