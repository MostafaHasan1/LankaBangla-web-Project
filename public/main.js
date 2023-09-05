// $(document).ready(function () {
//   fetchUsers();

//Create User
//   $("#createForm").on("submit", function (e) {
//     e.preventDefault();

//     const name = $("#createName").val();
//     const email = $("#createEmail").val();

//     $.ajax({
//       url: "/users",
//       method: "POST",
//       data: { name, email },
//       success: function (response) {
//         console.log(response.message);
//         fetchUsers();
//       },
//     });
//   });
// });

document.getElementById("submit").addEventListener("click",(event) => {
  event.preventDefault();
  const userName = document.getElementById("createName");
  const usermail = document.getElementById("createEmail");
  const userNID = document.getElementById("createID");
  console.log(userNID.value, userName.value, usermail.value);
  fetch("http://localhost:3300/users/individual", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: userName.value,
      email: usermail.value,
      nid: userNID.value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// // Fetch all users
// function fetchUsers() {
//   $.ajax({
//     url: "/users",
//     method: "GET",
//     success: function (data) {
//       const userList = $("#userList");
//       userList.empty();

//       data.forEach((user) => {
//         userList.append("<li>Name: ${user.name}, Email: ${user.email}</li>");
//       });
//     },
//   });
// }
