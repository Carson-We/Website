// Nor
document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  function goToHomePage() {
    window.location.href = "index.html";
  }

  function goToCR() {
    window.location.href = "https://github.com/Carson-We/Documentation/blob/main/Website/carson1125/carson1125/Docs/li.md";
  }

  function goToVE() {
    window.location.href = "https://carson-we.github.io/Documentation/Website/carson1125/carson1125/Docs/ve.md";
  }

  const updateVersions = () => {
    document.querySelectorAll(".version").forEach(element => {
      element.textContent = "v1.1.7.0(061)(1170_061-160824r)";
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

  const calculateAge = birthDate => {
    const ageDate = new Date(Date.now() - birthDate.getTime());
    return Math.abs(ageDate.getUTCFullYear() - 1970) + ageDate.getMonth() / 12 + ageDate.getDate() / 365;
  };

  function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }

    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    document.getElementById(tabName).getElementsByClassName("tab-content")[0].classList.add("active");
  }

  updateVersions();
  toggleDropdown();

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tabName = this.dataset.tab;
      openTab(tabName);
    });
  });

  document.getElementById("tab1").style.display = "block";
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

        function checkPasswordStrength(password) {
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

            if (!password.match(passwordRegex)) {
                passwordMeter.value = 1; 
                passwordMeter.low = 0;
                passwordMeter.high = 1;
                passwordMeter.optimum = 1;
                passwordMeter.style.backgroundColor = 'red';
            } else if (password.length < 12) {
                passwordMeter.value = 2; 
                passwordMeter.low = 1;
                passwordMeter.high = 3;
                passwordMeter.optimum = 2;
                passwordMeter.style.backgroundColor = 'orange';
            } else if (/\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[$@$!%*?&]/.test(password)) {
                passwordMeter.value = 3; 
                passwordMeter.low = 2;
                passwordMeter.high = 4;
                passwordMeter.optimum = 3;
                passwordMeter.style.backgroundColor = 'yellow';
            } else {
                passwordMeter.value = 4;
                passwordMeter.low = 3;
                passwordMeter.high = 4;
                passwordMeter.optimum = 4;
                passwordMeter.style.backgroundColor = 'green';
            }
        }

        function checkPasswordMatch() {
          const password = passwordField.value;
          const confirmPassword = confirmPasswordField.value;
          
          if (password === confirmPassword) {
            passwordMatchMessage.innerText = 'Passwords match!';
            passwordMatchMessage.style.color = 'green';
          } else {
            passwordMatchMessage.innerText = 'Passwords do not match.';
            passwordMatchMessage.style.color = 'red';
          }
        }

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'nor.php', true);
        xhr.onload = function() {
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

    const savedUsername = sessionStorage.getItem('username');
    const savedPassword = sessionStorage.getItem('password');

    if (savedUsername) {
        document.getElementById('signin-Username').value = savedUsername;
    }

    if (savedPassword) {
        document.getElementById('signin-Password').value = savedPassword;
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
        login();
    });
});

// Carson Utility
document.addEventListener('DOMContentLoaded', function () {
  const optionsUTC = {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC'
  };

  const optionsLocal = {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/New_York'
  };

  const displayTime = (elementId, options) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = new Date().toLocaleString('en-US', options);
    } else {
      console.error(`Element with ID ${elementId} not found.`);
    }
  };

  const updateTime = (id) => {
    const startTime = Date.now();
    const timerElement = document.getElementById(id);

    if (timerElement) {
      const update = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const milliseconds = elapsedTime % 1000;
        timerElement.textContent = `${pad(minutes)}:${pad(seconds)}.${padMilliseconds(milliseconds)}`;
        requestAnimationFrame(update);
      };

      update();
    } else {
      console.error(`Timer element with ID ${id} not found.`);
    }
  };

  const pad = (value) => value.toString().padStart(2, '0');

  const padMilliseconds = (value) => value.toString().padStart(3, '0');

  const startTimer = (id) => {
    const startTime = Date.now();
    const intervalId = setInterval(() => updateTime(id), 1);
    const startBtn = document.getElementById(`start-btn-${id}`);
    const stopBtn = document.getElementById(`stop-btn-${id}`);

    if (startBtn) {
      startBtn.disabled = true;
    }
    if (stopBtn) {
      stopBtn.disabled = false;
    }
  };

  const stopTimer = (id) => {
    clearInterval(intervalIds[id]);
    const stopBtn = document.getElementById(`stop-btn-${id}`);
    const startBtn = document.getElementById(`start-btn-${id}`);

    if (stopBtn) {
      stopBtn.disabled = true;
    }
    if (startBtn) {
      startBtn.disabled = false;
    }
  };

  for (let i = 1; i <= 4; i++) {
    const startBtn = document.getElementById(`start-btn-${i}`);
    const stopBtn = document.getElementById(`stop-btn-${i}`);

    if (startBtn && stopBtn) {
      startBtn.addEventListener('click', () => startTimer(`timer-display${i}`));
      stopBtn.addEventListener('click', () => stopTimer(`timer-display${i}`));
    }
  }

  setInterval(() => displayTime('utc-time', optionsUTC), 1000);
  setInterval(() => displayTime('local-time', optionsLocal), 1000);

  function generateRandomCode() {
    const length = parseInt(document.getElementById("length").value);
    const characters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+={}[]|:;.,?/~`";
    let code = "";

    const startTime = new Date();

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    const endTime = new Date();
    const elapsedTime = endTime - startTime;

    document.getElementById("grcresult").innerHTML = code;

    const timeString = `${elapsedTime} millisecond`;
    document.getElementById("time").innerHTML = timeString;
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
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    const heightUnit = document.getElementById('height-unit').value;
    const weightUnit = document.getElementById('weight-unit').value;

    if (height === '' || weight === '') {
      alert('Please enter both height and weight.');
      return;
    }

    if (heightUnit === 'in') {
      height *= 2.54;
    }

    if (weightUnit === 'lbs') {
      weight *= 0.453592;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    document.getElementById('result').textContent = bmi;
  }
});
