var websiteUrls = [
    { url: "http://carson1125.hk", label: "website-status" },
    { url: "http://carson1125.hk/kristy-webui_kr.html", label: "kristy-webui" },
    { url: "http://carson1125.hk/ana-webui_kr.html", label: "ana-webui" },
    { url: "http://carson1125.hk/fc-webui_kr.html", label: "fc-webui" },
    { url: "http://carson1125.hk/ic-webui_kr.html", label: "ic-webui" },
    { url: "https://carson-we.github.io/carson1125-beta.github.io/index_kr.html", label: "github-pages" }
];

       function checkWebsiteStatus() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", websiteUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    updateWebsiteStatus("√ 정상", "#green");
                } else {
                    updateWebsiteStatus("× 오프라인", "#red");
                }
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