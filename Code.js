document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    const obstacle = document.querySelector(".obstacle");

    let playerPosition = 50;
    let obstaclePosition = 70;
    let isGameOver = false;

    function updateGame() {
        if (!isGameOver) {
            player.style.bottom = playerPosition + "px";
            obstacle.style.left = obstaclePosition + "%";

            // Check for collision
            if (
                playerPosition <= 100 &&
                playerPosition >= 0 &&
                obstaclePosition >= 50 &&
                obstaclePosition <= 70
            ) {
                gameOver();
            }
        }
    }

    function gameOver() {
        isGameOver = true;
        alert("Game Over!");
    }

    function movePlayer(e) {
        if (!isGameOver) {
            if (e.key === "ArrowLeft" && playerPosition > 0) {
                playerPosition -= 10;
            } else if (e.key === "ArrowRight" && playerPosition < 100) {
                playerPosition += 10;
            }

            updateGame();
        }
    }

    document.addEventListener("keydown", movePlayer);

    // Game loop
    setInterval(function () {
        if (!isGameOver) {
            obstaclePosition -= 1;

            if (obstaclePosition <= 0) {
                obstaclePosition = 100;
            }

            updateGame();
        }
    }, 10);
});
