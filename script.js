/* =========================================================
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= TYPING ANIMATION ================= */

const typingElement =
    document.getElementById("typing");

const words = [

    "AWS infrastructure.",
    "CI/CD pipelines.",
    "Docker containers.",
    "Kubernetes platforms.",
    "cloud automation.",
    "DevOps solutions."

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 40 : 75
    );

}

typeEffect();


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle(
            "active"
        );

    }
);


document.querySelectorAll(
    "nav a"
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    }
);


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        observer.observe(element);

    }
);


/* ================= COUNTERS ================= */

const counters =
    document.querySelectorAll(
        ".stat-number[data-value]"
    );


function animateCounter(element) {

    const target =
        parseFloat(
            element.dataset.value
        );

    const isDecimal =
        target % 1 !== 0;

    let current = 0;

    const duration = 1300;

    const start =
        performance.now();


    function update(time) {

        const progress =
            Math.min(
                (time - start)
                / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        current =
            target * eased;


        element.textContent =
            isDecimal
            ? current.toFixed(2)
            : Math.floor(current);


        if (progress < 1) {

            requestAnimationFrame(
                update
            );

        }

    }


    requestAnimationFrame(
        update
    );

}


const counterObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .7
        }
    );


counters.forEach(
    function (counter) {

        counterObserver.observe(
            counter
        );

    }
);


/* ================= PARTICLES ================= */

const particleContainer =
    document.querySelector(
        ".particles"
    );


if (particleContainer) {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.style.position =
            "absolute";

        particle.style.width =
            Math.random() * 3 + 1
            + "px";

        particle.style.height =
            particle.style.width;

        particle.style.background =
            "rgba(56,189,248,.5)";

        particle.style.borderRadius =
            "50%";

        particle.style.left =
            Math.random() * 100
            + "%";

        particle.style.top =
            Math.random() * 100
            + "%";

        particle.style.animation =
            `particleFloat ${
                5 + Math.random() * 10
            }s infinite ease-in-out`;

        particle.style.animationDelay =
            -Math.random() * 10
            + "s";


        particleContainer.appendChild(
            particle
        );

    }

}


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop;

                if (
                    window.scrollY >=
                    sectionTop - 200
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* ================= PARTICLE ANIMATION ================= */

const style =
    document.createElement(
        "style"
    );

style.innerHTML = `

@keyframes particleFloat {

    0%, 100% {

        transform:
            translate(0, 0);

        opacity: .2;

    }

    50% {

        transform:
            translate(
                30px,
                -50px
            );

        opacity: .8;

    }

}

nav a.active {

    color: #38bdf8;

}

`;

document.head.appendChild(style);