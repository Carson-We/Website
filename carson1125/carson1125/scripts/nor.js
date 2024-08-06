window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

function goToHomePage() {
    window.location.href = "index.html";
}

function goToCR() {
    window.location.href = "li.html";
}

function goToVE() {
    window.location.href = "ve.html";
}

function goToHomePagezh() {
    window.location.href = "index_zh.html";
}

function goToCRzh() {
    window.location.href = "li_zh.html";
}

function goToVEzh() {
    window.location.href = "ve_zh.html";
}

function goToHomePagekr() {
    window.location.href = "index_kr.html";
}

function goToCRkr() {
    window.location.href = "li_kr.html";
}

function goToVEkr() {
    window.location.href = "ve_kr.html";
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

  var initSubject = 'Initial Subject';
        var initBody = 'Initial Body';

        function submitHandler() {
            var to = "carson.developer1125@gmail.com";
            var name = document.getElementById('nameText').value;
            var email = document.getElementById('emailText').value;
            var tel = document.getElementById('telText').value;
            var subject = document.getElementById('subText').value;
            var body = document.getElementById('bodyText').value + '%0A%0A%0A';
            body += "From: " + name + '%0A';
            body += "Email: " + email + '%0A';
            body += "Tel: " + tel;

            var mailTo = document.getElementById('mailTo');
            mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
            mailTo.click();
        }

        function init() {
            document.getElementById('subText').value = initSubject;
            document.getElementById('bodyText').value = initBody;
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