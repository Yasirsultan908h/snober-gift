let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  pages[currentPage].classList.add("active");
}

function choice(type) {
  if (type === "continue") {
    alert("Signal received.");
  } else {
    alert("Take your time.");
  }
}
