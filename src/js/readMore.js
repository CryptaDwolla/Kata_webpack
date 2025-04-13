function readMore() {
  let readButton = document.querySelector(".company-info__read-more");
  let readButtonImg = document.querySelector(
    ".company-info__read-more--button--icon"
  );
  let readButtonText = document.getElementById("test");
  let companyInfo = document.querySelector(".company-info__text--2nd-block");
  let companyInfoTwo = document.querySelector(".company-info__text--3nd-block");
  readButton.addEventListener("click", function () {
    readButton.classList.toggle("active");
    companyInfo.classList.toggle("hidden");
    companyInfoTwo.classList.toggle("hidden");
    if (readButton.classList.contains("active")) {
      readButtonText.textContent = "Скрыть";
      readButtonImg.classList.remove("show-button--img");
      readButtonImg.classList.add("show-button--img--rotate-two");
    } else {
      readButtonText.textContent = "Читать далее";
      readButtonImg.classList.remove("show-button--img--rotate-two");
      readButtonImg.classList.add("show-button--img");
    }
    if (window.innerWidth > 767 && companyInfo.classList.contains("hidden")) {
      companyInfo.classList.remove("hidden");
    }
  });
}

readMore();