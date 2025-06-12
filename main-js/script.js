// this is for the main.js file


//active menu item

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });



// this is for the monthly bar chart

 const ctx = document.getElementById('monthlyBarChart').getContext('2d');

    // Sample data
    const values = [800, 1200, 1800, 900, 2500, 1700, 2100, 600, 1900, 2300, 1400, 2900];

    // Color coding based on value thresholds
    const barColors = values.map(value => {
      if (value < 1000) return 'rgba(255, 99, 132, 0.8)';      // Red - low
      else if (value < 2000) return 'rgba(255, 205, 86, 0.8)'; // Yellow - medium
      else return 'rgba(75, 192, 192, 0.8)';                   // Green - high
    });

    const monthlyBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [{
          label: 'Monthly Score',
          data: values,
          backgroundColor: barColors,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Score'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => `Value: ${context.raw}`
            }
          }
        }
      }
    });
