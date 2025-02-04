window.onload = init;

function init() {
    authCheck();
    let lineContent = document.querySelector(".line-content");

    lineContent.addEventListener("click", () => {
        let nav = document.querySelector(".navbar");
        nav.classList.toggle("active");
        
        lineContent.classList.toggle("open");
    });
}

function authCheck() {
    let loginBtn = document.querySelector(".login-btn");
    if (localStorage.getItem("auth") !== null){
        let jeuBtn = document.getElementById("game-btn");
        loginBtn.textContent = "Logout";
        loginBtn.addEventListener("click", () => {
            localStorage.removeItem("auth");
            location.reload();
        })
        jeuBtn.style.display = "block";
        jeuBtnListener(jeuBtn);
    }
    else{
        loginBtn.addEventListener("click", () => {
            window.location.href = "../html/signin.html";
        });
    }
}

function jeuBtnListener(jeuBtn){
    jeuBtn.addEventListener("click", () => {
        window.location.href = "../html/games.html";
    })
}