'use strict';

var DEFAULT_COLORS1 = ['#8e5ea2', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0'];
var DEFAULT_COLORS2 = ['#7fb7be', '#357266', '#dacc3e', '#bc2c1a', '#7d1538'];
var DEFAULT_COLORS = ['#8e5ea2', '#357266', '#dacc3e', '#bc2c1a', '#7d1538'];

var ctx = document.getElementById('sintomas-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [90],
			backgroundColor: DEFAULT_COLORS[0],
			label: 'Dataset 1'
		}],
		labels: ['Sintomas Manejados']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: '90',
						font: {
							size: '60',
							family: 'Arial, Helvetica, sans-serif',
							style: 'italic',
							weight: 'bold'
						},
						color: '#bc2c1a'
					}
				]
			}
		}
	}
});

var ctx = document.getElementById('encaminhados-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [90],
			backgroundColor: DEFAULT_COLORS[1],
			label: 'Dataset 1'
		}],
		labels: ['Encaminhados ao pronto atendimento']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: '10',
						font: {
							size: '60',
							family: 'Arial, Helvetica, sans-serif',
							style: 'italic',
							weight: 'bold'
						},
						color: '#bc2c1a'
					}
				]
			}
		}
	}
});

var ctx = document.getElementById('total-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [100],
			backgroundColor: DEFAULT_COLORS[2],
			label: 'Dataset 1'
		}],
		labels: ['Total']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false,
			fontSize: 20,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: 'Total',
						font: {
							size: '60'
						}
					},
					{
						text: '100',
						font: {
							size: '50'
						},
						color: 'grey'
					}
				]
			}
		}
	}
});

var ctx = document.getElementById('sucesso-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [100],
			backgroundColor: DEFAULT_COLORS[0],
			label: 'Dataset 1'
		}],
		labels: ['Taxa de sucesso']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false,
			fontSize: 20,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: 'Taxa de',
						font: {
							size: '60'
						}
					},
					{
						text: 'sucesso',
						font: {
							size: '50'
						},
						color: 'grey'
					},
					{
						text: '90 %',
						font: {
							size: '50'
						},
						color: 'grey'
					}
				]
			}
		}
	}
});

var ctx = document.getElementById('visao-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Doença 1",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Doença 2",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Teste'
      }
    }
});