const buttonHome = document.getElementById('buttonHome');
const buttonAbout = document.getElementById('buttonAbout');
const buttonProjects = document.getElementById('buttonProjects');
const buttonJoin = document.getElementById('buttonJoin');
const buttonEuipments = document.getElementById('buttonEquipments');


buttonHome.addEventListener('click', () => {
    window.location.href = '2.html';
});


buttonAbout.addEventListener('click', () => {
    window.location.href = 'about.html';
});


buttonProjects.addEventListener('click', () => {
    window.location.href = 'projects.html';
});


buttonJoin.addEventListener('click', () => {
    window.location.href = 'join.html';
});


buttonEuipments.addEventListener('click', () => {
    window.location.href = 'equipments.html';
});