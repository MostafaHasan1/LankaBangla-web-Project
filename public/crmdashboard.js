const mychart1 = document.getElementById("myChart").getContext('2d');;

const divisions = {};
function updateDiv(userdata) {
  userdata.forEach((element) => {
    if (divisions[element.c_division] === undefined) {
      divisions[element.c_division] = 1;
    } else {
      divisions[element.c_division] += 1;
    }
  });
  
  const labels = [];
  const data = [];
  for (const v in divisions) {
    labels.push(v);
    data.push(divisions[v]);
  }

  function divisionbar (){
    new Chart(mychart1, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Divisions",
            data: data,
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
  }
//   new Chart(mychart1, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: "Divisions",
//           data: data,
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//           ],
//           borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//           ],
//           borderWidth: 2,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3300/users/individual_division_wise_customer", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      updateDiv(response);
      console.log(divisions);
    })
    .catch((response) => {
      console.log(response);
    });
});


const myChart = document.getElementById("lineChart");

const years = {};
function updateDiv(userdata) {
  userdata.forEach((element) => {
   const regYear = new Date(element.c_opening_date).getFullYear();
   if (!years[regYear]){
    years[regYear]=1;
   }else{
    years[regYear]++;
   }
}); 
  
  const labels = [];
  const data = [];
  for (const v in years) {
    labels.push(v);
    data.push(years[v]);
  }

  new Chart(myChart, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "BO Accounts per Year",
          data: data,
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
  fetch("http://localhost:3300/users/peryear_bo_account_open_count", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      updateDiv(response);
      console.log(years);
    })
    .catch((response) => {
      console.log(response);
    });
});
