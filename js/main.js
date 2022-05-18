//active navbar

let nav = document.querySelector(".my-navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a) {
        a.addEventListener("click", function() {
            navCollapse.classList.remove("show");
        })
    })
    // counter desing

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            time = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(time);

                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 2786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 2050, 3000);
});