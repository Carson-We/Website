var dateTimeElement = document.getElementById('current-date');
var now = new Date();
var date = now.toLocaleDateString();
var time = now.toLocaleTimeString();
var dateTime = date + ' ' + time;
dateTimeElement.textContent = dateTime;