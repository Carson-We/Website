document.addEventListener('DOMContentLoaded', function () {
  var versionElements = document.getElementsByClassName("version");
  for (var i = 0; i < versionElements.length; i++) {
    versionElements[i].textContent = "v1.1.6.10(029)(11610_029-140824r)";
  }

  var crElements = document.getElementsByClassName("cr");
  for (var i = 0; i < crElements.length; i++) {
    crElements[i].textContent = "Copyright © 2023-2024 Carson Wu. All rights reserved.";
  }

  var crZhElements = document.getElementsByClassName("crzh");
  for (var i = 0; i < crZhElements.length; i++) {
    crZhElements[i].textContent = "Copyright © 2023-2024 Carson Wu 保留一切權利。";
  }
});


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

function goToHomePage() {
    window.location.href = "index.html";
}

function goToCUHomePage() {
  window.location.href = "ut-index.html";
}

function goToCAHomePage() {
  window.location.href = "ca-index.html";
}

function goToCR() {
  window.location.href = "https://github.com/Carson-We/Documentation/blob/main/Website/carson1125/carson1125/Docs/li.md";
}

function goToVE() {
  window.location.href = "https://github.com/Carson-We/Documentation/blob/main/Website/carson1125/carson1125/Docs/ve.md";
}

function goToHomePagezh() {
    window.location.href = "index_zh.html";
}

function goToCRzh() {
  window.location.href = "https://github.com/Carson-We/Documentation/blob/main/Website/carson1125/carson1125/Docs/li_zh.md";
}

function goToVEzh() {
  window.location.href = "https://github.com/Carson-We/Documentation/blob/main/Website/carson1125/carson1125/Docs/ve_zh.md";
}

function goToCUHomePage() {
  window.location.href = "ut-indexe_zh.html";
}


window.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    var isHovered = false;

    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
        isHovered = false;
    });
    
    window.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target)) {
            dropdownContent.classList.remove('active');
            isHovered = false;
        }
    });
});

function toggleAdditionalInfo(id) {
    var additionalInfo = document.getElementById(id);
    var btn = additionalInfo.previousElementSibling;

    if (additionalInfo.style.height === '0px') {
      additionalInfo.style.height = additionalInfo.scrollHeight + 'px';
      btn.innerText = 'Hide Details';
    } else {
      additionalInfo.style.height = '0px';
      btn.innerText = 'Learn More';
    }
  }
  function toggleAdditionalInfozh(id) {
    var additionalInfo = document.getElementById(id);
    var btn = additionalInfo.previousElementSibling;

    if (additionalInfo.style.height === '0px') {
      additionalInfo.style.height = additionalInfo.scrollHeight + 'px';
      btn.innerText = '隱藏細節';
    } else {
      additionalInfo.style.height = '0px';
      btn.innerText = '了解更多';
    }
  }
  function toggleAdditionalInfokr(id) {
    var additionalInfo = document.getElementById(id);
    var btn = additionalInfo.previousElementSibling;

    if (additionalInfo.style.height === '0px') {
      additionalInfo.style.height = additionalInfo.scrollHeight + 'px';
      btn.innerText = '세부정보 숨기기';
    } else {
      additionalInfo.style.height = '0px';
      btn.innerText = '자세히 알아보기';
    }
  }

document.addEventListener('DOMContentLoaded', function () {
  const birthDate = new Date(2010, 10, 25);

  const ageDate = new Date(Date.now() - birthDate.getTime());
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  const preciseAge = age + ageDate.getMonth() / 12 + ageDate.getDate() / 365;

  const integerAge = Math.floor(preciseAge);
  const detailedAge = preciseAge;

  const ageElement = document.getElementById('age');
  ageElement.textContent = `${integerAge} (${detailedAge.toFixed(3)})`;
});

console.log(userDetails);

document.getElementById("registeredUsersCount").textContent = Object.keys(userDetails).length;

const userListElement = document.getElementById("userList");

for (const username in userDetails) {
  const user = userDetails[username];
  const listItem = document.createElement("li");
  listItem.textContent = `Username: ${username}, UserID: ${user.userId}, Email: ${user.email.replace("carson1125@carson.com", "******")}`;
  userListElement.appendChild(listItem);
}

let userCredentials = {};
let userDetails = {};

