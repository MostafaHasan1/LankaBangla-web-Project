const individualDataApi = "http://localhost:3300/users/individual";
const barGraphCtx = document.getElementById("myChart").getContext('2d');
const lineChartCtx = document.getElementById("lineChart").getContext("2d");

const divisionsData = {};
const divisions = [];
const divisionCounts = [];
const yearsData = {};
const years = [];
const yearsCount = [];

const showDivisionBarchart = () => {
    new Chart(barGraphCtx, {
        type: "bar",
        data: {
            labels: divisions,
            datasets: [
                {
                    label: "Divisions",
                    data: divisionCounts,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 2,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}


const showPeryearAccountsLineChart = () => {
    new Chart(lineChartCtx, {
        type: "line",
        data: {
            labels: years,
            datasets: [
                {
                    label: "BO Accounts per Year",
                    data: yearsCount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 2,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetch(individualDataApi, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(allData => {
            allData.forEach(row => {
                const division = row.c_division;
                if (divisionsData[division] === undefined) {
                    divisionsData[division] = 1;
                } else {
                    divisionsData[division] += 1;
                }

                const year = new Date(row.c_opening_date).getFullYear();
                if (yearsData[year] === undefined) {
                    yearsData[year] = 1;
                } else {
                    yearsData[year] += 1;
                }
            })

            for (const d in divisionsData) {
                divisions.push(d);
                divisionCounts.push(divisionsData[d]);
            }

            for (const y in yearsData) {
                years.push(y);
                yearsCount.push(yearsData[y]);
            }

            showDivisionBarchart();
            showPeryearAccountsLineChart();
        })
        .catch(err => { console.log(err); })
})