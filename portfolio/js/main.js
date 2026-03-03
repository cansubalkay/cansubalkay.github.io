const progressBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.getAttribute('data-progress');
                bar.style.width = value + '%';
                observer.unobserve(bar);
            }
        });
    },
    {
        threshold: 0.5
    }
);

progressBars.forEach(bar => {
    observer.observe(bar);
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

revealElements.forEach(el => {
    revealObserver.observe(el);
});
