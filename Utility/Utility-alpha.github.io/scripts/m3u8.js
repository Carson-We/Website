document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var m3u8Url = document.getElementById('m3u8-url').value;
  
    convertM3U8ToMP4(m3u8Url);
  });
  
  function convertM3U8ToMP4(m3u8Url) {
    var a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
  
    fetch('/convert?m3u8Url=' + encodeURIComponent(m3u8Url))
      .then(response => response.blob())
      .then(blob => {
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'output.mp4';
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('An error occurred during conversion:', error);
        alert('An error occurred during conversion. Please try again.');
      });
  }