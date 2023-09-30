
// Entry animation JavaScript


$(document).ready(function() {

    gsap.set(".entry-wrapper", {
        width: '100%',
        height: '300%'
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.entry-wrapper',
            start: '10%',
            end: ' 100%',
            scrub: 5
        }
    })

        .fromTo('.sky', { y: -200 }, { y: -650 }, 0)
        .fromTo('.mistFar', { y: 0 }, { y: -400 }, 0)
        .fromTo('.mistClose', { y: 150 }, { y: 350 }, 0)
        .fromTo('.mountBg', { y: 200 }, { y: 0 }, 0)
        .fromTo('.mountBg1', { y: 200 }, { y: -40 }, 0)
        .fromTo('.mountBg2', { y: 200 }, { y: -70 }, 0)
        .fromTo('.mountBg3', { y: -200 }, { y: -140 }, 0)
        .fromTo('.mountBg4', { y: -200 }, { y: -150, delay: .2 }, 0)
        .fromTo('.mountBg5', { y: -200 }, { y: 0, delay: .2}, 0);

    gsap.to("entry-wrapper", {
        scrollTrigger: {
            trigger: "entry-wrapper",
            start: 'top',
            pin: "entry-wrapper",
            end: '+=100%',
            scrub: true,
        }
    });
});

// Header animation


$(document).ready(function() {

    gsap.set(".header-wrapper", {
        width: '100%',
        height: '300%'
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.header-wrapper',
            start: '-250%',
            end: ' 100%',
            scrub: 5
        }
    })
        .fromTo(".header1", { y: 0, opacity: 0.2 }, { y: 0, opacity: 1 }, 0)
        .fromTo(".header2", { y: -2, opacity: 0 }, { y: -2 ,opacity: 1, delay: .3 }, 0)
        .fromTo(".header3", { y: -20, opacity: 0.2 }, { y: 20,opacity: 1 }, 0)
        .fromTo(".header4", { y: -20, opacity: 0.5 }, { y: 10,opacity: 1 }, 0)
        .fromTo(".header5", { y: -50, opacity: 0.5 }, { y: 20,opacity: 1 }, 0)
        .fromTo(".headerStars", { y: -0, opacity: 0.0 }, { y: 0,opacity: .7, delay: .7 }, 0)

    gsap.to("entry-wrapper", {
        scrollTrigger: {
            trigger: "entry-wrapper",
            start: 'top',
            pin: "entry-wrapper",
            end: '+=100%',
            scrub: true,
        }
    });
});

// Email button click


document.querySelector('.email-button').addEventListener('click', function() {
    window.location.href = 'mailto:alex@sitara.net.au';
});

// Display skills list

const skills = [
    "Solid foundation of C#",
    "Solid foundation of Python",
    "Solid foundation SQL databases",
    "Solid foundation in web design HTML, CSS, Javascript",
    "Use of version control software",
    "Use of adobe suite products Photoshop, Illustrator, Acrobat editor and Premiere pro",
    "Use of all Microsoft office suite programs",
    "The ability to understand technical processes",
    "High attention to detail",
    "The ability to learn new skills quickly and efficiently",
    "Hard work efficacy",
    "Well-developed written and verbal communication and strong interpersonal skills",
    "Ability to work effectively both independently and as part of a team"
];

function displaySkills() {
    const skillsList = document.getElementById("skillsList");

    skillsList.innerHTML = "";

    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        const listItem = document.createElement("li");
        listItem.textContent = `• ${skill}`;
        skillsList.appendChild(listItem);
    }
}

displaySkills();

