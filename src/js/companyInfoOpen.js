function companyInfoOpen() {
  let companyInfo = document.querySelector(".company-info__text--2nd-block");
  if (window.innerWidth > 767) {
    companyInfo.classList.remove("hidden");
  }
}

companyInfoOpen();