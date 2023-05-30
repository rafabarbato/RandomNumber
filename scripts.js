var randomNumber = 0;

function randomNumberGenerator() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
}

randomNumberGenerator();
console.log(randomNumber);