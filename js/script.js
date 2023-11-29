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

  /* remove class 'active' from all article links  */
  const activeLink = document.querySelector(".titles a.active");
  if (activeLink) activeLink.classList.remove("active");

  /* add class 'active' to the clicked link */
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

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks(customSelector = "") {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  let html = "";

  /* for each article */
  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  for (const article of articles) {
    /* get the article id */
    const articleId = article.getAttribute("id");
    /*  find the title element */
    /*  get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /*  create HTML of the link */
    // const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    const linkHTMLData = { id: articleId, title: articleTitle };
    const linkHTML = templates.articleLink(linkHTMLData);
    console.log("linkHTML: ", linkHTML);
    /*  insert link into html variable */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll(".titles a");
  console.log("link: ", links);

  for (const link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}

generateTitleLinks();

// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }
