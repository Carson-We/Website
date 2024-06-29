var blogContainer = document.getElementById("blog-container");

if (blogContainer) {
  blogs.forEach(function (blog) {
    var blogCard = document.createElement("div");
    blogCard.className = "card";

    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;

    var blogSubtitle = document.createElement("h2");
    blogSubtitle.textContent = blog.subtitle;

    var blogAuthor = document.createElement("p");
    blogAuthor.textContent = "By " + blog.author;

    var blogDate = document.createElement("p");
    blogDate.textContent = "Date: " + blog.date;

    var learnMoreButton = document.createElement("button");
    learnMoreButton.className = "btn btn1";
    learnMoreButton.textContent = "Learn More";
    learnMoreButton.addEventListener("click", function () {
      window.open(blog.link, "_blank");
    });

    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogSubtitle);
    blogCard.appendChild(blogAuthor);
    blogCard.appendChild(blogDate);
    blogCard.appendChild(learnMoreButton);

    blogContainer.appendChild(blogCard);
  });
}

var blogContainer_zh = document.getElementById("blog-container_zh");

if (blogContainer_zh) {
  blogs_zh.forEach(function (blog_zh) {
    var blogCard = document.createElement("div");
    blogCard.className = "card";

    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog_zh.title;

    var blogSubtitle = document.createElement("h2");
    blogSubtitle.textContent = blog_zh.subtitle;

    var blogAuthor = document.createElement("p");
    blogAuthor.textContent = "By " + blog_zh.author;

    var blogDate = document.createElement("p");
    blogDate.textContent = "Date: " + blog_zh.date;

    var learnMoreButton = document.createElement("button");
    learnMoreButton.className = "btn btn1";
    learnMoreButton.textContent = "了解更多";
    learnMoreButton.addEventListener("click", function () {
      window.open(blog_zh.link, "_blank");
    });

    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogSubtitle);
    blogCard.appendChild(blogAuthor);
    blogCard.appendChild(blogDate);
    blogCard.appendChild(learnMoreButton);

    blogContainer_zh.appendChild(blogCard);
  });
}

var blogContainer_kr = document.getElementById("blog-container_kr");

if (blogContainer_kr) {
  blogs_kr.forEach(function (blog_kr) {
    var blogCard = document.createElement("div");
    blogCard.className = "card";

    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog_kr.title;

    var blogSubtitle = document.createElement("h2");
    blogSubtitle.textContent = blog_kr.subtitle;

    var blogAuthor = document.createElement("p");
    blogAuthor.textContent = "By " + blog_kr.author;

    var blogDate = document.createElement("p");
    blogDate.textContent = "Date: " + blog_kr.date;

    var learnMoreButton = document.createElement("button");
    learnMoreButton.className = "btn btn1";
    learnMoreButton.textContent = "더 알아보기";
    learnMoreButton.addEventListener("click", function () {
      window.open(blog_kr.link, "_blank");
    });

    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogSubtitle);
    blogCard.appendChild(blogAuthor);
    blogCard.appendChild(blogDate);
    blogCard.appendChild(learnMoreButton);

    blogContainer_kr.appendChild(blogCard);
  });
}