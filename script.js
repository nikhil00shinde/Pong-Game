// alert("js connected");
let ball = document.querySelector(".ball");

function moveBall() {
	let ballcord = ball.getBoundingClientRect();
	let ballTop = ballcord.top;
	let ballLeft = ballcord.left;
	ball.style.top = ballTop + 1 + "px";
	ball.style.left = ballLeft + 1 + "px";
	requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);
