const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [
            {
                label: '2022',
                data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945],
                backgroundColor: 'orange',
                borderWidth: 1
            },
            {
                label: '2023',
                data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689],
                backgroundColor: 'green',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10000
            }
        },
        plugins: {
            tooltip: {
                mode: 'index', 
                intersect: false, 
                callbacks: {
                    label: function(context) {
                        return `Penjualan: ${context.raw}`; 
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Laporan Penjualan Tahun 2022 dan 2023'
            }
        },
        hover: {
            mode: 'index', 
            intersect: false
        }
    }
});
