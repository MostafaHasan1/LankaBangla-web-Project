const usersApi = "http://localhost:3300/users";

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
            userData = [...data];
            updateDataTable();
        })
        .catch(error => { console.log(error); })
})

document.getElementById("boidreq").addEventListener("click", event => {
    userData = [
        ...userData.map(data => ({ ...data, BOID: data.BOID === null ? newBOID(data.nid) : data.BOID }))
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

const newRow = ({ name, email, nid, BOID }) => {
    const row = document.createElement("tr");
    row.appendChild(newCol(name));
    row.appendChild(newCol(email));
    row.appendChild(newCol(nid));
    row.appendChild(newCol(BOID));
    return row;
}

const newCol = (text) => {
    const col = document.createElement("td");
    col.textContent = text;
    return col;
}

const newBOID = (nid) => {
    const uniqueBOID = generateUniqueNumber();
    fetch(`${usersApi}/${nid}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ BOID: uniqueBOID })
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