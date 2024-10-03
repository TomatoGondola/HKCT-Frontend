// Replace Text In Header
const checkReplace = document.querySelector(".replace-me");
const toTopBtn = document.querySelector("#to-top");

if (checkReplace !== null) {
	const replace = new ReplaceMe(checkReplace, {
		animation: "animated fadeIn",
		speed: 3000,
		separator: ",",
		loopCount: "infinite",
		autoRun: true,
	});
}

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		toTopBtn.classList.add("show");
	} else {
		toTopBtn.classList.remove("show");
	}
});

function scrollToTop() {
	const duration = 1500; // Duration in milliseconds (1 second)
	const startPosition = window.scrollY;
	const startTime = performance.now();

	function scrollStep(timestamp) {
		const elapsed = timestamp - startTime;
		const progress = Math.min(elapsed / duration, 1);
		window.scrollTo(0, startPosition * (1 - progress));

		if (progress < 1) {
			window.requestAnimationFrame(scrollStep);
		}
	}

	window.requestAnimationFrame(scrollStep);
}
// User Scroll For Navbar

function userScroll() {
	const navbar = document.querySelector(".navbar");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("navbar-sticky");
		} else {
			navbar.classList.remove("navbar-sticky");
		}
	});
}

document.addEventListener("DOMContentLoaded", userScroll);
document.querySelector("#to-top").addEventListener("click", scrollToTop);
