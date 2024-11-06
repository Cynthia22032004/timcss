// const frameParent = document.getElementById("frameParent");

// let isDragging = false;
// let startX;
// let scrollLeft;

// frameParent.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   frameParent.classList.add("active"); // Adds the active class for the grabbing cursor
//   startX = e.pageX - frameParent.offsetLeft;
//   scrollLeft = frameParent.scrollLeft;
// });

// frameParent.addEventListener("mouseleave", () => {
//   isDragging = false;
//   frameParent.classList.remove("active");
// });

// frameParent.addEventListener("mouseup", () => {
//   isDragging = false;
//   frameParent.classList.remove("active");
// });

// frameParent.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;  // Don't do anything if not dragging
//   e.preventDefault();  // Prevent text selection while dragging
  
//   const x = e.pageX - frameParent.offsetLeft; // Get the current mouse position
//   const walk = (x - startX) * 3; // The multiplier affects the speed of scrolling
  
//   frameParent.scrollLeft = scrollLeft - walk; // Set the new scroll position
// });


const slider = document.querySelector('.frameParent');
let isDown = false;
let startX;
let scrollLeft;