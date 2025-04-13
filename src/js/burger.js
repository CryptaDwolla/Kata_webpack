// this.sidebarContainer = document.querySelector(".content");
function openContent() {
  let sidebarContainer = document.querySelector(".content");
  sidebarContainer.classList.toggle("content-opacity");
}

function closeContent() {
  let sidebarContainer = document.querySelector(".content");
    console.log(123);
  if (!sidebarContainer.classList.contains("content-opacity")) return;
  sidebarContainer.classList.toggle("content-opacity");
  let sidebar = document.querySelector(".sidebar");
  let feedbackForm = document.querySelector(".feedback");
  let orderCallForm = document.querySelector(".order-call");
  if (!sidebar.classList.contains("hidden") && window.innerWidth < 1366) {
    sidebar.classList.toggle("hidden");
  } else if (!feedbackForm.classList.contains("hidden")) {
    feedbackForm.classList.toggle("hidden");
  } else if (!orderCallForm.classList.contains("hidden"))
    orderCallForm.classList.toggle("hidden");
}

function burgerOpen() {
  let burger = document.querySelector(".upper-menu__first-part--menu");
  let sidebar = document.querySelector(".sidebar");
  burger.addEventListener("click", function (e) {
    sidebar.classList.remove("hidden");
    openContent();
    e.stopPropagation();
  });
}

function burgerClose() {
  let burger = document.querySelector(".sidebar-menu__burger");
  let sidebar = document.querySelector(".sidebar");
  let sidebarContainer = document.querySelector(".content");
  burger.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
    sidebarContainer.classList.toggle("content-opacity");
  });
}

burgerOpen();
burgerClose();