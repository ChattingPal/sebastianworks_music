document.addEventListener('DOMContentLoaded', function () {
    const navHome = document.getElementById('nav-home');
    const navStudents = document.getElementById('nav-students');
    const navTeachers = document.getElementById('nav-teachers');
    const navCourses = document.getElementById('nav-courses');

    const homeSection = document.getElementById('home');
    const studentsSection = document.getElementById('students');
    const teachersSection = document.getElementById('teachers');
    const coursesSection = document.getElementById('courses');

    const assignmentForm = document.getElementById('assignment-form');
    const assignmentsTableBody = document.querySelector('#assignments-table tbody');
    const correctPasscode = '804061'; // This should be securely handled in a real application

    navHome.addEventListener('click', function () {
        showSection(homeSection);
    });

    navStudents.addEventListener('click', function () {
        showSection(studentsSection);
    });

    navTeachers.addEventListener('click', function () {
        showSection(teachersSection);
    });

    navCourses.addEventListener('click', function () {
        showSection(coursesSection);
    });

    assignmentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const assignmentName = document.getElementById('assignment-name').value;
        const assignmentDescription = document.getElementById('assignment-description').value;
        const assignmentDeadline = document.getElementById('assignment-deadline').value;
        const passcode = document.getElementById('passcode').value;

        if (passcode === correctPasscode) {
            const assignment = {
                id: Date.now(),
                name: assignmentName,
                description: assignmentDescription,
                deadline: assignmentDeadline
            };
            saveAssignment(assignment);
            displayAssignments();
            assignmentForm.reset();
        } else {
            alert('Incorrect passcode. Please try again.');
        }
    });

    assignmentsTableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const assignmentId = event.target.getAttribute('data-id');
            deleteAssignment(assignmentId);
            displayAssignments();
        }
    });

    function showSection(section) {
        homeSection.classList.add('hidden');
        studentsSection.classList.add('hidden');
        teachersSection.classList.add('hidden');
        coursesSection.classList.add('hidden');
        section.classList.remove('hidden');
    }

    function saveAssignment(assignment) {
        let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        assignments.push(assignment);
        localStorage.setItem('assignments', JSON.stringify(assignments));
    }

    function deleteAssignment(assignmentId) {
        let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        assignments = assignments.filter(assignment => assignment.id != assignmentId);
        localStorage.setItem('assignments', JSON.stringify(assignments));
    }

    function displayAssignments() {
        const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        assignmentsTableBody.innerHTML = '';

        assignments.forEach(assignment => {
            const deadlineDate = new Date(assignment.deadline);
            const currentDate = new Date();

            if (currentDate <= deadlineDate) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${assignment.name}</td>
                    <td>${assignment.description}</td>
                    <td>${assignment.deadline}</td>
                    <td><button class="delete-btn" data-id="${assignment.id}">Delete</button></td>
                `;
                assignmentsTableBody.appendChild(newRow);
            }
        });

        removeExpiredAssignments(assignments);
    }

    function removeExpiredAssignments(assignments) {
        const currentDate = new Date();
        const validAssignments = assignments.filter(assignment => {
            const deadlineDate = new Date(assignment.deadline);
            return currentDate <= deadlineDate;
        });
        localStorage.setItem('assignments', JSON.stringify(validAssignments));
    }

    displayAssignments();
});
