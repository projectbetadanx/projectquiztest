let btnanswer = document.querySelectorAll(".realanswer");
let btn = document.querySelectorAll(".answer-btn");
let submitbtn = document.getElementById("submit-question");
let close = document.querySelectorAll(".answer");
let point = 0;
let increase = 0;

// button yang mewakili semua button
btn.forEach(event => {
    event.addEventListener("click", () => {
        close[increase++].style.display = "none";
    })
})

// button selection yang betul
btnanswer.forEach(e => {
    e.addEventListener("click", () => {
        point++;
        console.log(point);
    });
});


// result

let percent = document.getElementById("percent");
let spinningCircle = document.querySelector(".circle");
let click_after_result = document.querySelector(".result");
let btn_gift = document.getElementById("btn-gift");

submitbtn.addEventListener("click", () => {
    let closeelement = document.querySelector(".content-quiz");
    closeelement.style.display = "none";

    let calc = point * 10 + "%";
    percent.textContent = calc;

    spinningCircle.style.background = `conic-gradient(pink 0% ${calc}, white 0 100%)`;
    click_after_result.style.display = "block";

    if (point < 7){
        btn_gift.disabled = true;
    }
});

btn_gift.addEventListener("click", () => {
    document.location.href = "media.html";
})