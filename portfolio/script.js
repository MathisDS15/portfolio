var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Animation au scroll pour les sections et interests
document.addEventListener("DOMContentLoaded", function() {
    // Fade-in pour les containers
    document.querySelectorAll('.container').forEach(section => {
        section.classList.add('fade-in');
    });
    // Fade-in pour les interests
    const interests = document.querySelectorAll('.interest-item');
    function showOnScroll() {
        const trigger = window.innerHeight * 0.85;
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < trigger) el.classList.add('visible');
        });
        interests.forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < trigger) el.classList.add('visible');
        });
    }
    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
});