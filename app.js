// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
// Images *************************************************
// Images Carousel***************************************

const slides = document.querySelectorAll('.slide');
const nextBtnImg = document.querySelector('.nextBtnImg')
const prevBtnImg = document.querySelector('.prevBtnImg')

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtnImg.addEventListener('click', function () {
    counter++;
    carousel();
});
prevBtnImg.addEventListener('click', function () {
    counter--;
    carousel();
});

function carousel() {
    // loop slides
    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }
    if (counter < slides.length - 1) {
        nextBtnImg.style.display = 'block';
    } else {
        nextBtnImg.style.display = 'none';
    }
    if (counter > 0) {
        prevBtnImg.style.display = 'block';
    } else {
        prevBtnImg.style.display = 'none';
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}
prevBtnImg.style.display = "none";




// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// dinamic changing size of burger toggle if i will add new links
navToggle.addEventListener('click', function () {
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
});
// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})


const showLogo = document.querySelector('.logo');
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        showLogo.classList.add("show-logo")
    } else {
        showLogo.classList.remove("show-logo")
    }
})
// ********** smooth scroll ************
// select links
const scrollLincs = document.querySelectorAll('.scroll-link');

scrollLincs.forEach(function (link) {
    link.addEventListener('click', function (e) {
        //prevent default scroll 
        e.preventDefault();
        // nav to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

//Video
const video = document.querySelector(".video-container");
// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
});


// about *************************************************************************

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

//reviews ***********************************************************************
const reviews = [
    {
        id: 1,
        name: "Egor Belikov",
        job: "Art of Cinema",
        img:
            "https://res.cloudinary.com/dyztew1dl/image/upload/v1616320152/Mallholland/EgorBelikov_a7kntf.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Roger Ebert",
        job: "Le Art of Cinema",
        img:
            "https://res.cloudinary.com/dyztew1dl/image/upload/v1616320117/Mallholland/RodgerEbert_rckohq.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Julia Eshton",
        job: "MovieGo",
        img:
            "https://res.cloudinary.com/dyztew1dl/image/upload/v1616320232/Mallholland/Julia_Eshton_gbb64c.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Le Monser De la Film",
        job: "funkyfilms.com",
        img:
            "https://res.cloudinary.com/dyztew1dl/image/upload/v1616320129/Mallholland/VictorianCritic_vnfkqy.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "David Wolf",
        job: "The Sun",
        img:
            "https://res.cloudinary.com/dyztew1dl/image/upload/v1616321035/Mallholland/David_Wolf_n34tgt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set startin item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
    return showPerson();
});

//show person based on item
function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

//show next person
nextBtn.addEventListener('click', () => {
    currentItem++
    //make my critics loop if value of currentItem is bigger then 3 (in my case)
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

//show prew person
prevBtn.addEventListener('click', () => {
    currentItem--
    //make my critics loop if value of currentItem is less then 0 (in my case)
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// random person
randomBtn.addEventListener('click', async () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem)
    await showPerson();
});



// Fun Facts ore Question Selectors
//using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});







