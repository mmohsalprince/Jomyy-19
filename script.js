// Open the second page when the first button is clicked

const surpriseButton = document.querySelector(".surprise-button");

if (surpriseButton) {
    surpriseButton.addEventListener("click", function () {
        window.location.href = "ready.html";
    });
}


// Handle the choices on the ready page


const readyButtons = document.querySelectorAll(".ready-button");
const readyResponse = document.querySelector(".ready-response");
const readyCard = document.querySelector(".ready-card");

readyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Prevent choosing twice
        readyButtons.forEach(function (otherButton) {
            otherButton.disabled = true;
        });

        // Show a different response for each choice
        if (button.dataset.choice === "yes") {
            readyResponse.textContent =
                "كنت عارف إنك هتقولي أيووااا! 😂💗";
        } else {
            readyResponse.textContent =
                "يلااااا بينااا، المفاجأة مستنياكي! 🌷";
        }

        // Start the transition
        setTimeout(function () {

            if (readyCard) {
                readyCard.classList.add("leaving");
            }

            // Open the next page
            setTimeout(function () {
                window.location.href = "birthday.html";
            }, 700);

        }, 1000);

    });

});

// Happy Birthday page decorations and navigation

const birthdayParticles = document.querySelector(".birthday-particles");

if (birthdayParticles) {
    const symbols = ["♡", "✿", "♥", "✧"];

    for (let i = 0; i < 18; i++) {
        const particle = document.createElement("span");

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left = Math.random() * 100 + "%";
        particle.style.fontSize =
            (12 + Math.random() * 16) + "px";

        particle.style.animationDuration =
            (8 + Math.random() * 9) + "s";

        particle.style.animationDelay =
            (-Math.random() * 15) + "s";

        birthdayParticles.appendChild(particle);
    }
}


// Open the gifts page

const birthdayContinueButton = document.querySelector(
    ".birthday-continue-button"
);

if (birthdayContinueButton) {
    birthdayContinueButton.addEventListener("click", function () {
        window.location.href = "gifts.html";
    });
}

// ======================================
// HAPPY BIRTHDAY REVEAL SEQUENCE
// ======================================

const birthdayPage = document.querySelector(".birthday-reveal-page");

if (birthdayPage) {
    const loader = document.querySelector("#birthdayLoader");
    const celebration = document.querySelector(".birthday-celebration");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Keep the birthday message hidden at first.
    birthdayPage.classList.add("birthday-loading");

    // Create one confetti piece.
    function createConfetti(side) {
        const piece = document.createElement("span");

        const colors = [
            "#c77d91",
            "#e8a6bb",
            "#f1d49b",
            "#ffffff",
            "#d8a1b5",
            "#f2c9d6"
        ];

        piece.className = "confetti-piece";

        if (Math.random() < 0.3) {
            piece.classList.add("circle");
        } else if (Math.random() < 0.5) {
            piece.classList.add("ribbon");
        }

        if (side === "left" || side === "right") {
            piece.classList.add(
                side === "left" ? "from-left" : "from-right"
            );

            piece.style.top = (15 + Math.random() * 20) + "%";
        } else {
            piece.style.left = Math.random() * 100 + "%";
        }

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay = (Math.random() * 0.25) + "s";

        celebration.appendChild(piece);

        piece.addEventListener("animationend", function () {
            piece.remove();
        }, { once: true });
    }

    // Simulate a party popper burst.
    function launchPartyPoppers() {
        if (reducedMotion) return;

        for (let i = 0; i < 55; i++) {
            createConfetti("top");
        }

        for (let i = 0; i < 22; i++) {
            createConfetti("left");
            createConfetti("right");
        }
    }

    // Create floating balloons.
    function releaseBalloons() {
        if (reducedMotion) return;

        const balloonColors = ["pink", "rose", "white", "gold"];

        for (let i = 0; i < 9; i++) {
            const balloon = document.createElement("span");

            balloon.className =
                "birthday-balloon " +
                balloonColors[i % balloonColors.length];

            balloon.style.left = (4 + Math.random() * 88) + "%";

            balloon.style.animationDelay = (Math.random() * 2) + "s";

            balloon.style.animationDuration =
                (6 + Math.random() * 3) + "s";

            celebration.appendChild(balloon);

            balloon.addEventListener("animationend", function () {
                balloon.remove();
            }, { once: true });
        }
    }

    // Start the celebration after the loading screen.
    window.setTimeout(function () {
        if (loader) {
            loader.classList.add("loader-finished");
        }

        birthdayPage.classList.remove("birthday-loading");
        birthdayPage.classList.add("birthday-started");

        launchPartyPoppers();

        // Let the confetti burst happen before releasing balloons.
        window.setTimeout(function () {
            releaseBalloons();
        }, 250);

        // Remove the loader after its fade-out.
        window.setTimeout(function () {
            if (loader) loader.remove();
        }, 800);

    }, reducedMotion ? 800 : 2600);
}

// ======================================
// FIRST GIFT: BIRTHDAY CAKE
// ======================================

// ======================================
// FIRST GIFT: BIRTHDAY CAKE
// ======================================

const firstGift = document.querySelector("#firstGift");
const cakeSurprise = document.querySelector("#cakeSurprise");
const cakeCandle = document.querySelector("#cakeCandle");
const wishMessage = document.querySelector(".wish-message");
const wishResult = document.querySelector("#wishResult");

