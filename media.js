let tr = document.querySelector(".truth");
let dare = document.querySelector(".dare");
let hideThisElement = document.querySelector(".say");
let truth_game = document.querySelector(".truth-game");

tr.addEventListener("click", () => {
    hideThisElement.style.display = "none";
    truth_game.style.display = "flex";
})

dare.addEventListener("click", () => {
    hideThisElement.style.display = "none";
    truth_game.style.display = "flex";
});


let btnsubmit = document.querySelector(".btn-media-submit");

btnsubmit.addEventListener("click", () => {
    
    document.location.replace("https://youtube.com/shorts/_iFJ6JfrVk4?si=WDingvPoSwJrh3MU");
    
})