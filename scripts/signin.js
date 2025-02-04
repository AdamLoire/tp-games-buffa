window.onload = init;

function init () {
    let remControlObjects = document.querySelectorAll(".rem-control-div");
    let signInBlock = document.querySelector(".sign-in");
    let signUpBlock = document.querySelector(".sign-up");
    let btn = document.querySelector(".auth-block button");
    let incorrectData = document.getElementById("incorrect-data");

    for (let i = 0; i < 2; i++){
        let obj = remControlObjects[i];
        obj.addEventListener("click", () => {
            incorrectData.style.display = "none";
            obj.classList.add("active-state");
            let toSwitch = 1;
            if (i == 1) {
                toSwitch = 0;
                signInBlock.classList.add("hidden-item");
                signUpBlock.classList.remove("hidden-item");
                btn.innerText = "Sign Up";
            }
            else{
                signInBlock.classList.remove("hidden-item");
                signUpBlock.classList.add("hidden-item");
                btn.innerText = "Sign In";
            }
            remControlObjects[toSwitch].classList.remove("active-state");
        });
    }

    btn.addEventListener("click", () => {
        if (signInBlock.classList.contains("hidden-item")){
            signUpLogic(incorrectData);
        }
        else{
            signInLogic(incorrectData);
        }
    });
}

function signInLogic(incorrectData){
    let signInData = document.querySelectorAll(".sign-in input");
    let email = signInData[0].value;
    let password = signInData[1].value;
    
    let storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser !== null && storedUser.password === password){
        let authObj = {
            isAuth: 1,
            user: email
        }
        localStorage.setItem("auth", JSON.stringify(authObj));
        window.location.href = "/";
    }
    else{
        incorrectData.innerText = "Incorrect email or password";
        incorrectData.style.display = "block";
        signInData[0].value = "";
        signInData[1].value = "";
    }
}


function signUpLogic(incorrectData){
    let signUpData = document.querySelectorAll(".sign-up input");
    let email = signUpData[0].value;
    let password = signUpData[1].value;

    if (email === "" || password === " ") {
        incorrectData.innerText = "Empty input"
        incorrectData.style.display = "block";
        return;
    }

    if (localStorage.getItem(email) !== null){
        incorrectData.innerText = "User already exists"
        incorrectData.style.display = "block";
        signUpData[0].value = "";
        signUpData[1].value = "";
    }
    else {
        let user = {
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(user));
        console.log(localStorage.getItem(email));
    }    
}
