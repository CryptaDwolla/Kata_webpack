function orderCall() {
  let scope = document.querySelector(
    ".upper-menu__third-part--bid--status--icon--bg"
  );
  let scopeText = document.querySelector(".upper-menu__third-part--status");
  let orderCallForm = document.querySelector(".order-call");
  scope.addEventListener("click", function (e) {
    orderCallForm.classList.toggle("hidden");
    openContent();
    e.stopPropagation();
  });
  scopeText.addEventListener("click", function () {
    orderCallForm.classList.toggle("hidden");
  });
}

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

function orderCallClose() {
  let scope = document.querySelector(".order-call--button");
  let orderCallForm = document.querySelector(".order-call");
  scope.addEventListener("click", function () {
    orderCallForm.classList.toggle("hidden");
    openContent();
  });
}

orderCall();
orderCallClose();