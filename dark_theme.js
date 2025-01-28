function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const containers = document.querySelectorAll('.container');
    const sliderButtons = document.querySelectorAll('.slider-btn');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    containers.forEach(container => {
        container.classList.toggle('dark-mode');
    });

    sliderButtons.forEach(button => {
        button.classList.toggle('dark-mode');
    });
}