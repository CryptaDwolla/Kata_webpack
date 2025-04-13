function feedback() {
  let spanner = document.querySelector(
    ".upper-menu__third-part--bid--icon--bg"
  );
  let spannerText = document.querySelector(".upper-menu__third-part--bid");
  let feedbackForm = document.querySelector(".feedback");
  spanner.addEventListener("click", function (e) {
    feedbackForm.classList.toggle("hidden");
    openContent();
    e.stopPropagation();
  });
  spannerText.addEventListener("click", function () {
    feedbackForm.classList.toggle("hidden");
  });
}

function openContent() {
  let sidebarContainer = document.querySelector(".content");
  sidebarContainer.classList.toggle("content-opacity");
}

function closeContent() {
  let sidebarContainer = document.querySelector(".content");
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

function feedbackClose() {
  let spanner = document.querySelector(".feedback--button");
  let feedbackForm = document.querySelector(".feedback");
  spanner.addEventListener("click", function () {
    feedbackForm.classList.toggle("hidden");
    openContent();
  });
}

feedback();
feedbackClose();