// alert("js connected");
let ball = document.querySelector(".ball");
let board = document.querySelector(".board");
let leftPaddle = document.querySelector(".left");
let rightPaddle = document.querySelector(".right");
let paddle = document.querySelector(".paddle");
let boardBound = board.getBoundingClientRect();
let x = (y = true);
let leftPlayerLives = (rightPlayerLives = 3);

// selectLivesIcon
let leftBalls = document.querySelectorAll(".l1");
let rightBalls = document.querySelectorAll(".r1");

// change ball color
function changeBallColor(ball) {
	if (ball === "left") {
		leftBalls[leftPlayerLives].classList.add("active");
	} else {
		rightBalls[rightPlayerLives].classList.add("active");
	}
}

//taking user input
document.addEventListener("keydown", (e) => {
	if (e.key == "w") {
		movePaddle(leftPaddle, -window.innerHeight * 0.1);
	} else if (e.key == "s") {
		movePaddle(leftPaddle, window.innerHeight * 0.1);
	} else if (e.key == "ArrowUp") {
		movePaddle(rightPaddle, -window.innerHeight * 0.1);
	} else if (e.key == "ArrowDown") {
		movePaddle(rightPaddle, window.innerHeight * 0.1);
	}
});

function movePaddle(cPaddle, change) {
	let cPaddleBound = cPaddle.getBoundingClientRect();

	if (
		cPaddleBound.top + change >= boardBound.top &&
		cPaddleBound.bottom + change <= boardBound.bottom
	) {
		cPaddle.style.top = cPaddleBound.top + change + "px";
	}
}
function reset() {
	ball.style.top = window.innerHeight * 0.45 + "px";
	ball.style.left = window.innerWidth * 0.49 + "px";
	requestAnimationFrame(moveBall);
}

function moveBall() {
	let ballcord = ball.getBoundingClientRect();
	let ballTop = ballcord.top;
	let ballLeft = ballcord.left;
	let ballRight = ballcord.right;
	let ballBottom = ballcord.bottom;

	// check if collided with any players horizontal boundary
	let hasTouchedLeft = ballLeft < boardBound.left;
	let hasTouchedRight = ballRight > boardBound.right;

	if (hasTouchedLeft || hasTouchedRight) {
		if (hasTouchedLeft) {
			leftPlayerLives--;
			changeBallColor("left");
			if (leftPlayerLives == 0) {
				alert("GAME OVER Player B !!!WON!!!");
				document.location.reload();
			} else {
				return reset();
			}
		} else {
			rightPlayerLives--;
			changeBallColor("right");

			if (rightPlayerLives == 0) {
				alert("GAME OVER Player A !!!WON!!!");
				document.location.reload();
			} else {
				return reset();
			}
		}
	}

	//handle vertically
	if (ballTop <= boardBound.top || ballBottom >= boardBound.bottom) {
		y = !y;
	}

	//handle horizontally
	// if (ballLeft <= boardBound.left || ballRight >= boardBound.right) {
	// 	x = !x;
	// }

	// **********************COLLISION*******************
	// right hit => np
	let rightpaddleBounds = rightPaddle.getBoundingClientRect();

	if (
		rightpaddleBounds.top <= ballTop + 30 &&
		rightpaddleBounds.bottom >= ballBottom - 30 &&
		rightpaddleBounds.left <= ballRight &&
		rightpaddleBounds.right >= ballLeft
	) {
		x = !x;
	}

	// right hit => np
	let leftpaddleBounds = leftPaddle.getBoundingClientRect();

	if (
		leftpaddleBounds.top <= ballTop + 30 &&
		leftpaddleBounds.bottom >= ballBottom - 30 &&
		leftpaddleBounds.left <= ballRight &&
		leftpaddleBounds.right >= ballLeft
	) {
		x = !x;
	}
	// *************************************COLLISION**************

	//issue

	ball.style.top = y == true ? ballTop + 2 + "px" : ballTop - 2 + "px";
	ball.style.left = x == true ? ballLeft + 2 + "px" : ballLeft - 2 + "px";
	requestAnimationFrame(moveBall);
}
// jab bhi browser pe naya frame show toh browser us function run kar dega jo apne pas kiya hain
requestAnimationFrame(moveBall);
