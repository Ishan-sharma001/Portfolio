document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    // Filtering Function
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Update active button
            document.querySelector(".filter-btn.active").classList.remove("active");
            button.classList.add("active");

            // Show/Hide projects based on filter
            projects.forEach(project => {
                const category = project.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

    // Scroll Animation Function
    function animateProjects() {
        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (projectTop < windowHeight - 50) {
                project.classList.add("show");
            }
        });
    }

    // Run animation on scroll
    window.addEventListener("scroll", animateProjects);
    animateProjects();  // Run once on page load
});
