document.addEventListener('DOMContentLoaded', function () {
    const navHome = document.getElementById('nav-home');
    const navMusic = document.getElementById('nav-music');
    const navMembership = document.getElementById('nav-membership');
    const navAboutme = document.getElementById('nav-aboutme');

    const homeSection = document.getElementById('home');
    const musicSection = document.getElementById('music');
    const membershipSection = document.getElementById('membership');
    const aboutmeSection = document.getElementById('aboutme');

    navHome.addEventListener('click', function () {
        showSection(homeSection);
    });

    navMusic.addEventListener('click', function () {
        showSection(musicSection);
    });

    navMembership.addEventListener('click', function () {
        showSection(membershipSection);
    });

    navAboutme.addEventListener('click', function () {
        showSection(aboutmeSection);
    });
});
