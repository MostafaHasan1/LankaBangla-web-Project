document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById("individual_form"));
    const formDataObject = {};
    formData.forEach((v, k) => {
      formDataObject[k] = v;
    });
    fetch("http://localhost:3300/users/individual", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  });