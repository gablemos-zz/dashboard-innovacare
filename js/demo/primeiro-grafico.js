let primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');

let chart = new Chart(primeiroGrafico, {
    type: 'doughnut',
    data:{
        labels:['Sintomas Manejados'],
        datasets:[
            {
                label: 'Sintomas Manejados',
                data:[90]
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    }
});

