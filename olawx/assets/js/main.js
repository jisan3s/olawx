(function() {
	"use strict";
    
    window.onload = function(){

        /*------------------------------------------------
               Sticky Header
        ------------------------------------------------*/
        const getHeaderId = document.querySelector(".navbar-area");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 150;
                const { scrollTop } = event.target.scrollingElement;
                document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
            });
        }

        /*------------------------------------------------
                Back to Top
        ------------------------------------------------*/
        let progressPath = document.getElementById("progress-path");
        let progressWrap = document.getElementById("progress-wrap");
        let pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.webkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.webkitTransition =
        "stroke-dashoffset 10ms linear";
        
        const onScollEvent = function (event) {
            let scroll = window.scrollY;
            let height = document.body.scrollHeight - window.innerHeight;
            let progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;

            let offset = 50;
                if (window.scrollY > offset) {
                progressWrap.classList.add("active-progress");
                } else {
                progressWrap.classList.remove("active-progress");
            }
        };

        onScollEvent();
            window.onscroll = onScollEvent;
            progressWrap.onclick = function (event) {
            window.scroll({ top: 0, behavior: "smooth" });
            return false;
        };

        /*------------------------------------------------
               Preloader
        ------------------------------------------------*/
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none';
        }
    };

    /*------------------------------------------------
              Brand Slider
    ------------------------------------------------*/    
    var heroThumbs = new Swiper('.hero-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3, 
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var hero_slider = new Swiper('.hero-slider', {
        spaceBetween: 0,
        speed: 1200,
        fadeEffect: { crossFade: true },
        effect: "fade",
        autoHeight: true,
        thumbs: {
            swiper: heroThumbs
        },
    });

    /*------------------------------------------------
              Testimonial Slider
    ------------------------------------------------*/
    var testimonial_slider_one = new Swiper(".testimonial-slider", {
        spaceBetween: 24,
        speed: 1200,
        loop:true,
        slidesPerView: 1,
        autoHeight: true,
        fadeEffect: { crossFade: true },
        effect: "fade",
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: true
        // },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true
        }
    });

    /*------------------------------------------------
              Case Studies Slider
    ------------------------------------------------*/
    var case_slider = new Swiper(".case-slider-one", {
        loop: true,
        speed: 1500,
        freemode: false,
        spaceBetween: 20,
        simulateTouch: false,
        autoHeight: true,
        slidesPerView: 1,
        fadeEffect: { crossFade: true },
        effect: "fade",
        pagination: {
            el: ".case-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                var formattedIndex = (index + 1).toString().padStart(2, '0');
                return '<span class="' + className + '">' + formattedIndex + "</span>";
            },
        },
    });

    var case_slider_two = new Swiper(".case-slider-two", {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        centeredSlides: true, // Center the active slide
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        autoHeight: true,
        navigation: {
            nextEl: ".case-next",
            prevEl: ".case-prev",
        },
        pagination: {
            el: ".case-pagination",
            type: "fraction",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2.3
            },
            1200: {
                slidesPerView: 2.6
            },
            1400: {
                slidesPerView: 3
            }
        }
    });

    /*------------------------------------------------
              Brand Slider
    ------------------------------------------------*/
    var brand_slider = new Swiper(".brand-slider", {
        loop: true,
        speed: 12000,
        freemode: false,
        spaceBetween: 20,
        simulateTouch: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                slidesPerView: 2.5
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
            1400: {
                slidesPerView: 7
            }
        }
    });

    // Ensure the elements exist on the page before adding event listeners
    const elements = document.querySelectorAll('.attorney-card');

    // Proceed only if there are elements with the specified class
    if (elements.length > 0) {
    elements.forEach(element => {
        element.addEventListener('click', function() {
        // Remove the class from all siblings that have it
        elements.forEach(sibling => {
            if (sibling !== element && sibling.classList.contains('active')) {
            sibling.classList.remove('active');
            }
        });

        // Add the class to the clicked element
        element.classList.add('active');
        });
    });
    }

    /*------------------------------------------------
              Instagram Slider
    ------------------------------------------------*/
    var insta_slider = new Swiper(".insta-slider", {
        loop: true,
        speed: 12000,
        freemode: false,
        spaceBetween: 25,
        simulateTouch: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                slidesPerView: 1.7
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 25
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        }
    });

    /*------------------------------------------------
              Product Slider
    ------------------------------------------------*/
    var product_slider = new Swiper(".product-slider", {
        loop: true,
        speed: 1500,
        spaceBetween: 25,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
        pagination: {
            el: '.product-pagination',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 4
            }
        }
    });

    /*------------------------------------------------
              Resume Slider
    ------------------------------------------------*/
	var resume_slider_one = new Swiper(".resume-slider", {
        loop: true,
        speed: 1500,
        freemode: false,
        spaceBetween: 24,
        pagination: {
            el: '.resume-pagination',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1.2
            },
            768: {
                slidesPerView: 1.6
            },
            992: {
                slidesPerView: 2.2
            },
            1200: {
                slidesPerView: 2.5
            },
            1300: {
                slidesPerView: 2.5
            },
            1400: {
                slidesPerView: 2.8
            },
            1600: {
                slidesPerView: 3.2
            },
            1920: {
                slidesPerView: 3.52
            }
        }
    });

    /*------------------------------------------------
             Counter Js
    ------------------------------------------------*/
    if ("IntersectionObserver" in window) {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.innerText, 10);
                let step = target / 200;
                let current = 0;
                let timer = setInterval(function () {
                    current += step;
                    counter.innerText = Math.floor(current);
                    if (parseInt(counter.innerText, 10) >= target) {
                    clearInterval(timer);
                    }
                }, 10);
                counterObserver.unobserve(counter);
                }
            });
        });
        let counters = document.querySelectorAll(".counter");
            counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }

    //Custom Accordion 
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.nav-link').forEach(link => {
            const content = link.querySelector('.sliding-content');
            if (!content) return;

            const open = () => {
            content.style.height = content.scrollHeight + 'px';
            content.addEventListener('transitionend', () => {
                if (link.classList.contains('active')) content.style.height = 'auto';
            }, { once: true });
            };

            const close = () => {
            content.style.height = content.scrollHeight + 'px';
            requestAnimationFrame(() => content.style.height = '0');
            };

            if (link.classList.contains('active')) open();
            link.addEventListener('shown.bs.tab', open);
            link.addEventListener('hidden.bs.tab', close);
        });
    });

   //Gsap Mousemove Animation
    document.addEventListener("mousemove", mouseMoveFunc);
    let moveonmouse = gsap.utils.toArray(".moveContent");

    function mouseMoveFunc(e) {
        moveonmouse.forEach((circle, index) => {
            const depth = 65;
            const moveX = (e.pageX - window.innerWidth / 2) / depth;
            const moveY = (e.pageY - window.innerHeight / 2) / depth;
            index ++

            gsap.to(circle, {
            x: moveX * index,
            y: moveY * index,
            });
        });
    }


    gsap.registerPlugin(SplitText, ScrollTrigger);
    
    //Moving cards
    const cards = document.querySelectorAll(".bt-card");
    if (cards.length > 0) {
    const baseOffsetPercent = 5;

    cards.forEach((card, index) => {
        const offsetPercent = index === 0 ? 0 : baseOffsetPercent * index;
        const cardHeight = card.offsetHeight;
        const offsetPx = (offsetPercent / 100) * cardHeight;

        gsap.set(card, { y: offsetPx });

        ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 30%",
        onEnter: () => gsap.to(card, { y: 0, duration: 1, ease: "power2.out" }),
        onLeaveBack: () => gsap.to(card, { y: offsetPx, duration: 1, ease: "power2.out" }),
        onLeave: () => {
            if (offsetPx > 0) {
            gsap.to(card, { y: offsetPx, duration: 1, ease: "power2.out" });
            }
        },
        onEnterBack: () => gsap.to(card, { y: 0, duration: 1, ease: "power2.out" }),
        });
    });
    }

    /*------------------------------------------------
            zoom Video bg
    ------------------------------------------------*/
    if (document.querySelector('.zoom-img')) {
        gsap.fromTo('.zoom-img',
            { scale: 0.8 },
            {
            scale: 1.2,
            ease: "slow(0.5, 0.5, false)",
            scrollTrigger: {
                trigger: '.zoom-img',
                start: 'top 60%',
                end: 'top 20%',
                scrub: true,
                markers: false
            }
            }
        );
    }
    
    /*------------------------------------------------
              GSAP Text Animation
    ------------------------------------------------*/
    //Text Reveal From Bottom
    document.addEventListener("DOMContentLoaded", () => {
        const titles = document.querySelectorAll(".reveal-text-bottom");

        titles.forEach((title) => {
            // Split the text into lines
            const split = new SplitText(title, { type: "lines" });
            const lines = split.lines;

            // Clear the original content
            title.innerHTML = "";

            // Wrap each line into mask > line-inner (preserve inline HTML like <span>)
            lines.forEach((line) => {
                const mask = document.createElement("div");
                mask.className = "reveal-mask";

                const inner = document.createElement("div");
                inner.className = "line-inner";
                inner.innerHTML = line.innerHTML; // ✅ preserve <span> markup

                mask.appendChild(inner);
                title.appendChild(mask);
            });

            // Animate each line on scroll
            gsap.from(title.querySelectorAll(".reveal-mask .line-inner"), {
                y: 60,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: title,
                    start: "top 70%",
                    toggleActions: "play none play reverse",
                },
            });
        });
    });

    //Text Reveal From Right
    window.addEventListener("load", function() {
        gsap.registerPlugin(CustomEase);
    
        // Wrap every letter
        const textRevealElements = document.querySelectorAll(".reveal-text-right");
    
        textRevealElements.forEach((element) => {
            element.innerHTML = element.textContent.replace(
                /([-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]+)/g,
                '<div class="word">$1</div>'
            );
    
            let words = element.querySelectorAll(".word");
            words.forEach((word) => {
                word.innerHTML = word.textContent.replace(
                    /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
                    "<div class='perspective'><div class='letter'><div>$&</div></div></div>"
                );
            });
    
            const letters = element.querySelectorAll(".letter");
    
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "restart none none reset"
                }
            });
            tl.set(element, { autoAlpha: 1 });
            tl.fromTo(
                letters,
                0.6, {
                    transformOrigin: "center",
                    rotationY: 90,
                    x: 30
                }, {
                    rotationY: 0.1,
                    x: 0,
                    stagger: 0.025,
                    ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 ")
                }
            );
        });
    });

    //Title Animation With SplitText 
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" })
    tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -90, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    
    /*------------------------------------------------
            GSAP Image Tilt Effect
    ------------------------------------------------*/
    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".tilt-img"); // Select all images

        images.forEach((img) => {
            img.addEventListener("mousemove", (e) => {
                const { width, height, left, top } = img.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) / width * 2;
                const y = (e.clientY - top - height / 2) / height * 2;

                gsap.to(img, {
                    rotateY: x * 15, 
                    rotateX: y * -15, 
                    transformPerspective: 2000,
                    ease: "power2.out",
                    duration: 0.3,
                });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    rotateY: 0,
                    rotateX: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });
    });

    /*------------------------------------------------
            GSAP Parallax Image With Lenis
    ------------------------------------------------*/
    const lenis = new Lenis({
        lerp: 0.09
    });

    lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })

    gsap.utils.toArray('.img-container').forEach(container => {
    const img = container.querySelector('img');

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
        }
    });

    tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
        }, {
            yPercent: 20,
            ease: 'none'
        });
    });

    // Grow Element on Scroll
    document.querySelectorAll(".grow-left").forEach((item) => {
        gsap.fromTo(item,{ clipPath: "inset(0 70% 0 0)" },
            {
                clipPath: "inset(0 0% 0 0)",
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    scrub: 2,
                    start: "top 90%",
                    end: "bottom 95%"
                }
            }
        );
    });

    // // Right → Left (show right 30% first)
    document.querySelectorAll(".grow-right").forEach((item) => {
        gsap.utils.toArray(".grow-right").forEach((item) => {
            gsap.fromTo(item,{ clipPath: "inset(0% 0% 0% 70%)" },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    scrub: 2,
                    start: "top 90%",
                        end: "bottom 95%"
                    }
                }
            );
        });
    });

    //Grow Top
    document.querySelectorAll(".grow-top").forEach((item) => {
        gsap.fromTo(item,
            { clipPath: "inset(70% 0 0 0)" }, // Hidden from top
            {
                clipPath: "inset(0% 0 0 0)", // Fully visible
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    scrub: 2,
                    start: "top 90%",
                    end: "bottom 95%"
                }
            }
        );
    });

    //Grow Bottom
    document.querySelectorAll(".grow-bottom").forEach((item) => {
        gsap.fromTo(item,
            { clipPath: "inset(0 0 70% 0)" }, // Hidden from bottom
            {
                clipPath: "inset(0 0 0% 0)", // Fully visible
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    scrub: 2,
                    start: "top 90%",
                    end: "bottom 55%"
                }
            }
        );
    });

    /*------------------------------------------------
            GSAP Move Element On Scroll
    ------------------------------------------------*/
    if (document.querySelector(".move-left")) {
        gsap.to('.move-left', {
            xPercent: 40,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-left",
                start: "0% 85%",
                end: "100% 10%",
                scrub: true
            }
        });
    }
    if (document.querySelector(".move-right")) {
        gsap.to('.move-right', {
            xPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-right",
                start: "0% 90%",
                end: "100% 10%",
                scrub: true
            }
        });
    }
    if (document.querySelector(".move-right-big")) {
        gsap.to('.move-right-big', {
            xPercent: -120,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-right-big",
                start: "0% 90%",
                end: "100% 10%",
                scrub: true
            }
        });
    }
    if (document.querySelector(".move-top")) {
        gsap.to('.move-top', {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-top",
                start: "0% 85%",
                end: "100% 10%",
                scrub: true
            }
        });
    }
    if (document.querySelector(".move-bottom")) {
        gsap.to('.move-bottom', {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-bottom",
                start: "0% 5%",
                end: "100% 0%",
                scrub: true
            }
        });
    }

    //Cursor Hover Image
    document.addEventListener("DOMContentLoaded", function () {
        const elementsWorks = document.querySelectorAll(".service-item");
        const slidePicWorks = document.querySelector("#service-gallery");
        const slidePicsWorks = document.querySelector("#service-images");
        const itemsWorks = document.querySelector(".service-items");
    
        // Check if required elements exist before applying GSAP animations
        if (elementsWorks.length > 0 && slidePicWorks && slidePicsWorks && itemsWorks) {
            
            gsap.set(slidePicWorks, { autoAlpha: 0 });
    
            elementsWorks.forEach((element, index) => {
                element.addEventListener("mouseenter", function () {
                    gsap.to(slidePicsWorks, {
                        marginTop: `-${475 * index}px`,
                        duration: 0.2,
                        ease: "power1",
                    });
                });
    
                element.addEventListener("mouseleave", function () {
                    gsap.to(element, { color: "initial", duration: 0.2, ease: "power1" });
                });
            });
    
            window.addEventListener("mousemove", function (e) {
                gsap.to(slidePicWorks, {
                    top: `${e.clientY}px`,
                    left: `${e.clientX}px`,
                    xPercent: -5,
                    yPercent: -40,
                    duration: 0.2,
                    ease: "power1",
                });
            });
    
            itemsWorks.addEventListener("mouseenter", function () {
                gsap.to(slidePicWorks, {
                    autoAlpha: 1,
                    duration: 0.2,
                    ease: "power1",
                });
            });
    
            itemsWorks.addEventListener("mouseleave", function () {
                gsap.to(slidePicWorks, {
                    autoAlpha: 0,
                    duration: 0.2,
                    ease: "power1",
                });
            });
        }
    });

    /*------------------------------------------------
              Service Slide Content js
    ------------------------------------------------*/
    const services = document.querySelectorAll('.service-item');

    if (services.length > 0) {
    services.forEach(service => {
        const slide = service.querySelector('.slide-content');
        if (!slide) return; // ✅ check: skip if no .slide-content

        service.addEventListener('mouseenter', () => {
        slide.style.height = slide.scrollHeight + "px";
        });

        service.addEventListener('mouseleave', () => {
        slide.style.height = "0";
        });
    });
    }

    /*------------------------------------------------
              Quantity Counter
    ------------------------------------------------*/
    var resultEl = document.querySelector(".resultSet"),
    plusMinusWidgets = document.querySelectorAll(".v-counter");

    // Adding event listeners to all plus and minus buttons
    for (var i = 0; i < plusMinusWidgets.length; i++) {
        plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
        plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
    }

    function clickHandler(event) {
        var countEl = event.target.parentNode.querySelector(".count");
        if (event.target.className.match(/\bminusBtn\b/)) {
            countEl.value = Math.max(0, Number(countEl.value) - 1); // Prevents going below zero
        } 
        else if (event.target.className.match(/\bplusBtn\b/)) {
            countEl.value = Number(countEl.value) + 1;
        }
        triggerEvent(countEl, "change");
    }
    function triggerEvent(el, type) {
        if ('createEvent' in document) {
            // Modern browsers (IE9+)
            var e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        } else {
            // IE 8
            var e = document.createEventObject();
            e.eventType = type;
            el.fireEvent('on' + e.eventType, e);
        }
    }
    /*------------------------------------------------
              scrollCue Slider One
    ------------------------------------------------*/
    scrollCue.init({
        threshold: 0.05, 
    });

})();   

    /*------------------------------------------------
                Custom Cursor Js
    ------------------------------------------------*/
    // Select cursor elements
    const cursor = document.querySelector('.cursor');
    const cursorinner = document.querySelector('.cursor-inner');
    const cursorText = document.querySelector('.cursor-text');
    const links = document.querySelectorAll('a');

    // Cursor positions
    let mouseX = 0,
        mouseY = 0;
    let posX = 0,
        posY = 0;
    const speed = 0.2; // easing factor (0.1 = slower, 0.3 = faster)

    // Track mouse position
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Outer cursor follows instantly
        cursor.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
    });

    // Animate inner cursor smoothly
    function animateCursor() {
        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;
        cursorinner.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // -------------------
    // Click animation
    // -------------------
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover');
    });
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
        cursorinner.classList.remove('cursorinnerhover');
    });

    // -------------------
    // Hover effect for links
    // -------------------
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // -------------------
    // Custom text/icon on specific elements
    // -------------------
    const hoverTargets = document.querySelectorAll('.hover-text-target');

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursor.classList.add('show-text');
            const text = target.getAttribute('data-cursor-text');
            cursorText.textContent = text ? text : "View";
        });

        target.addEventListener('mouseleave', () => {
            cursor.classList.remove('show-text');
            cursorText.textContent = "";
        });
    });

