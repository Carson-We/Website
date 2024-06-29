window.addEventListener('DOMContentLoaded', function() {
    positionIframe();
  });
  
  function positionIframe() {
    var iframe = document.getElementById('bottom-iframe');
    var footer = document.querySelector('footer');
    var footerHeight = footer.offsetHeight;
  
    iframe.style.marginTop = footerHeight + 'px';
  }