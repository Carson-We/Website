window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

function goToHomePage() {
    window.location.href = "index.html";
}

function goToCR() {
    window.location.href = "https://carson-we.github.io/Website/carson1125/carson1125/li.html";
}

function goToVE() {
    window.location.href = "https://carson-we.github.io/Website/carson1125/carson1125/ve.html";
}

function goToHomePagezh() {
    window.location.href = "index_zh.html";
}

function goToCRzh() {
    window.location.href = "https://carson-we.github.io/Website/carson1125/carson1125/li_zh.html";
}

function goToVEzh() {
    window.location.href = "https://carson-we.github.io/Website/carson1125/carson1125/ve_zh.html";
}

function goToHomePagekr() {
    window.location.href = "index_kr.html";
}

function goToCRkr() {
    window.location.href = "https://carson-we.github.io/Website/carson1125/carson1125/li_kr.html";
}

function goToVEkr() {
    window.location.href = "https://carson-we.github.io/Website/carson1125/carson1125/ve_kr.html";
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