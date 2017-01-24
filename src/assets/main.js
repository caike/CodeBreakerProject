let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(!validateInput(input.value)){
      return;
    }
    attempt.value = parseInt(attempt, 10) + 1;
}

function setHiddenFields(){
  answer.value = Math.floor(Math.random() * 10000).toString();
  while(answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
  attempt.value = "0";
}

function setMessage(value){
  let message = document.getElementById('message');
  message.innerHTML = value;
}

function validateInput(value){
  if(value.length === 4){
    return true;
  }
  setMessage("Guesses must be exactly 4 characters long");
  return false;
}
