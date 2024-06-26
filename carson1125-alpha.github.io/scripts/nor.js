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

function openPopup(popupId) {
    var popupOverlay = document.getElementById('popupOverlay' + popupId);
    var popup = document.getElementById('popup' + popupId);
  
    popupOverlay.style.display = 'flex';
  
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var popupWidth = popup.offsetWidth;
    var leftPosition = (screenWidth - popupWidth) / 2;
    popup.style.left = leftPosition + 'px';
}

function closePopup(popupId) {
    document.getElementById('popupOverlay' + popupId).style.display = 'none';
}