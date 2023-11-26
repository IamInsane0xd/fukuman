function switchPage(index, pageName) {
  let buttons = document.querySelectorAll(".nav-item");
  let button = document.querySelector(`#${pageName}-button`);
  let pages = document.querySelectorAll(".page");
  let page = document.querySelector(`#${pageName}-page`);

  buttons.forEach(item => item.classList.remove("current-page"));
  button.classList.add("current-page");
  pages.forEach(item => item.style = "display: none;");
  page.style = "";
}

function homePage() {
  switchPage(0, "home");
}

function aboutPage() {
  switchPage(1, "about");
}
