/* =====================================
   MEHEDI ❤️ SUMAYA
   Premium Apple Love Website
===================================== */


/* =================================
   PAGE LOADER
================================= */

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";

            setTimeout(function(){

                loader.style.display = "none";

            }, 1000);

        }, 1500);

    }

});


/* =================================
   CURSOR GLOW
================================= */

const cursor = document.getElementById("cursorGlow");

if(cursor){

    document.addEventListener("mousemove", function(e){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}


/* =================================
   MEMORY POPUP
================================= */

const memoryPopup = document.getElementById("memoryPopup");
const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryDate = document.getElementById("memoryDate");
const memoryTime = document.getElementById("memoryTime");
const memoryLocation = document.getElementById("memoryLocation");
const memoryDesc = document.getElementById("memoryDesc");
const closeMemory = document.getElementById("closeMemory");


document.querySelectorAll(".timeline-item").forEach(function(item){

    item.addEventListener("click", function(){

        if(memoryImage)
            memoryImage.src = item.dataset.img;

        if(memoryTitle)
            memoryTitle.textContent = item.dataset.title;

        if(memoryDate)
            memoryDate.textContent = "📅 " + item.dataset.date;

        if(memoryTime)
            memoryTime.textContent = "🕒 " + item.dataset.time;

        if(memoryLocation)
            memoryLocation.textContent = "📍 " + item.dataset.location;

        if(memoryDesc)
            memoryDesc.textContent = item.dataset.desc;

        if(memoryPopup)
            memoryPopup.style.display = "flex";

    });

});


if(closeMemory){

    closeMemory.addEventListener("click", function(){

        if(memoryPopup)
            memoryPopup.style.display = "none";

    });

}


if(memoryPopup){

    memoryPopup.addEventListener("click", function(e){

        if(e.target === memoryPopup){

            memoryPopup.style.display = "none";

        }

    });

}


/* =================================
   MUSIC PLAYER
================================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;


if(music && musicBtn){

    musicBtn.addEventListener("click", function(){

        if(isPlaying){

            music.pause();

            musicBtn.innerHTML = "🎵";

            isPlaying = false;

        }else{

            music.play().then(function(){

                musicBtn.innerHTML = "🔊";
                isPlaying = true;

            }).catch(function(error){

                console.log("Music could not play:", error);

            });

        }

    });

}


/* =================================
   CINEMATIC BACKGROUND
================================= */

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

const backgrounds = [

    "images/bg1.JPG",
    "images/bg2.JPG",
    "images/bg3.jpg",
    "images/bg4.jpg"

];

let currentBg = 0;
let activeLayer = 1;


if(bg1 && bg2){

    bg1.style.backgroundImage =
        `url(${backgrounds[0]})`;


    window.addEventListener("scroll", function(){

        const section =
            Math.floor(window.scrollY / window.innerHeight);

        const index =
            Math.min(
                section,
                backgrounds.length - 1
            );

        if(index === currentBg)
            return;

        currentBg = index;


        if(activeLayer === 1){

            bg2.style.backgroundImage =
                `url(${backgrounds[index]})`;

            bg2.style.opacity = "1";
            bg1.style.opacity = "0";

            activeLayer = 2;

        }else{

            bg1.style.backgroundImage =
                `url(${backgrounds[index]})`;

            bg1.style.opacity = "1";
            bg2.style.opacity = "0";

            activeLayer = 1;

        }

    });

}


/* =================================
   GALLERY LIGHTBOX
================================= */

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeLightbox =
    document.getElementById("closeLightbox");


galleryImages.forEach(function(img){

    img.addEventListener("click", function(){

        if(lightbox)
            lightbox.style.display = "flex";

        if(lightboxImg)
            lightboxImg.src = img.src;

    });

});


if(closeLightbox){

    closeLightbox.addEventListener("click", function(){

        if(lightbox)
            lightbox.style.display = "none";

    });

}


if(lightbox){

    lightbox.addEventListener("click", function(e){

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}


/* =================================
   LOVE COUNTER
================================= */

const startDate =
    new Date("2023-07-16T00:00:00");


function updateLoveCounter(){

    const now = new Date();

    const diff = now - startDate;


    const days =
        Math.floor(
            diff / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (diff / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (diff / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (diff / 1000) % 60
        );


    const daysEl =
        document.getElementById("days");

    const hoursEl =
        document.getElementById("hours");

    const minutesEl =
        document.getElementById("minutes");

    const secondsEl =
        document.getElementById("seconds");


    if(daysEl)
        daysEl.textContent = days;

    if(hoursEl)
        hoursEl.textContent = hours;

    if(minutesEl)
        minutesEl.textContent = minutes;

    if(secondsEl)
        secondsEl.textContent = seconds;

}


updateLoveCounter();

setInterval(updateLoveCounter, 1000);


/* =================================
   FLOATING HEARTS
================================= */

const heartsContainer =
    document.querySelector(".hearts-container");


function createHeart(){

    if(!heartsContainer)
        return;


    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.animationDuration =
        (3 + Math.random() * 5) + "s";


    heart.style.fontSize =
        (10 + Math.random() * 25) + "px";


    heartsContainer.appendChild(heart);


    setTimeout(function(){

        heart.remove();

    }, 8000);

}


setInterval(createHeart, 500);


/* =================================
   LOVE LETTER TYPEWRITER
================================= */

const loveLetterText =
    document.getElementById("loveLetterText");

const letterSignature =
    document.querySelector(".letter-signature");

const loveLetterSection =
    document.querySelector(".love-letter-section");


const loveLetterMessage = `My love,

If I could write every feeling I have for you,
I would need a lifetime and still wouldn't find
enough words.

You came into my life and somehow turned ordinary
moments into memories I never want to forget.

From our first call,
our first smile,
our first "I love you",
to our wedding and every moment after it...

I would choose you again.

In every lifetime.
In every version of our story.

You are not just a part of my life.
You are the part that makes it beautiful.

I love you, Sumaya. ❤️`;


let letterStarted = false;


function startLoveLetter(){

    if(letterStarted || !loveLetterText)
        return;


    letterStarted = true;

    let index = 0;


    function typeLetter(){

        if(index < loveLetterMessage.length){

            loveLetterText.textContent +=
                loveLetterMessage.charAt(index);

            index++;

            setTimeout(typeLetter, 35);

        }else{

            if(letterSignature){

                letterSignature.classList.add("show");

            }

        }

    }


    typeLetter();

}


if(loveLetterSection){

    const letterObserver =
        new IntersectionObserver(

            function(entries){

                entries.forEach(function(entry){

                    if(entry.isIntersecting){

                        startLoveLetter();

                        letterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.30
            }

        );


    letterObserver.observe(loveLetterSection);

}


/* =================================
   PROPOSAL
================================= */

const yesBtn =
    document.getElementById("yesBtn");

const foreverBtn =
    document.getElementById("foreverBtn");

const proposalMessage =
    document.getElementById("proposalMessage");

const proposalSection =
    document.querySelector(".proposal-section");


/* =================================
   PROPOSAL SCROLL ANIMATION
================================= */

if(proposalSection){

    const proposalObserver =
        new IntersectionObserver(

            function(entries){

                entries.forEach(function(entry){

                    if(entry.isIntersecting){

                        proposalSection
                            .classList
                            .add("active");

                        proposalObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    proposalObserver.observe(proposalSection);

}


/* =================================
   FIREWORKS CANVAS
================================= */

const fireworksCanvas =
    document.getElementById("fireworksCanvas");

const fireworksCtx =
    fireworksCanvas
    ? fireworksCanvas.getContext("2d")
    : null;


let fireworks = [];


function resizeFireworksCanvas(){

    if(!fireworksCanvas)
        return;


    fireworksCanvas.width =
        window.innerWidth;

    fireworksCanvas.height =
        window.innerHeight;

}


resizeFireworksCanvas();


window.addEventListener(
    "resize",
    resizeFireworksCanvas
);


/* =================================
   CREATE FIREWORK
================================= */

function createFirework(x, y){

    if(!fireworksCanvas)
        return;


    for(let i = 0; i < 80; i++){

        const angle =
            Math.random() * Math.PI * 2;

        const speed =
            Math.random() * 6 + 2;


        fireworks.push({

            x: x,

            y: y,

            vx:
                Math.cos(angle) * speed,

            vy:
                Math.sin(angle) * speed,

            life: 1,

            decay:
                Math.random() * 0.015 + 0.01,

            size:
                Math.random() * 3 + 1

        });

    }

}


/* =================================
   ANIMATE FIREWORKS
================================= */

function animateFireworks(){

    if(!fireworksCtx)
        return;


    fireworksCtx.clearRect(
        0,
        0,
        fireworksCanvas.width,
        fireworksCanvas.height
    );


    fireworks.forEach(function(particle, index){

        particle.x += particle.vx;

        particle.y += particle.vy;

        particle.vy += 0.04;

        particle.life -= particle.decay;


        fireworksCtx.globalAlpha =
            Math.max(particle.life, 0);


        fireworksCtx.beginPath();


        fireworksCtx.arc(

            particle.x,

            particle.y,

            particle.size,

            0,

            Math.PI * 2

        );


        fireworksCtx.fillStyle =
            "#ffffff";


        fireworksCtx.fill();


        if(particle.life <= 0){

            fireworks.splice(index, 1);

        }

    });


    fireworksCtx.globalAlpha = 1;


    requestAnimationFrame(
        animateFireworks
    );

}


animateFireworks();


/* =================================
   LOVE CELEBRATION
================================= */

function celebrateLove(){

    /* CONFETTI */

    if(typeof confetti === "function"){

        confetti({

            particleCount: 200,

            spread: 160,

            startVelocity: 50,

            scalar: 1.2,

            origin: {
                x: 0.5,
                y: 0.55
            }

        });

    }


    /* FIREWORKS */

    let count = 0;


    const interval =
        setInterval(function(){

            createFirework(

                Math.random() *
                window.innerWidth,

                Math.random() *
                window.innerHeight *
                0.55

            );


            count++;


            if(count >= 8){

                clearInterval(interval);

            }

        }, 450);

}


/* =================================
   PROPOSAL BUTTONS
================================= */

function showProposalSuccess(){

    if(proposalMessage){

        proposalMessage.classList.add("show");

        proposalMessage.style.display = "block";

    }


    celebrateLove();


    /* Scroll to ending */

    setTimeout(function(){

        const ending =
            document.getElementById(
                "endingSection"
            );


        if(ending){

            ending.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 4500);

}


if(yesBtn){

    yesBtn.addEventListener(
        "click",
        showProposalSuccess
    );

}


if(foreverBtn){

    foreverBtn.addEventListener(
        "click",
        showProposalSuccess
    );

}


/* =================================
   CINEMATIC ENDING
================================= */

const endingSection =
    document.getElementById(
        "endingSection"
    );


if(endingSection){

    const endingObserver =
        new IntersectionObserver(

            function(entries){

                entries.forEach(function(entry){

                    if(entry.isIntersecting){

                        endingSection
                            .classList
                            .add("active");

                        endingObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    endingObserver.observe(
        endingSection
    );

}


/* =================================
   HERO SCROLL ZOOM + FADE
================================= */

const heroSection =
    document.querySelector(".hero");

const heroImage =
    document.querySelector(".hero-bg");


if(heroSection && heroImage){

    window.addEventListener(
        "scroll",
        function(){

            const heroHeight =
                heroSection.offsetHeight;

            const scrollY =
                window.scrollY;


            let progress =
                scrollY / heroHeight;


            progress =
                Math.max(
                    0,
                    Math.min(progress, 1)
                );


            const scale =
                1 + (progress * 0.28);


            const opacity =
                1 - (progress * 1.15);


            heroImage.style.transform =
                `scale(${scale})`;


            heroImage.style.opacity =
                Math.max(opacity, 0);

        }
    );

}