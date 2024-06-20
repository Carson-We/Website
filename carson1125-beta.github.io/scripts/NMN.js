const targetDate = new Date("2024-5-01T00:00:00");

        function updateCountdown() {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;

            if (timeDifference <= 0) {
                document.getElementById("countdown").textContent = "Opening time has passed";
                window.location.href = "index.html";
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                document.getElementById("countdown").textContent = `Countdown: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);