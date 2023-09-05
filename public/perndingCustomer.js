const usersApi = "http://localhost:3300/users/individual";

let userData = [];
let counter = 1;

const dataTable = document.getElementById("tableBody");

// event handlers
document.addEventListener("DOMContentLoaded", event => {
    fetch(usersApi, {
        method: "GET"
    })
        .then(reponse => reponse.json())
        .then(data => {
            userData = [...data.filter(d=> d.bo_id=== null)];
            updateDataTable();
        })
        .catch(error => { console.log(error); })
})

document.getElementById("boidreq").addEventListener("click", event => {
    userData = [
        ...userData.map(data => ({ ...data, bo_id: data.bo_id === null ? newBOID(data.c_code) : data.bo_id }))
    ]

    console.log(userData);

    dataTable.innerHTML = "";
    updateDataTable();
})

// utility functions
const updateDataTable = () => {
    userData.forEach(rowData => {
        dataTable.appendChild(newRow(rowData));
    });
}

const newRow = ({ c_name, c_code, c_sex, bo_id }) => {
    const row = document.createElement("tr");
    row.appendChild(newCol(c_name));
    row.appendChild(newCol(c_code));
    row.appendChild(newCol(c_sex));
    row.appendChild(newCol(bo_id));
    return row;
}

const newCol = (text) => {
    const col = document.createElement("td");
    col.textContent = text;
    return col;
}

const newBOID = (c_code) => {
    const uniqueBOID = generateUniqueNumber();
    fetch(`${usersApi}/${c_code}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ bo_id: uniqueBOID })
    })
        .then(reponse => reponse.json())
        .then(message => { console.log(message); })
        .catch(error => { console.log(error); })
    return uniqueBOID;
}

const generateUniqueNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const uniqueNumber = randomNumber + counter;
    counter++;
    return uniqueNumber;
}