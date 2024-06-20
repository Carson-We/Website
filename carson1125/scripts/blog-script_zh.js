var blogContainer = document.getElementById("blog-container");

blogs.forEach(function(blog) {
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
    learnMoreButton.textContent = "了解更多";
    learnMoreButton.onclick = function() {
        window.open(blog.link, "_blank");
    };

    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogSubtitle);
    blogCard.appendChild(blogAuthor);
    blogCard.appendChild(blogDate);
    blogCard.appendChild(learnMoreButton);

    blogContainer.appendChild(blogCard);
});