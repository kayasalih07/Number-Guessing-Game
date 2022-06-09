let ranNum = Math.floor(Math.random() * 100 + 1);

console.log(ranNum);

const userGuess = document.getElementById("userGuess");
const mesg = document.getElementById("message");
const reStart = document.getElementById("restart");
const rightLeft = document.getElementById("right");
const label = document.getElementById("label");
const input = document.getElementById("guess");

let right = 5;

guess.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    userGuess.click();
  }
});

const play = () => {
  let guess = document.getElementById("guess").value;
  if (guess > 0 && guess < 100) {
    if (right > 1) {
      if (guess > ranNum) {
        right -= 1;
        mesg.innerText = ` ${guess} is too high!`;
        div.style.padding = "1rem";
        div.classList.add("text-bg-danger");
        div.classList.add("rounded-3");
        rightLeft.innerText = `${right} rights left!`;
      } else if (guess < ranNum) {
        right -= 1;
        mesg.innerText = ` ${guess} is too low!`;
        div.style.padding = "1rem";
        div.classList.add("text-bg-danger");
        div.classList.add("rounded-3");
        rightLeft.innerText = `${right} rights left!`;
      } else if (guess == ranNum) {
        right -= 1;
        mesg.innerText = ` ${guess} is correct. YOU WIN!!`;
        reStart.style.display = "block";
        label.style.display = "none";
        userGuess.style.display = "none";
        rightLeft.innerHTML = ` `;
        input.style.display = "none";
      }
    } else {
      rightLeft.innerHTML = `0 rights left!`;
      reStart.style.display = "block";
      label.style.display = "none";
      input.style.display = "none";
      mesg.innerText = `GAME OVER!`;
      div.style.padding = "1rem";
      userGuess.style.display = "none";
    }
  } else {
    mesg.innerText = `"Enter a number between 0 and 100`;
    div.style.padding = "1rem";
    div.classList.add("text-bg-danger");
    div.classList.add("rounded-3");
  }
};

userGuess.addEventListener("click", play);
