// JavaScript to cycle through featured projects
const projects = document.querySelectorAll('.featured-project');
let currentProject = 0;
const displayTime = 5000; // Display each project for 5 seconds

function cycleProjects() {
    // Remove 'active' class from current project
    projects[currentProject].classList.remove('active');
    
    // Move to the next project
    currentProject = (currentProject + 1) % projects.length;
    
    // Add 'active' class to the new current project
    projects[currentProject].classList.add('active');
}

// Initialize the first project as active
projects[currentProject].classList.add('active');

// Cycle projects every X seconds
setInterval(cycleProjects, displayTime);
