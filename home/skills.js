document.addEventListener("DOMContentLoaded", function () {
    // Animate Progress Bars when scrolling
    const progressBars = document.querySelectorAll(".progress");

    function animateProgressBars() {
        progressBars.forEach((bar) => {
            const finalWidth = bar.getAttribute("data-width"); // Get width from HTML
            bar.style.width = finalWidth; // Animate to full width
        });
    }

    // Check when skills section is visible
    const skillsSection = document.querySelector(".skills");

    function checkScroll() {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            animateProgressBars();
            window.removeEventListener("scroll", checkScroll); // Run only once
        }
    }

    window.addEventListener("scroll", checkScroll);
});
