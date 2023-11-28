document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    stickyHeader();
  };

  const header = document.getElementById("main-header");
  const sticky = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});
