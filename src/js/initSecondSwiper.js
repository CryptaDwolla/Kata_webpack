function initSecondSwiper() {
  let button = document.querySelectorAll(".show-button")[1];
  let background = document.querySelectorAll(".show-button--img")[1];
  let text = document.getElementById("show-button--text-second");
  let techniqueList = document.querySelectorAll(".technique-list")[0].children;
  let button1 = document.querySelectorAll(".show-button")[1];
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
    for (let i = 0; i < techniqueList.length; i++) {
      if (i > 2 && window.innerWidth < 1365) {
        techniqueList[i].classList.toggle("hidden");
      } else if (i > 3 && window.innerWidth > 1365) {
        techniqueList[i].classList.toggle("hidden");
      }
    }
  });

  for (let i = 0; i < techniqueList.length; i++) {
    if (i > 2 && window.innerWidth < 1365) {
      techniqueList[i].classList.toggle("hidden");
    } else if (i > 3 && window.innerWidth > 1365) {
      techniqueList[i].classList.toggle("hidden");
    }
  }
}

initSecondSwiper();