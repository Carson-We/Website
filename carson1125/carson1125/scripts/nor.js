// Nor
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  const updateVersions = () => {
    document.querySelectorAll(".version").forEach(element => {
      element.textContent = "v1.1.7.0(064)(1170_064-030924r)";
    });

    document.querySelectorAll(".cr").forEach(element => {
      element.textContent = "Copyright © 2023-2024 Carson Wu. All rights reserved.";
    });
  };

  const toggleDropdown = () => {
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownButton) {
      dropdownButton.addEventListener('click', function () {
        dropdownContent.classList.toggle('active');
      });

      window.addEventListener('click', function (event) {
        if (dropdownButton && !dropdownButton.contains(event.target)) {
          dropdownContent.classList.remove('active');
        }
      });
    }
  };

  const openTab = tabName => {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
  };

  const tabButtons = document.querySelectorAll('[data-tab]');
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tabName = this.dataset.tab;
      openTab(tabName);
    });
  });

  document.querySelectorAll('.map a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const tabId = this.getAttribute('href').substring(1);
      showTab(tabId);
    });
  });

  function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
      if (tab.id === tabId) {
        tab.style.display = 'block';
      } else {
        tab.style.display = 'none';
      }
    });
  }

  updateVersions();
  toggleDropdown();

  const defaultTab = document.querySelector('[data-tab="tab1"]');
  const defaultTabName = defaultTab.dataset.tab;
  openTab(defaultTabName);
});

// Carson Account
document.addEventListener('DOMContentLoaded', function () {
  function signUp() {
    const formElements = {
      firstName: 'firstName',
      lastName: 'lastName',
      UserID: 'userid',
      ClientID: 'clientid',
      AccountType: 'account-class',
      bornDate: 'dateDropdowns',
      country: 'country',
      phoneCountry: 'phoneCountry',
      phone: 'phone',
      gender: 'gender',
      password: 'password',
      confirmPassword: 'confirmPassword',
      agreeTerms: 'agreeTerms',
      receiveNews: 'receiveNews'
    };

    for (const key in formElements) {
      const element = document.getElementById(formElements[key]);
      if (element.value === '' && key !== 'confirmPassword') {
        document.getElementById('signupMessage').innerText = 'Please fill in all required fields.';
        return;
      }
    }

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      document.getElementById('passwordMatchMessage').innerText = 'Passwords do not match.';
      document.getElementById('passwordMatchMessage').style.color = 'red';
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
    xhr.open('GET', 'nor.php', true);
    xhr.onload = function () {
      // Handle response
    };

    fetch('nor.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDataToSend)
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function login() {
    const rememberMe = document.getElementById('RememberMe').checked;
    const username = document.getElementById('signin-Username').value;
    const password = document.getElementById('signin-Password').value;

    const userData = {
      username: username,
      password: password,
      login: true
    };

    // AJAX request for login
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'nor.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText;
        const loginMessage = document.getElementById('loginMessage');

        loginMessage.innerHTML = response === "Login successful" ? "Login successful" : "Invalid username or password. Please try again.";

        if (response === "Login successful" && rememberMe) {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
        }
      }
    };

    xhr.send(JSON.stringify(userData));
  }

  // Set saved username and password on login form if available
  const savedUsername = sessionStorage.getItem('username');
  const savedPassword = sessionStorage.getItem('password');

  if (savedUsername) {
    document.getElementById('signin-Username').value = savedUsername;
  }

  if (savedPassword) {
    document.getElementById('signin-Password').value = savedPassword;
  }

  // Login form submission event listener
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    login();
  });
});

// Carson Utility
document.addEventListener('DOMContentLoaded', function () {
  // Display Time Function
  const displayTime = (elementId, options) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = new Date().toLocaleString('en-US', options);
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
      timerElement.textContent = new Date(elapsedTime).toISOString().substr(14, 9);
      requestAnimationFrame(updateTimer);
    };
    updateTimer();
  };

  // Event Listeners for Start and Stop Buttons
  for (let i = 1; i <= 4; i++) {
    const startBtn = document.getElementById(`start-btn-${i}`);
    const stopBtn = document.getElementById(`stop-btn-${i}`);

    if (startBtn && stopBtn) {
      startBtn.addEventListener('click', () => startTimer(`timer-display${i}`));
      stopBtn.addEventListener('click', () => clearInterval(intervalIds[i]));
    }
  }

  // Update Time Periodically
  const optionsUTC = { timeZone: 'UTC', ...timeOptions };
  const optionsLocal = { timeZone: 'America/New_York', ...timeOptions };
  setInterval(() => displayTime('utc-time', optionsUTC), 1000);
  setInterval(() => displayTime('local-time', optionsLocal), 1000);

  document.addEventListener('DOMContentLoaded', function () {
    function generateRandomCode() {
      const length = parseInt(document.getElementById('length').value);
      const characters = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+={}[]|:;.,?/~`';
      let code = '';

      const startTime = Date.now();

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
      }

      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      document.getElementById('grcresult').innerHTML = code;
      document.getElementById('time').innerHTML = `${elapsedTime} millisecond`;
    }

    function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function calculate() {
      const expression = document.getElementById('display').value;
      const result = eval(expression);
      document.getElementById('display').value = result;
    }

    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }

    function calculateBMI() {
      const height = parseFloat(document.getElementById('height').value) * (document.getElementById('height-unit').value === 'in' ? 2.54 : 1);
      const weight = parseFloat(document.getElementById('weight').value) * (document.getElementById('weight-unit').value === 'lbs' ? 0.453592 : 1);

      if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid height and weight.');
        return;
      }

      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      document.getElementById('result').textContent = bmi;
    }
  });
});