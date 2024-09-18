//Get the skills section and toggle button
const skillsSection = document.querySelector('#skills') as HTMLElement;
const toggleButton = document.querySelector('#toggle-skills') as HTMLElement;

// Add event listener to toggle the visibility of the skills section
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide';
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show';
    }
});