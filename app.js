let btn = document.getElementById("btn");
let i = 10;
let count;

btn.addEventListener("click", e => {
    e.target.textContent = "Starting Count...";
    count = setInterval(() => {
        e.target.textContent = i--;
        if (i <= -1){
            clearInterval(count);
            btn.disabled = true;
            e.target.textContent = "Lets Go!";

            setTimeout(e => {
                window.location.href = "quiz.html";
            }, 1000);
        }
    }, 1000);
});
