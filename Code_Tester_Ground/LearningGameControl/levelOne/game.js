const player = document.querySelector("#player")

let playerX = 100;
let speed = 5;
const  keys = {};

document.addEventListener("keydown", e =>  keys[e.key] = true)
document.addEventListener("keyup", e =>  keys[e.key] = false)

function gameLoop()
{
    if(keys["ArrowRight"])
    {
        playerX += speed;
    }
    if(keys["ArrowLeft"])
    {
        playerX -= speed;
    }

    player.style.left = playerX+"px";

    requestAnimationFrame(gameLoop);
}

gameLoop()