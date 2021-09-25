let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
console.log(viewportHeight, viewportWidth)
const animatedText = document.getElementsByClassName("text1")[0];

const aosAnimation = document.querySelectorAll('.aos');
observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.intersectionRatio > 0) {
entry.target.classList.add('aos-animate');
} else {
entry.target.classList.remove('aos-animate');
}
});
});
aosAnimation.forEach(aosObject => {
observer.observe(aosObject);
});

