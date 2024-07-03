window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

function goToHomePage() {
    window.location.href = "index.html";
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