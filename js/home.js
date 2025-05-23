
   const roles = [
        "I’m a Software Engineer",
        "I’m a Full Stack Developer",
        "I’m a Web Designer",
        "I’m a Backend Developer"
    ];

    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenRoles = 2000;

    const spanElement = document.getElementById("typing-text");

    function typeRole() {
        if (charIndex < roles[index].length) {
            spanElement.textContent += roles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(eraseRole, delayBetweenRoles);
        }
    }

    function eraseRole() {
        if (charIndex > 0) {
            spanElement.textContent = roles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseRole, erasingSpeed);
        } else {
            index = (index + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(typeRole, 1000);
    });

