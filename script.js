let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImage1 = "images/dice" + randomNumber + ".png";
randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

function determiner() {
    if (randomNumber > randomNumber2) {
        document.querySelector("h2").textContent = "Player 1 Wins"
    } else if (randomNumber == randomNumber2) {
        document.querySelector("h2").textContent = "Draw"
    } else if (randomNumber < randomNumber2) {
        document.querySelector("h2").textContent = "Player 2 Wins"
    }
}

determiner();
console.log(randomNumber);
console.log(randomNumber2);