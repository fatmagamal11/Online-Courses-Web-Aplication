// nav = document.getElementsByClassName("dis-none")[0];
// bars = document.getElementsByClassName("bars")[0];
// links = document.getElementsByClassName("links")[0];

// bars.addEventListener("click", display);
// function display() {
//   nav.style.display = "block";
//   links.style.display = "block";
//   links.style.margin = "50px";
//   nav.style.width = "100%";

// }
page = window.location.href;
str = page.split("/");
name = str[str.length - 1];

cPage = name.split(".");
currentPage = cPage[0];
home = document.querySelector(".navbar-nav #li1");
about = document.getElementById("li2");
teachers = document.getElementById("li3");
blog = document.getElementById("li4");
contacts = document.getElementById("li5");
arr = [home, about, teachers, blog, contacts];
console.log(arr);
arr1 = ["home", "about", "teachers", "blog", "contacts"];
for (i in arr1) {
  if (currentPage == arr1[i]) {
    arr[i].classList.add("clicked");
  }
}

// blog page
// get all pagination links
firstBlog = document.getElementsByClassName("first")[0];
secondBlog = document.getElementsByClassName("second")[0];
thirdBlog = document.getElementsByClassName("third")[0];
const pageLinks = document.querySelectorAll(".page-link");
pageLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    pageLinks.forEach((link) => link.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");
    // get active index
    activeIndex = this.getAttribute("data-index");
    if (activeIndex == 1) {
      firstBlog.style.display = "block";
      secondBlog.style.display = "none";
      thirdBlog.style.display = "none";
    } else if (activeIndex == 2) {
      firstBlog.style.display = "none";
      secondBlog.style.display = "block";
      thirdBlog.style.display = "none";
    } else if (activeIndex == 3) {
      firstBlog.style.display = "none";
      secondBlog.style.display = "none";
      thirdBlog.style.display = "block";
    }
  });
});
