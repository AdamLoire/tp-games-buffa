window.onload = () => {
    init();
    setupGameRedirects(); // Ajout de la redirection après l'init
};

function init() {
    let backBtn = document.getElementById("home-btn");
    let scoreBtns = document.querySelectorAll(".score");

    backBtn.addEventListener("click", () => {
        window.location.href = "../index.html";
    })

    scoreBtns.forEach((btn, index) => {
        let score = localStorage.getItem(`scoreGame${index+1}`);
        if (score === null) score = 0;

        scoreBtnListener(btn);
    })

}

function scoreBtnListener(btn){
    btn.addEventListener("click", () => {
        if (btn.classList.contains("clicked")) {
            scoreBtnAlreadyClickedLogic(btn);
        }
        else{
            scoreBtnNotClickedLogic(btn);
        }
    })
}

function scoreBtnAlreadyClickedLogic(btn) {
    let gameContainers = document.querySelectorAll(".game-container");
    let scoreDiv = document.querySelector(".score-div");

    btn.classList.remove("game-btn-clicked");
    btn.textContent = "Current score";

    btn.classList.remove("clicked");
    scoreDiv.remove();
    gameContainers.forEach((container) => {
        container.style.display = "flex";
    });
}

const scoreBtnNotClickedLogic = (btn) => {
    let gameContainers = document.querySelectorAll(".game-container");
    let appContainer = document.querySelector(".container");
    let classIndex = Number(btn.classList[2]);

    btn.classList.add("game-btn-clicked");
    btn.textContent = "Back to game list";

    gameContainers.forEach((container, index) => {
        container.style.display = index + 1 === classIndex ? "flex" : "none";
    });

    let addedDiv = document.createElement("div");
    addedDiv.classList.add("score-div");
    let scoreTitle = document.createElement("h1");
    scoreTitle.innerText = `Your score = ${localStorage.getItem(`scoreGame${classIndex}`)}`

    addedDiv.appendChild(scoreTitle);
    appContainer.appendChild(addedDiv);

    btn.classList.add("clicked");
}


function setupGameRedirects() {
    const gameButtons = document.querySelectorAll(".game-btn");

    gameButtons.forEach((btn) => {
        const gameClass = Array.from(btn.classList).find(cls => /^game\d+$/.test(cls));
        if (gameClass) {
            const gameNumber = gameClass.replace("game", "");
            btn.addEventListener("click", () => {
                window.location.href = `game${gameNumber}/game${gameNumber}index.html`;
            });
        }
    });
}



