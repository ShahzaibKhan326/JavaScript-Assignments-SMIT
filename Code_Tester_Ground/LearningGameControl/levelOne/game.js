const player = document.querySelector("#player")

let playerX = 100;
let speed = 5;
const  keys = {};

let playerY = 0;
let velocityY = 0;   
let gravity = 0.6;
let onGround = true;

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


    if(keys[" "] && onGround)
    {
        velocityY = 12;
        onGround = false;
    }

    velocityY -= gravity;
    playerY += velocityY;

    if(playerY <= 0)
    {
        playerY = 0;
        velocityY = 0;
        onGround = true;
    }

    if (playerX < 0) playerX = 0;
    if (playerX > 760) playerX = 760;

    player.style.left = playerX+"px";
    player.style.bottom = playerY+"px";

    

    requestAnimationFrame(gameLoop);
}

gameLoop()