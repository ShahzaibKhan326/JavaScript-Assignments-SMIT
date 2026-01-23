const player = document.querySelector("#player")

let playerX = 100;
let speed = 5;

document.addEventListener("keydown", (e)=> 
{
    if(e.key === "ArrowRight")
    {
        playerX += speed;
    }
    if(e.key === "ArrowLeft")
    {
        playerX -= speed;
    }

    player.style.left = playerX+"px";
})