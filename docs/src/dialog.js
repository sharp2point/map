const dialog = document.querySelector(".dialog");
const form = document.querySelector(".dialog-form");

dialog.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    dialogClose();
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
function dialogClose() {
  dialog.style.left = "-10000px";
  dialog.classList.add("hide");
}

export function dialogOpen(position) {
  const [x, y] = position;
  dialog.classList.remove("hide");
  dialog.style.left = 0;
  dialog.style.transform = `translateX(${
    window.innerWidth / 2 - dialog.getBoundingClientRect().width / 2 + 130
  }px) translateY(${
    window.innerHeight / 2 - dialog.getBoundingClientRect().height - 20
  }px)`;
}
