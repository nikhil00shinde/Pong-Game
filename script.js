// alert("js connected");
let ball = document.querySelector(".ball");
let board = document.querySelector(".board");
let boardBound = board.getBoundingClientRect();
let x = (y = true);
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
