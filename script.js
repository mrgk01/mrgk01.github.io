document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeInText = document.querySelector(".fade-in");
    const typingEffect = document.querySelector(".typing-effect");
    const text = "Creative Web Developer & Designer";
    let index = 0;

    // Typing function
    function typeText() {
        if (index < text.length) {
            typingEffect.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here
        }
    }

    // Start typing effect AFTER fade-in animation ends
    setTimeout(() => {
        typeText();
    }, 1000); // 1000ms delay (adjust to match fade-in duration)
});
