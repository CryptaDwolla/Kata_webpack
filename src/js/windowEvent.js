function windowEvent() {
  let sidebar = document.querySelector(".sidebar");
  if (window.innerWidth > 1366) sidebar.classList.remove("hidden");
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1366) {
      sidebar.classList.remove("hidden");
    } else sidebar.classList.add("hidden");
  });
}

windowEvent();