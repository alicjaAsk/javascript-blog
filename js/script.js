"use strict";
// document.getElementById("test-button").addEventListener("click", function () {
//   const links = document.querySelectorAll(".titles a");
//   console.log("links:", links);
// });

// const favList = document.querySelector(".sidebar");
// const lista = console.log(favList);

const titleClickHandler = function (event) {
  const clickedElement = this;
  console.log("link was clicked");
  event.preventDefault();

  /* [DONE] remove class 'active' from all article links  */
  const activeLink = document.querySelector(".titles a.active");
  if (activeLink) activeLink.classList.remove("active");

  /* [IN PROGRESS] add class 'active' to the clicked link */
  clickedElement.classList.add("active");

  /* remove class 'active' from all articles */
  const activeArticle = document.querySelector(".post.active");
  if (activeArticle) activeArticle.classList.remove("active");

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add("active");
};

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}
