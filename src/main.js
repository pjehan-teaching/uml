import Prism from 'prismjs';
import Chart from 'chart.js';
import './js/tabs';
import './css/style.scss';

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  Chart.defaults.global.defaultFontSize = 22;

  new Chart(document.getElementById('chart-chaos-per-year').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['2011', '2012', '2013', '2014', '2015'],
      datasets: [
        {
          label: 'Successful',
          backgroundColor: '#8AD045',
          borderColor: '#8AD045',
          data: [29, 27, 31, 28, 29]
        },
        {
          label: 'Challenged',
          backgroundColor: '#FD7729',
          borderColor: '#FD7729',
          data: [49, 56, 50, 55, 52]
        },
        {
          label: 'Failed',
          backgroundColor: '#F93826',
          borderColor: '#F93826',
          data: [22, 17, 19, 17, 19]
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }],
      }
    }
  });

  new Chart(document.getElementById('chart-chaos-per-size').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['grand', 'large', 'medium', 'moderate', 'small'],
      datasets: [
        {
          label: 'Successful',
          backgroundColor: '#8AD045',
          borderColor: '#8AD045',
          data: [6, 11, 12, 24, 61]
        },
        {
          label: 'Challenged',
          backgroundColor: '#FD7729',
          borderColor: '#FD7729',
          data: [51, 59, 62, 64, 32]
        },
        {
          label: 'Failed',
          backgroundColor: '#F93826',
          borderColor: '#F93826',
          data: [43, 30, 26, 12, 7]
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }],
      }
    }
  });

});
