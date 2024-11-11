const environmentFrame = document.querySelector('.environment-frame');

let isDragging = false;
let startX;
let scrollLeft;

environmentFrame.addEventListener('mousedown', (e) => {
    isDragging = true;
    environmentFrame.classList.add('active');
    startX = e.pageX - environmentFrame.offsetLeft;
    scrollLeft = environmentFrame.scrollLeft;
});

environmentFrame.addEventListener('mouseleave', () => {
    isDragging = false;
});

environmentFrame.addEventListener('mouseup', () => {
    isDragging = false;
});

environmentFrame.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - environmentFrame.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the multiplier for drag speed
    environmentFrame.scrollLeft = scrollLeft - walk;
});

// Touch support
environmentFrame.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - environmentFrame.offsetLeft;
    scrollLeft = environmentFrame.scrollLeft;
});

environmentFrame.addEventListener('touchend', () => {
    isDragging = false;
});

environmentFrame.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - environmentFrame.offsetLeft;
    const walk = (x - startX) * 1.5;
    environmentFrame.scrollLeft = scrollLeft - walk;
});
