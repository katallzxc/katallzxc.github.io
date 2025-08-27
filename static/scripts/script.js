// Select all project buttons
const projTitles = document.querySelectorAll('.accordion-title');

// Loop through each project button
projTitles.forEach(project => {
    // Add a click event listener to each project
    project.addEventListener('click', () => {
        // Close any other open projects except the one clicked
        projTitles.forEach(item => {
            if (item !== project) {
                item.classList.remove('active'); // Remove 'active' class to reset arrow rotation
                item.nextElementSibling.style.maxHeight = null; // Collapse the content
            }
        });

        // Toggle 'active' class on the clicked project to rotate the arrow
        project.classList.toggle('active');

        // Select the corresponding content div
        const content = project.nextElementSibling;

        // Check if the content is already open
        if (content.style.maxHeight) {
            // If open, close it by resetting max-height
            content.style.maxHeight = null;
        } else {
            // If closed, set max-height to scrollHeight to expand it
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});