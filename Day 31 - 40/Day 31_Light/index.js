var mouseMovement = document.body;

mouseMovement.addEventListener("mousemove", (e) => {
  mouseMovement.style.setProperty("--x", e.clientX + "px");
  mouseMovement.style.setProperty("--y", e.clientY + "px");
});