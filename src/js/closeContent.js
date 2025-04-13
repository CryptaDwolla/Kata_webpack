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

let content = document.querySelector(".content");
content.addEventListener("click", function () {
  closeContent();
});


