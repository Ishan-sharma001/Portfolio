document.addEventListener("DOMContentLoaded", function () {
    const aboutContent = document.querySelector(".about-content");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContent.style.opacity = "1";
                aboutContent.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutContent);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutHeading = document.querySelector(".typing-text");
    const typingText = "About Me";  // Text to type
    const typingSpeed = 100;  // Speed of typing in milliseconds
    const highlightColor = "#6a11cb"; // Highlight color

    let i = 0;
    function typeEffect() {
        if (i < typingText.length) {
            aboutHeading.innerHTML += `<span style="color:${highlightColor}">${typingText[i]}</span>`;
            i++;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});
