function initFirstSwiper() {
  let button = document.querySelectorAll(".show-button")[0];
  let background = document.querySelectorAll(".show-button--img")[0];
  let text = document.getElementById("show-button--text");
  let repairingList = document.querySelectorAll(".repairing-list")[0].children;
  let button1 = document.querySelectorAll(".show-button")[0];
  button.addEventListener("click", function () {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
      text.textContent = "Скрыть";
      background.classList.remove("show-button--img");
      background.classList.add("show-button--img--rotate");
    } else {
      text.textContent = "Показать все";
      background.classList.remove("show-button--img--rotate");
      background.classList.add("show-button--img");
    }
    for (let i = 0; i < repairingList.length; i++) {
      if (i > 5 && window.innerWidth < 1366) {
        repairingList[i].classList.toggle("hidden");
      } else if (i > 7 && window.innerWidth > 1366) {
        repairingList[i].classList.toggle("hidden");
      }
    }
  });

  for (let i = 0; i < repairingList.length; i++) {
    if (i > 5 && window.innerWidth < 1365) {
      repairingList[i].classList.toggle("hidden");
    } else if (i > 7 && window.innerWidth > 1365) {
      repairingList[i].classList.toggle("hidden");
    }
  }
}

initFirstSwiper();