document.addEventListener("DOMContentLoaded", function () {
  var blogs = [
    {
      title: "GitHub Sponsors",
      subtitle: "Technical blog about GitHub Sponsors",
      author: "Carson Wu",
      date: "10 August 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/August/10_08_2024/20240810_02.md",
      tag: ["GitHub Sponsors", "Open-Source", "GitHub"]
    },
    {
      title: "Utility-beta.github.io",
      subtitle: "Technical blog about Utility-beta.github.io Scheduled Events",
      author: "Carson Wu",
      date: "10 July 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/July/10_07_2024/20240710_02.md",
      tag: ["Release", "Open-Source", "GitHub"]
    },
    {
      title: "Carson1125",
      subtitle: "Technical blog about carson1125 'v1.1.5.0(004)(1150_004-290624r)' update",
      author: "Carson Wu",
      date: "29 June 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/June/28_06_2024/20240628_02.md",
      tag: ["Release", "Open-Source", "GitHub"]
    },
    {
      title: "A.R.I.E.L.",
      subtitle: "Technical blog about A.R.I.E.L.",
      author: "Carson Wu",
      date: "7 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/07_04_2024/20240402_02.md",
      tag: ["Release", "Open-Source", "GitHub"]
    },
    {
      title: "K.R.I.S.T.Y.",
      subtitle: "Announces Setback in Logic-Based Inference System Development",
      author: "Carson Wu",
      date: "4 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/04_04_2024/20240404_02.md",
      tag: ["Release", "Open-Source", "GitHub"]
    },
    {
      title: "Carson1125",
      subtitle: "Technical blog about carson1125 'v0.1.0.2 (1002304024b)' update",
      author: "Carson Wu",
      date: "3 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/03_04_2024/20240403_02.md",
      tag: ["Release", "Open-Source", "GitHub"]
    },
    {
      title: "NeuralMorse",
      subtitle: "Technical blog about NeuralMorse",
      author: "Carson Wu",
      date: "2 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/02_04_2024/20240402_02.md",
      tag: ["Release", "Open-Source", "GitHub"]
    }
  ];

  var blogsPerPage = 30;
  var currentPage = 1;
  var paginatedBlogs = chunkArray(blogs, blogsPerPage);

  var blogContainer = document.getElementById("blog-container");
  var searchInput = document.getElementById("searchInput");
  var searchBtn = document.getElementById("searchBtn");
  var nextPageButton = document.getElementById("next-page-btn");
  var blogPerPageSelect = document.getElementById("blog-per-page");
  var scrollTopBtn = document.getElementById("scroll-top-btn");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", scrollToTop);
  }

  if (!nextPageButton) {
    console.error("Next page button not found.");
    return;
  }

  if (!blogContainer) {
    console.error("Blog container not found.");
    return;
  }

  renderBlogs(currentPage);
  toggleNextPageButton();

  nextPageButton.addEventListener("click", function () {
    if (currentPage < paginatedBlogs.length) {
      currentPage++;
      renderBlogs(currentPage);
      toggleNextPageButton();
    }
  });

  searchBtn.addEventListener("click", function () {
    var searchTerm = searchInput.value.toLowerCase();
    var filteredBlogs = blogs.filter(function (blog) {
      return (
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.subtitle.toLowerCase().includes(searchTerm) ||
        blog.author.toLowerCase().includes(searchTerm) ||
        blog.tag.toLowerCase().includes(searchTerm)
      );
    });

    searchResults = filteredBlogs;
    paginatedSearchResults = chunkArray(searchResults, blogsPerPage);
    currentPage = 1;
    renderSearchResults(currentPage);
  });

  function renderSearchResults(page) {
    var start = (page - 1) * blogsPerPage;
    var end = start + blogsPerPage;
    var currentResults = paginatedSearchResults[page - 1];

    SearchblogContainer.innerHTML = "";

    currentResults.forEach(function (blog) {
      var blogElement = document.createElement("div");
      blogElement.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.subtitle}</p>
            <p>Author: ${blog.author}</p>
            <p>Tag: ${blog.tag}</p>
        `;
      SearchblogContainer.appendChild(blogElement);
    });

    toggleNextPageButton();
  }

  if (currentPage === 1) {
    document.getElementById("back-to-previous-btn").style.display = "none";
  } else {
    document.getElementById("back-to-previous-btn").style.display = "block";
  }
},

  function chunkArray(array, chunkSize) {
    var result = [];
    for (var i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  },

  function renderBlogs(page) {
    blogContainer.innerHTML = "";

    if (page === 1) {
      var backToPreviousButton = document.createElement("button");
      backToPreviousButton.id = "back-to-previous-btn";
      backToPreviousButton.className = "btn";
      backToPreviousButton.textContent = "Back to Previous Page";
      backToPreviousButton.addEventListener("click", function () {
        currentPage--;
        renderBlogs(currentPage);
        toggleNextPageButton();
      });
      blogContainer.appendChild(backToPreviousButton);
    }

    paginatedBlogs[page - 1].forEach(function (blog) {
      var blogCard = document.createElement("div");
      blogCard.className = "card";

      var blogTitle = document.createElement("h1");
      blogTitle.textContent = blog.title;

      var blogSubtitle = document.createElement("h2");
      blogSubtitle.textContent = blog.subtitle;

      var blogAuthor = document.createElement("p");
      blogAuthor.textContent = "Author: " + blog.author;

      var blogDate = document.createElement("p");
      blogDate.textContent = "Date: " + blog.date;

      var blogTag = document.createElement("p");
      blogTag.textContent = "Tag: " + blog.tag;

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
      blogCard.appendChild(blogTag);
      blogCard.appendChild(learnMoreButton);

      blogContainer.appendChild(blogCard);
    });

    toggleNextPageButton();
  },

  function changeBlogsPerPage() {
    blogsPerPage = parseInt(blogPerPageSelect.value);
    paginatedBlogs = chunkArray(blogs, blogsPerPage);
    currentPage = 1;
    renderBlogs(currentPage);
  });