try {

    /*------------------------------------------------
                Toggle Switcher Js
    ------------------------------------------------*/
    const themeswitcher = document.querySelector(".theme-switcher");
    document.querySelector(".toggle-switch-btn").addEventListener("click", function() {
        themeswitcher.classList.toggle("open");
    });
    
    //RTL Switcher
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('directionToggle');
        const darkToggle = document.getElementById('darkModeToggle'); // Assume this exists
        const bootstrapLink = document.getElementById('bootstrapStylesheet');
        const html = document.documentElement;
        const body = document.body;

        // Load stored settings or default
        const isRTL = localStorage.getItem('isRTL') === 'true';
        const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

        function applyDirection(isRTL) {
            const newHref = isRTL ? 'assets/css/bootstrap.rtl.min.css' : 'assets/css/bootstrap.min.css';
            bootstrapLink.setAttribute('href', newHref);
            html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
            body.classList.toggle('rtl-enabled', isRTL);
            body.classList.toggle('ltr-enabled', !isRTL);
            if (toggle) toggle.checked = isRTL;
        }

        function applyDarkMode(isDark) {
            body.classList.toggle('dark-mode', isDark);
            if (darkToggle) darkToggle.checked = isDark;
        }

        // Apply stored settings
        applyDirection(isRTL);
        applyDarkMode(isDarkMode);

        // RTL Toggle Handler
        if (toggle) {
            toggle.addEventListener('change', function () {
                const isRTL = this.checked;
                localStorage.setItem('isRTL', isRTL);
                applyDirection(isRTL);
            });
        }

        // Dark Mode Toggle Handler
        if (darkToggle) {
            darkToggle.addEventListener('change', function () {
                const isDark = this.checked;
                localStorage.setItem('isDarkMode', isDark);
                applyDarkMode(isDark);
            });
        }
    });

    // function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('olawx_theme', themeName);
        document.documentElement.className = themeName;
    }

    function toggleTheme() {
        const slider = document.getElementById('slider');
        if (slider.checked) {
            setTheme('theme-dark');
        } else {
            setTheme('theme-light');
        }
    }

    (function () {
        const slider = document.getElementById('slider');
        const theme = localStorage.getItem('olawx_theme');

        if (theme === 'theme-dark') {
            setTheme('theme-dark');
            if (slider) slider.checked = true;
        } else {
            setTheme('theme-light');
            if (slider) slider.checked = false;
        }
    })();

} catch (err) {}

//Pricing Card Toggle
function check() {
    var checkBox = document.getElementById("togBtn");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");

    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked) {  
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        } else {            
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }
}
check();