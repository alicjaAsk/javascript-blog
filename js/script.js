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
};

/* [DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll(".titles a.active");

for (let activeLink of activeLinks) {
  activeLink.classList.remove("active");
}

/* [IN PROGRESS] add class 'active' to the clicked link */
console.log("clickedElement (with plus): " + clickedElement);

/* remove class 'active' from all articles */
const activeArticles = document.querySelectorAll(".articles");

for (let activeArticle of activeArticles) {
  activeArticle.classList.remove("article");
}

/* get 'href' attribute from the clicked link */
const articleSelector = clickedElement.getAttribute("href");
console.log(articleSelector);

/* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(articleSelector);
console.log(targetArticle);

/* add class 'active' to the correct article */
targetArticle.classList.add("active");
console.log(targetArticlel);

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}
