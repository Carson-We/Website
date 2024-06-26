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

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

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

    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
        btn.innerText = 'Hide Details';
    } else {
        additionalInfo.style.display = 'none';
        btn.innerText = 'Learn More';
    }
}