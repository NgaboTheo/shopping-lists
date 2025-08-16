        // Dark Mode Toggle
const darkToggle = document.querySelector(".dark-mode-toggle");
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
},5000);

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

        
        $(document).ready(function () {
        $(window).scroll(function () {
            //  sticky navbar on scroll script  //
            if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            } else {
            $(".navbar").removeClass("sticky");
            }

            //  scroll-up button show/hide script  //
            if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
            } else {
            $(".scroll-up-btn").removeClass("show");
            }
        });

        //  slide-up script  //

        $(".scroll-up-btn").click(function () {
            $("html").animate({ scrollTop: 0 });
            //  removing smooth scroll on slide-up button click  //
            $("html").css("scrollBehavior", "auto");
        });

        $(".navbar .menu li a").click(function () {
            //  Smooth scroll on Menu Items click  //

            $("html").css("scrollBehavior", "smooth");
        });

        //  Toggle Navbar  //

        $(".menu-btn").click(function () {
            $(".navbar .menu").toggleClass("active");
            $(".menu-btn i").toggleClass("active");
        });

        //  Typing Text Animation  //

        var typed = new Typed(".typing", {
            strings: [
            "Fullstack Developer",
            "Software Developer",
            "Python Developer",
            "Founder"
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        var typed = new Typed(".typing-2", {
            strings: [
            "Fullstack Developer",
            "Software Developer",
            "Python Developer",
            "Founder"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        //  Owl Carousel  //

        $(".carousel").owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
            }
        });
        });

        window.addEventListener('scroll', ()=>{
            console.log(`scolled: ${window.scrollX}x ${window.scrollY}y`)
            if(window.scrollY >50){
                document.body.style.backgroundColor = '#000'
                document.body.style.color = '#fff'
            }
            else{
                document.body.style.backgroundColor = '#fff'
                document.body.style.color = '#000'
            }
        })