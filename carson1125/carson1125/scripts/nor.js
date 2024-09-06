// General
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  const updateVersions = () => {
    document.querySelectorAll(".version").forEach((element) => {
      element.textContent = "v1.1.7.0(067)(1170_067-060924r)";
    });

    document.querySelectorAll(".cr").forEach((element) => {
      element.textContent =
        "Copyright © 2023-2024 Carson Wu. All rights reserved.";
    });
  };

  const toggleDropdown = () => {
    const dropdownButton = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdownButton) {
      dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("active");
      });

      window.addEventListener("click", function (event) {
        if (dropdownButton && !dropdownButton.contains(event.target)) {
          dropdownContent.classList.remove("active");
        }
      });
    }
  };

  const openTab = (tabName) => {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("active");
    });
    document.getElementById(tabName).classList.add("active");
  };

  const tabButtons = document.querySelectorAll("[data-tab]");
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabName = this.dataset.tab;
      openTab(tabName);
    });
  });

  document.querySelectorAll(".map a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const tabId = this.getAttribute("href").substring(1);
      showTab(tabId);
    });
  });

  function showTab(tabId) {
    document.querySelectorAll(".tab").forEach((tab) => {
      if (tab.id === tabId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }

  updateVersions();
  toggleDropdown();

  const defaultTab = document.querySelector('[data-tab="tab1"]');
  const defaultTabName = defaultTab.dataset.tab;
  openTab(defaultTabName);
});

// General-blogs
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var blogs = [
      {
        title: "GitHub Sponsors",
        subtitle: "Technical blog about GitHub Sponsors",
        author: "Carson Wu",
        date: "10 August 2024",
        link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/August/10_08_2024/20240810_02.md",
        tag: ["GitHub Sponsors", "Open-Source", "GitHub"],
      },
      {
        title: "Utility-beta.github.io",
        subtitle:
          "Technical blog about Utility-beta.github.io Scheduled Events",
        author: "Carson Wu",
        date: "10 July 2024",
        link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/July/10_07_2024/20240710_02.md",
        tag: ["Release", "Open-Source", "GitHub"],
      },
      {
        title: "Carson1125",
        subtitle:
          "Technical blog about carson1125 'v1.1.5.0(004)(1150_004-290624r)' update",
        author: "Carson Wu",
        date: "29 June 2024",
        link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/June/28_06_2024/20240628_02.md",
        tag: ["Release", "Open-Source", "GitHub"],
      },
      {
        title: "A.R.I.E.L.",
        subtitle: "Technical blog about A.R.I.E.L.",
        author: "Carson Wu",
        date: "7 April 2024",
        link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/07_04_2024/20240402_02.md",
        tag: ["Release", "Open-Source", "GitHub"],
      },
      {
        title: "K.R.I.S.T.Y.",
        subtitle:
          "Announces Setback in Logic-Based Inference System Development",
        author: "Carson Wu",
        date: "4 April 2024",
        link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/04_04_2024/20240404_02.md",
        tag: ["Release", "Open-Source", "GitHub"],
      },
      {
        title: "Carson1125",
        subtitle:
          "Technical blog about carson1125 'v0.1.0.2 (1002304024b)' update",
        author: "Carson Wu",
        date: "3 April 2024",
        link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/03_04_2024/20240403_02.md",
        tag: ["Release", "Open-Source", "GitHub"],
      },
      {
        title: "NeuralMorse",
        subtitle: "Technical blog about NeuralMorse",
        author: "Carson Wu",
        date: "2 April 2024",
        link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/02_04_2024/20240402_02.md",
        tag: ["Release", "Open-Source", "GitHub"],
      },
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
        behavior: "smooth",
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
  }
);

