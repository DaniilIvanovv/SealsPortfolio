const cursor = document.getElementById("cursor");
const cursorSmall = document.getElementById("cursorSmall");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let cursorSmallX = 0, cursorSmallY = 0;

document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

    cursorSmallX += (mouseX - cursorSmallX) * 0.25;
    cursorSmallY += (mouseY - cursorSmallY) * 0.25;
    cursorSmall.style.transform = `translate3d(${cursorSmallX}px, ${cursorSmallY}px, 0)`;

    requestAnimationFrame(animate);
}
animate();
