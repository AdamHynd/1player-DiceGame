const rollDice = document.querySelector("#RollBttn")
const change = document.querySelector("#switchBttn")
const message = document.querySelector("#message")
const score = document.querySelector("#score")

const winMsg = "Congrats! you win! rolld the dice to play again!"
const loseMsg = "You lost! Better luck next time!"

let gamescore = 0;
let fail = 1;
let win =20;

let diceside = {
    d1:"./Images/1.png",
    d2:"./Images/2.png",
    d3:"./Images/3.png",
    d4:"./Images/4.png",
    d5:"./Images/5.png",
    d6:"./Images/6.png"
}

const rollDie = ()=>{
    randie = Math.floor((math.random()*6)+1)
    document.getElementById("dice").src = diceside["d" + ranDie];
    score = (score + randie);
    currentscore.textContent = gamescore;

    if (randie == fail && gamescore <= winValue){
        gamescore =0;
        currentscore.textContent= 0;
        themessage.innerText = loseMsg
        document.getElementById("message").style.backgroundColor = "red"
        document.getElementById(message).style.color = "white"
    }
    else if (gamescore >= winvalue) {
        gamescore = 0;
        currentscore.textContent = 0;
        themessage.innerText = winMsg
        document.getElementById("message").style.backgroundColor = "green"
        document.getElementById("message").style.color = "white"
    }
    else {
        themessage.textContent = "Keep Rolling"
        document.getElementById("message").style.backgroundColor = "wheat"
        document.getElementById("message").style.color = "blueviolet"
    }

}

rollDice.addEventListener("click", rollDie)