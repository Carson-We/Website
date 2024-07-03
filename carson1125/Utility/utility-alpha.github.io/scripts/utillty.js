function calculatePi() {
      var decimalPlaces = document.getElementById("decimal-places").value;
      var iterations = Math.pow(10, decimalPlaces);

      var pi = 0;
      var sign = 1;
      var denominator = 1;

      for (var i = 0; i < iterations; i++) {
        pi += sign * (4 / denominator);
        sign = -sign;
        denominator += 2;
      }

      document.getElementById("result").innerHTML = "The approximate value of π is: " + pi.toFixed(decimalPlaces);
    }