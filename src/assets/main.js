let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields(){
  let randomNumber = Math.floor(Math.random());
  answer.value = randomNumber;
}
