// skills section and toggle button
var skillsSection = HTMLElement;
var toggleButton = HTMLElement;
// skills section
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show';
    }
});
