document.addEventListener("DOMContentLoaded", function () {
    const typingText = "Ishan Sharma";  // Change this to your name
    const typingSpeed = 150;  // Speed of typing (in milliseconds)
    
    let i = 0;
    function typeEffect() {
        if (i < typingText.length) {
            document.querySelector(".typing").textContent += typingText[i];
            i++;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});

document.addEventListener("scroll", function () {
    const profileImg = document.querySelector(".profile-img");
    if (profileImg) {
        let scrollY = window.scrollY;
        profileImg.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
});
