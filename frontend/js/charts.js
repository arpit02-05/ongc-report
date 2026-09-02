// =============================
// PIPELINE HEALTH (LINE CHART)
// =============================

const healthCtx = document.getElementById('healthChart');

new Chart(healthCtx, {
    type: 'line',
    data: {
        labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25'],
        datasets: [{
            label: 'Events/sec',
            data: [120, 140, 160, 150, 180, 185],
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56,189,248,0.15)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});


// =============================
// EVENTS PER MINUTE (BAR CHART)
// =============================

const eventsCtx = document.getElementById('eventsChart');

new Chart(eventsCtx, {
    type: 'bar',
    data: {
        labels: [
            'Pipeline-1',
            'Pipeline-2',
            'Pipeline-3',
            'Pipeline-4'
        ],
        datasets: [{
            label: 'Events',
            data: [5200, 4300, 3100, 2640],
            backgroundColor: [
                '#38bdf8',
                '#22c55e',
                '#f59e0b',
                '#a855f7'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});


// =============================
// PIPELINE STATUS (PIE CHART)
// =============================

const statusCtx = document.getElementById('statusChart');

new Chart(statusCtx, {
    type: 'pie',
    data: {
        labels: [
            'Running',
            'Stopped'
        ],
        datasets: [{
            data: [4, 1],
            backgroundColor: [
                '#22c55e',
                '#ef4444'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    }
});