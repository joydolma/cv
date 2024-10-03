document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        const percentage = circle.getAttribute("data-percentage");
        const fill = circle.querySelector(".fill");
        const percentageText = circle.querySelector(".percentage");

        // Calculate the degree based on percentage
        const degrees = (parseInt(percentage) / 100) * 360;

        // Fill the circle and update the percentage text
        fill.style.transform = `rotate(${degrees}deg)`;
        percentageText.textContent = percentage;

        // Animation start from 0
        let start = 0;
        const animate = setInterval(() => {
            if (start >= parseInt(percentage)) {
                clearInterval(animate);
            } else {
                start++;
                percentageText.textContent = `${start}%`;
            }
        }, 10); // Adjust timing for speed of animation
    });
});