// Open the first gift box
if (firstGift && cakeSurprise) {
    firstGift.addEventListener("click", function () {

        // Prevent opening the same gift more than once
        if (firstGift.hidden) return;

        // Show the cake
        cakeSurprise.hidden = false;

        // Animate the gift box
        firstGift.classList.add("opened");

        // Scroll to the cake
        cakeSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Hide the first gift box
        window.setTimeout(function () {
            firstGift.hidden = true;
        }, 550);

    });
}


// Extinguish the candle
if (cakeCandle && wishMessage && wishResult) {

    cakeCandle.setAttribute("role", "button");
    cakeCandle.setAttribute("tabindex", "0");
    cakeCandle.setAttribute("aria-label", "اطفي الشمعة");

    function extinguishCandle() {

        // Do nothing if the candle is already extinguished
        if (cakeCandle.classList.contains("extinguished")) {
            return;
        }

        // Extinguish the flame and show the smoke
        cakeCandle.classList.add("extinguished");

        // Change the wish message
        wishMessage.textContent =
            "يارب تكوني اتمنيتي حاجة شبه اللي أنا اتمنيتها في عيد ميلادي 👀";

        // Show the birthday message
       

        cakeCandle.setAttribute("aria-label", "الشمعة انطفت");
        cakeCandle.setAttribute("aria-disabled", "true");
    }

    cakeCandle.addEventListener("click", extinguishCandle);

    // Allow keyboard interaction
    cakeCandle.addEventListener("keydown", function (event) {

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            extinguishCandle();
        }

    });
}


// ======================================
// SECOND GIFT: 19 LILY BOUQUET
// ======================================

const secondGift = document.querySelector("#secondGift");
const lilySurprise = document.querySelector("#lilySurprise");
const lilyFlowers = document.querySelector(".lily-flowers");
const thirdGift = document.querySelector("#thirdGift");
const missingPhotoSurprise = document.querySelector("#missingPhotoSurprise");
const fourthGift = document.querySelector("#fourthGift");
const letterSurprise = document.querySelector("#letterSurprise");


// Create the 19 lilies
if (lilyFlowers && lilyFlowers.children.length === 0) {

    for (let i = 0; i < 19; i++) {

        const flower = document.createElement("div");
        flower.classList.add("lily-flower");
        flower.setAttribute("aria-hidden", "true");

        // Add six petals
        for (let j = 0; j < 6; j++) {
            const petal = document.createElement("span");
            petal.classList.add("lily-petal");
            flower.appendChild(petal);
        }

        // Add the center
        const center = document.createElement("span");
        center.classList.add("lily-center");
        flower.appendChild(center);

        lilyFlowers.appendChild(flower);
    }
    console.log("Number of lilies:", lilyFlowers.children.length);
}


// Open the second gift
// Open the second gift
if (secondGift && lilySurprise) {

    secondGift.addEventListener("click", function () {

        // Hide the previous surprise
        if (cakeSurprise) {
            cakeSurprise.hidden = true;
        }

        // Show the lily bouquet
        lilySurprise.hidden = false;

        // Animate and hide the second gift box
        secondGift.classList.add("opened");

        window.setTimeout(function () {
            secondGift.hidden = true;
        }, 550);

        // Scroll to the bouquet
        lilySurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });
}

// Open the third gift
if (thirdGift && missingPhotoSurprise) {

    thirdGift.addEventListener("click", function () {

        // Hide previous surprises
        if (cakeSurprise) {
            cakeSurprise.hidden = true;
        }

        if (lilySurprise) {
            lilySurprise.hidden = true;
        }

        // Show the missing photo
        missingPhotoSurprise.hidden = false;

        // Animate and hide the third gift box
        thirdGift.classList.add("opened");

        window.setTimeout(function () {
            thirdGift.hidden = true;
        }, 550);

        // Scroll to the missing photo
        missingPhotoSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}

// Open the fourth gift
if (fourthGift && letterSurprise) {

    fourthGift.addEventListener("click", function () {

        // Hide previous surprises
        if (cakeSurprise) {
            cakeSurprise.hidden = true;
        }

        if (lilySurprise) {
            lilySurprise.hidden = true;
        }

        if (missingPhotoSurprise) {
            missingPhotoSurprise.hidden = true;
        }

        // Show the letter
        letterSurprise.hidden = false;

        // Show the final page button
        const finalPageButton = document.querySelector("#finalPageButton");

        if (finalPageButton) {
            finalPageButton.hidden = false;
        }

        // Animate and hide the fourth gift box
        fourthGift.classList.add("opened");

        window.setTimeout(function () {
            fourthGift.hidden = true;
        }, 550);

        // Scroll to the letter
        letterSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}

// Open the final page
const finalPageButton = document.querySelector("#finalPageButton");

if (finalPageButton) {
    finalPageButton.addEventListener("click", function () {
        window.location.href = "final.html";
    });
}
// Final Page: 19 Glowing Stars
const starsContainer = document.querySelector("#starsContainer");

if (starsContainer) {
    for (let i = 0; i < 19; i++) {
        const star = document.createElement("div");

        star.classList.add("birthday-star");

        star.style.left = `${10 + Math.random() * 80}%`;
        star.style.top = `${10 + Math.random() * 75}%`;

        star.style.animationDelay = `${i * 0.35}s`;

        starsContainer.appendChild(star);
    }
}