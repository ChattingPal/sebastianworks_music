document.addEventListener('DOMContentLoaded', function () {
    const navHome = document.getElementById('nav-home');
    const navStudents = document.getElementById('nav-music');
    const navTeachers = document.getElementById('nav-membership');
    const navCourses = document.getElementById('nav-aboutme');

    const homeSection = document.getElementById('home');
    const studentsSection = document.getElementById('music');
    const teachersSection = document.getElementById('membership');
    const coursesSection = document.getElementById('aboutme');

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
