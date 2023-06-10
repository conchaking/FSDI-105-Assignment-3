function login(){
    console.log("login");

    let inputEmail = $("#inputEmail").val();
    let inputPassword = $('#inputPassword').val();
    console.log(inputPassword,inputEmail);

    let users = readUser();
    console.log(users)

    for (let i = 0; i <users.length; i++){
        let user = users[i];
        console.log(user);
        if(inputEmail == user.email && inputPassword){
            console.log("Welcome");
        }else{
            console.log("Invalid credentials");
        }
        }
    }
    // get the values from the HTML Inputs
    
    //get the users from LS
    
    //for loop to travel the array (we were doing it under users.js)
    
    //display the users on the console


function init(){
    // hook event
        //hook events
        $("#btnLogin").on('click',login);
        //$("#btnAdd").onclick(register);
        
    }
window.onload=init;