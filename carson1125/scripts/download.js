function openNewPageAndDownload(event) {
    event.preventDefault();
  
    window.open("download.html", "_blank");
  
    var downloadLink = event.target.href;
    window.location.href = downloadLink;
}

function downloadFile() {
    var url = "Download/FruitClassifier/Dataset.zip"; 
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.responseType = "blob";

    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        var percentComplete = (event.loaded / event.total) * 100;
        document.getElementById("progressBarFill").style.width = percentComplete + "%";
      }
    };

    xhr.onload = function(event) {
      if (xhr.status === 200) {
        document.getElementById("progressBarFill").style.width = "100%";
      }
    };

    xhr.send();
  }

  window.onload = function() {
    downloadFile();
  };