// Carson Account
document.addEventListener("DOMContentLoaded", function () {
  function signUp() {
    const formElements = {
      firstName: "firstName",
      lastName: "lastName",
      UserID: "userid",
      ClientID: "clientid",
      AccountType: "account-class",
      bornDate: "dateDropdowns",
      country: "country",
      phoneCountry: "phoneCountry",
      phone: "phone",
      gender: "gender",
      password: "password",
      confirmPassword: "confirmPassword",
      agreeTerms: "agreeTerms",
      receiveNews: "receiveNews",
    };

    for (const key in formElements) {
      const element = document.getElementById(formElements[key]);
      if (element.value === "" && key !== "confirmPassword") {
        document.getElementById("signupMessage").innerText =
          "Please fill in all required fields.";
        return;
      }
    }

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      document.getElementById("passwordMatchMessage").innerText =
        "Passwords do not match.";
      document.getElementById("passwordMatchMessage").style.color = "red";
      return;
    }

    // Password strength check function
    function checkPasswordStrength(password) {
      // Implement password strength check logic here
    }

    // Password match check function
    function checkPasswordMatch() {
      // Implement password match check logic here
    }

    // AJAX request for sign up
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "nor.php", true);
    xhr.onload = function () {
      // Handle response
    };

    fetch("nor.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDataToSend),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function login() {
    const rememberMe = document.getElementById("RememberMe").checked;
    const username = document.getElementById("signin-Username").value;
    const password = document.getElementById("signin-Password").value;

    const userData = {
      username: username,
      password: password,
      login: true,
    };

    // AJAX request for login
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "nor.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText;
        const loginMessage = document.getElementById("loginMessage");

        loginMessage.innerHTML =
          response === "Login successful"
            ? "Login successful"
            : "Invalid username or password. Please try again.";

        if (response === "Login successful" && rememberMe) {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("password", password);
        }
      }
    };

    xhr.send(JSON.stringify(userData));
  }

  // Set saved username and password on login form if available
  const savedUsername = sessionStorage.getItem("username");
  const savedPassword = sessionStorage.getItem("password");

  if (savedUsername) {
    document.getElementById("signin-Username").value = savedUsername;
  }

  if (savedPassword) {
    document.getElementById("signin-Password").value = savedPassword;
  }

  // Login form submission event listener
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      login();
    });
});

// Carson Utility
document.addEventListener("DOMContentLoaded", function () {
  // Display Time Function
  const displayTime = (elementId, options) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = new Date().toLocaleString("en-US", options);
    } else {
      console.error(`Element with ID ${elementId} not found.`);
    }
  };

  // Timer Functions
  const startTimer = (id) => {
    const timerElement = document.getElementById(id);
    const startTime = Date.now();
    const updateTimer = () => {
      const elapsedTime = Date.now() - startTime;
      timerElement.textContent = new Date(elapsedTime)
        .toISOString()
        .substr(14, 9);
      requestAnimationFrame(updateTimer);
    };
    updateTimer();
  };

  // Event Listeners for Start and Stop Buttons
  for (let i = 1; i <= 4; i++) {
    const startBtn = document.getElementById(`start-btn-${i}`);
    const stopBtn = document.getElementById(`stop-btn-${i}`);

    if (startBtn && stopBtn) {
      startBtn.addEventListener("click", () => startTimer(`timer-display${i}`));
      stopBtn.addEventListener("click", () => clearInterval(intervalIds[i]));
    }
  }

  // Update Time Periodically
  const optionsUTC = { timeZone: "UTC", ...timeOptions };
  const optionsLocal = { timeZone: "America/New_York", ...timeOptions };
  setInterval(() => displayTime("utc-time", optionsUTC), 1000);
  setInterval(() => displayTime("local-time", optionsLocal), 1000);

  document.addEventListener("DOMContentLoaded", function () {
    function generateRandomCode() {
      const length = parseInt(document.getElementById("length").value);
      const characters =
        "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+={}[]|:;.,?/~`";
      let code = "";

      const startTime = Date.now();

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
      }

      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      document.getElementById("grcresult").innerHTML = code;
      document.getElementById("time").innerHTML = `${elapsedTime} millisecond`;
    }

    function appendToDisplay(value) {
      document.getElementById("display").value += value;
    }

    function clearDisplay() {
      document.getElementById("display").value = "";
    }

    function calculate() {
      const expression = document.getElementById("display").value;
      const result = eval(expression);
      document.getElementById("display").value = result;
    }

    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    }

    function calculateBMI() {
      const height =
        parseFloat(document.getElementById("height").value) *
        (document.getElementById("height-unit").value === "in" ? 2.54 : 1);
      const weight =
        parseFloat(document.getElementById("weight").value) *
        (document.getElementById("weight-unit").value === "lbs" ? 0.453592 : 1);

      if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid height and weight.");
        return;
      }

      const bmi = (weight / (height / 100) ** 2).toFixed(2);
      document.getElementById("result").textContent = bmi;
    }
  });
});

// Carson Arcade
document.addEventListener("DOMContentLoaded", function () {
  let currentPlayer = "X";
  let board = ["", "", "", "", "", "", "", "", ""];

  function makeMove(index) {
    if (board[index] === "") {
      board[index] = currentPlayer;
      document.getElementsByClassName("cell")[index].innerText = currentPlayer;

      // Check for win condition
      if (checkWin()) {
        alert(currentPlayer + " wins!");
        resetGame();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  }

  function checkWin() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      if (
        board[condition[0]] !== "" &&
        board[condition[0]] === board[condition[1]] &&
        board[condition[1]] === board[condition[2]]
      ) {
        return true;
      }
    }

    return false;
  }

  function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";

    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
      cell.innerText = "";
    }
  }
});
