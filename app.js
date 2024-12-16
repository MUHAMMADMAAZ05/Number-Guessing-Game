let randomNumber=Math.floor(Math.random()*20)
console.log(randomNumber)

let highscore=20
let totalscore=0

const input = document.getElementById('numberInput');
document.querySelector("#highsc").innerHTML=highscore
document.querySelector("#tsc").innerHTML=totalscore

input.addEventListener('input', () => {
    const value = input.value;

    // Allow only two digits
    if (value.length > 2  ) {
        input.value = value.slice(0, 2);
    }
});

function check(){
    const number = document.getElementById('numberInput').value
    
    if (number == randomNumber) {
        document.querySelector(".result").innerHTML="Number Matched"
        document.querySelector("#tsc").innerHTML=highscore
    }else if(number<randomNumber){
        document.querySelector(".result").innerHTML="Number is too low"
        highscore--;
        document.querySelector("#highsc").innerHTML=highscore
    }else if(number>20){
        document.querySelector(".result").innerHTML="Guess Number between 1 to 20"
    }
    else {
        document.querySelector(".result").innerHTML="Number is too high"
        highscore--;
        document.querySelector("#highsc").innerHTML=highscore
    }
}

function restart(){
    location.reload()
}