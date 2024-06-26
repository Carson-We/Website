var disableCode = true;

if (!disableCode) {
  var currentTime = new Date();

  var startTime = new Date(currentTime.getFullYear(), 4, 31, 0, 0, 0);
  var endTime = new Date(currentTime.getFullYear(), 4, 31, 23, 59, 59); 

  if (currentTime >= startTime && currentTime <= endTime) {
    document.documentElement.style.filter = "grayscale(100%)";
    document.documentElement.style.webkitFilter = "grayscale(100%)"; 
    document.body.style.backgroundColor = "black";
  }
}