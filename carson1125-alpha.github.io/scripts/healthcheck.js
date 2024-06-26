var websiteUrls = [
    { url: "http://carson1125.hk", label: "website-status" },
    { url: "http://carson1125.hk/kristy-webui.html", label: "kristy-webui" },
    { url: "http://carson1125.hk/ana-webui.html", label: "ana-webui" },
    { url: "http://carson1125.hk/fc-webui.html", label: "fc-webui" },
    { url: "http://carson1125.hk/ic-webui.html", label: "ic-webui" },
    { url: "https://carson-we.github.io/carson1125-beta.github.io/index.html", label: "github-pages" }
];

function checkWebsiteStatus(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                updateWebsiteStatus(url, "√ Normal", "green");
            } else {
                updateWebsiteStatus(url, "× Offline", "red");
            }
        } else {
            updateWebsiteStatus(url, "⌛ Loading", "orange");
        }
    };
    xhr.send();
}

function updateWebsiteStatus(urlObj, status, color) {
    var statusElement = document.getElementById(urlObj.label);
    if (statusElement) {
        statusElement.textContent = status;
        statusElement.style.color = color;
    }
}

window.addEventListener('load', function () {
    for (var i = 0; i < websiteUrls.length; i++) {
        checkWebsiteStatus(websiteUrls[i]);
    }
});