// alert("js connected");
let ball = document.querySelector(".ball");
let board = document.querySelector(".board");
let leftPaddle = document.querySelector(".left");
let rightPaddle = document.querySelector(".right");
let boardBound = board.getBoundingClientRect();
let x = (y = true);
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
		cPaddle.style.top = cPaddleBound.top + change+"px";
	}
}

function moveBall() {
	let ballcord = ball.getBoundingClientRect();
	let ballTop = ballcord.top;
	let ballLeft = ballcord.left;
	let ballRight = ballcord.right;
	let ballBottom = ballcord.bottom;

	//handle vertically
	if (ballTop <= boardBound.top || ballBottom >= boardBound.bottom) {
		y = !y;
	}

	//handle horizontally
	if (ballLeft <= boardBound.left || ballRight >= boardBound.right) {
		x = !x;
	}
	ball.style.top = y == true ? ballTop + 2 + "px" : ballTop - 2 + "px";
	ball.style.left = x == true ? ballLeft + 2 + "px" : ballLeft - 2 + "px";
	requestAnimationFrame(moveBall);
}
// jab bhi browser pe naya frame show toh browser us function run kar dega jo apne pas kiya hain
requestAnimationFrame(moveBall);