async function signUp() {
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  function saveUserData(username, userId, name, email) {
    userDetails[username] = { userId, name, email };
  }

  function validateUsernameAndPasswordForRegistration(username, password) {
    if (username === "" || password === "") {
      console.log("Username and password cannot be empty.");
      return false;
    }

    if (username.length < 3) {
      console.log("Username must be at least 3 characters long.");
      return false;
    }

    if (password.length < 6) {
      console.log("Password length must be at least 6 characters.");
      return false;
    }

    if (!/\d/.test(password)) {
      console.log("Password must contain at least one number.");
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      console.log("Password must contain at least one uppercase letter.");
      return false;
    }

    if (!/[a-z]/.test(password)) {
      console.log("Password must contain at least one lowercase letter.");
      return false;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      console.log("Password must contain at least one special character.");
      return false;
    }

    return true;
  }

  const validation = validateUsernameAndPasswordForRegistration(username, password);

  if (validation.isValid) {
    const userId = generateUserId();
    saveUserData(username, userId, name, email);
    await registerUser(username, userId); 
    console.log("User registration successful.");
  } else {
    console.log("User registration failed: " + validation.message);
  }

  async function checkUserExistence(username, userId, userData) {
    const userDataArray = JSON.parse(userData);

    const existingUser = userDataArray.find(user => user.username === username || user.userId === userId);

    if (existingUser) {
      if (existingUser.username === username) {
        console.log(`User registration failed: Username '${username}' already exists.`);
      } else {
        console.log(`User registration failed: User ID '${userId}' already exists.`);
      }
      return false;
    }

    return true;
  }

  async function registerUser(username, userId) {
    const data = `${username}_${userId}`;
    const signature = await generateSignature(data);
    saveUserDataLocally(username, userId, signature);
  }

  async function generateSignature(data) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedData);
    const signature = arrayBufferToBase64(hashBuffer);
    return signature;
  }

  function saveUserDataLocally(username, userId, signature) {
    const userData = { username: username, userId: userId, signature: signature };
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  const userData = { username: username, userId: userId };
  const newData = JSON.stringify(userData) + '\n';

  fetch('https://api.github.com/Carson-We/Website/blob/main/carson1125/carson1125/userdata.json', {
    method: 'GET',
    headers: {
      Authorization: `token ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      let existingData = atob(data.content);
      let updatedData = existingData + newData;

      fetch('https://api.github.com/Carson-We/Website/blob/main/carson1125/carson1125/userdata.json', {
        method: 'PUT',
        headers: {
          Authorization: `token ${process.env.ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Append new user data',
          content: btoa(updatedData),
          sha: data.sha
        })
      })
        .then(response => response.json())
        .then(result => {
          console.log('User data appended:', result);
        })
        .catch(error => {
          console.error('Error appending user data:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching existing user data:', error);
    });

  function arrayBufferToBase64(buffer) {
    const binary = Array.from(new Uint8Array(buffer)).map(byte => String.fromCharCode(byte)).join('');
    return btoa(binary);
  }
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const digitalSignature = document.getElementById('digitalSignature').value;

  async function extractAndVerifyUserData() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      console.log("User data not found in local storage.");
      return;
    }

    const { username, userId, signature } = userData;
    const publicKey = userKeyPair.publicKey;

    const data = `${username}_${userId}`;
    const isValid = await verifySignature(data, signature, publicKey);

    if (isValid) {
      console.log("User data is valid.");

      const encryptedPassword = userCredentials[username];
      const decryptedPassword = await decryptPassword(encryptedPassword);
      console.log("Decrypted Password:", decryptedPassword);

      const decryptedData = `${username}_${decryptedPassword}`;
      const isSignatureValid = await verifySignature(decryptedData, signature, publicKey);

      if (isSignatureValid) {
        console.log("Username and digital signature are valid.");
      } else {
        console.log("Username or digital signature has been tampered with.");
      }
    } else {
      console.log("User data has been tampered with.");
    }
  }

  async function decryptPassword(encryptedPassword) {
    const decryptedPassword = await crypto.subtle.decrypt(
      { name: "RSA-OAEP" },
      base64ToArrayBuffer(encryptedPassword)
    );

    return new TextDecoder().decode(decryptedPassword);
  }

  async function verifySignature(data, signature) {
    const isValid = await crypto.subtle.verify(
      { name: "RSA-OAEP" },
      base64ToArrayBuffer(signature),
      new TextEncoder().encode(data)
    );

    return isValid;
  }

  function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  await extractAndVerifyUserData();
}

signUp();

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const digitalSignature = document.getElementById('digitalSignature').value;

  async function extractAndVerifyUserData() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      console.log("User data not found in local storage.");
      return;
    }

    const { username, userId, signature } = userData;
    const publicKey = userKeyPair.publicKey;

    const data = `${username}_${userId}`;
    const isValid = await verifySignature(data, signature, publicKey);

    if (isValid) {
      console.log("User data is valid.");

      const encryptedPassword = userCredentials[username];
      const decryptedPassword = await decryptPassword(encryptedPassword);
      console.log("Decrypted Password:", decryptedPassword);

      const decryptedData = `${username}_${decryptedPassword}`;
      const isSignatureValid = await verifySignature(decryptedData, signature, publicKey);

      if (isSignatureValid) {
        console.log("Username and digital signature are valid.");
      } else {
        console.log("Username or digital signature has been tampered with.");
      }
    } else {
      console.log("User data has been tampered with.");
    }
  }

  async function decryptPassword(encryptedPassword) {
    const decryptedPassword = await crypto.subtle.decrypt(
      { name: "RSA-OAEP" },
      privateKey,
      base64ToArrayBuffer(encryptedPassword)
    );

    return new TextDecoder().decode(decryptedPassword);
  }

  function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  extractAndVerifyUserData();
}