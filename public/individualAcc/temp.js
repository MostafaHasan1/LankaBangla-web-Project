const randomNameApi = "https://randomuser.me/api/";
const IndividualAccountAPi = "http://localhost:3300/users/individual";

const randomIdx = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const accountTypes = ["Margin", "Directory"];
const operationTypes = ["Individual", "Joint", "Company"];
const clientTypes = ["Regualr", "Clearing"];
const divisions = ["Dhaka", "Chittagong", "Barisal", "Khulna", "Rajshahi", "Rangpur", "Sylet", "Mymensingh"];
const occupations = ["Doctor", "Engineer", "Banker", "Accountant", "Salesman", "Secuirity Gaurd"];
const branches = ["Agrabad", "Banani", "Dhanmondi", "Barisal", "Gulshan"];
const bankBranches = ["Vatara", "Gulshan", "Dhanmondi"];

const fillIndividualData = () => {
    const d = new Date();
    const dateString = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

    for (let i = 0; i < 400; i++) {
        fetch(randomNameApi, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(({ results }) => {
                const userData = results[0];
                fetch(IndividualAccountAPi, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "c_name": `${userData.name.first} ${userData.name.last}`,
                        "c_father_name": `${userData.name.last} ${userData.name.first}`,
                        "c_mother_name": `${userData.name.last} ${userData.name.first}`,
                        "c_account_type": accountTypes[randomIdx(0, accountTypes.length)],
                        "c_opening_date": dateString,
                        "c_dob": userData.dob.date.substring(0, 12),
                        "c_sex": userData.gender,
                        "c_pre_add": `${userData.location.street.number}, ${userData.location.street.name}`,
                        "c_pre_city": `${userData.location.city}, ${userData.location.state}`,
                        "c_pre_post_code": `${userData.location.postcode}`,
                        "c_pre_country": `${userData.location.country}`,
                        "c_pre_tel": userData.phone,
                        "c_per_add": `${userData.location.street.number}, ${userData.location.street.name}`,
                        "c_per_city": `${userData.location.city}, ${userData.location.state}`,
                        "c_per_post_code": `${userData.location.postcode}`,
                        "c_per_country": `${userData.location.country}`,
                        "c_per_tel": userData.phone,
                        "c_type": clientTypes[randomIdx(0, clientTypes.length)],
                        "c_division": divisions[randomIdx(0, divisions.length)],
                        "c_mobile_num": userData.cell,
                        "c_email": userData.email,
                        "c_occupation": occupations[randomIdx(0, occupations.length)],
                        "c_etin": randomIdx(1000, 10000),
                        "c_nationality": "Bangladeshi",
                        "c_branch": branches[randomIdx(0, branches.length)],
                        "c_bank_routing_num": randomIdx(100000, 1000000),
                        "c_bank_account_num": randomIdx(10000000, 1000000),
                        "c_bank_branch_name": bankBranches[randomIdx(0, bankBranches.length)],
                        "c_passport_num": userData.login["md5"],
                        "c_operation_type": operationTypes[randomIdx(0, operationTypes.length)],
                        "internet_trading": "y",
                        "dse": "y",
                        "cse": "y",
                        "oms": "y",
                        "sms_service": "y",
                        "email_service": "y"
                    })
                })
                    .then(res => res.json)
                    .then(mssg => { console.log(mssg); })
                    .catch(err => { console.log(err); })
            })
            .catch(err => { console.log(err); })
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    fillIndividualData()
})

