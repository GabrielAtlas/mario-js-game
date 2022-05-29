const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

var gameOver = false;

const gameLoop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number.parseFloat(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    // GAME OVER

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    gameOver = true;

    clearInterval(gameLoop);
  }
}, 10);

const jump = () => {
  if (!gameOver) {
    mario.classList.add("jump");

    setTimeout(() => mario.classList.remove("jump"), 500);
  }
};

document.addEventListener("keydown", jump);
