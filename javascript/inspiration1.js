document.addEventListener('DOMContentLoaded', () => {
  const frameParent = document.querySelector('.frame-parent');
  let isDown = false;
  let startX;
  let scrollLeft;

  frameParent.addEventListener('mousedown', (e) => {
      isDown = true;
      frameParent.classList.add('active');
      startX = e.pageX - frameParent.offsetLeft;
      scrollLeft = frameParent.scrollLeft;
  });

  frameParent.addEventListener('mouseleave', () => {
      isDown = false;
      frameParent.classList.remove('active');
  });

  frameParent.addEventListener('mouseup', () => {
      isDown = false;
      frameParent.classList.remove('active');
  });

  frameParent.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - frameParent.offsetLeft;
      const walk = (x - startX) * 2; // Sesuaikan kecepatan scroll
      frameParent.scrollLeft = scrollLeft - walk;
  });
});
