function displayUsers(usersArray){
    // go to the pet salon project and display the users in the table
let tr = "";
const TABLE = document.getElementById("usersTable");

for (let i = 0; i <usersArray.length; i++) {
    let user = usersArray[i];
    tr +=`

    <td>${user.email}</td>
    <td>${user.password}</td>
    <td>${user.firstname}</td>
    <td>${user.lastname}</td>
    <td>${user.color}</td>
    <td>${user.age}</td>
    <td>${user.address}</td>
    <td>${user.phone}</td>
    <td>${user.payment}</td>
    
    `;
}
TABLE.innerHTML= tr;
}

function init(){
    let users = readUser();
    displayUsers(users);
}

window.onload=init;