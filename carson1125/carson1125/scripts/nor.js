document.addEventListener('DOMContentLoaded', function () {
  var versionElements = document.getElementsByClassName("version");
  for (var i = 0; i < versionElements.length; i++) {
    versionElements[i].textContent = "v1.1.6.18(038)(11618_038-140824r)";
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

