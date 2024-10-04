document.addEventListener("DOMContentLoaded", function () {
    // Circle animation code
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

    // Typing animation code
    const sentences = [
        "Vfx Compositor.",
        "Web Developer.",
        "Python Nuke TD.",
        "UI/UX Designer."
    ];

    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById('typing');

    function type() {
        if (charIndex < sentences[index].length) {
            typingElement.textContent += sentences[index][charIndex];
            charIndex++;
            setTimeout(type, 100); // Typing speed
        } else {
            setTimeout(deleteText, 1000); // Delay before deleting
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typingElement.textContent = typingElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteText, 50); // Deleting speed
        } else {
            index++;
            if (index >= sentences.length) {
                index = 0; // Reset to the first sentence when all are done
            }
            setTimeout(() => {
                typingElement.textContent = "I'm a "; // Reset to constant part
                charIndex = 0;
                setTimeout(type, 500); // Delay before typing next sentence
            }, 500);
        }
    }

    // Start the typing animation
    setTimeout(type, 500);
});