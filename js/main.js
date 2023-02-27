new Chart(document.getElementById('chartjs-4'), {
    type: 'line',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ],
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(75, 192, 192)',
                lineTension: 0.1,
            },
        ],
    },
    options: {},
})
