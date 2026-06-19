document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');
    const timeSpan = document.getElementById('time');
    const dateSpan = document.getElementById('date');

    // Toggle Start Menu
    startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('active');
    });

    // Close Start Menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
            startMenu.classList.remove('active');
        }
    });

    // Update Clock
    function updateClock() {
        const now = new Date();
        
        // Time
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeSpan.textContent = `${hours}:${minutes}`;

        // Date
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        dateSpan.textContent = `${day}/${month}/${year}`;
    }

    // Update clock every minute
    updateClock();
    setInterval(updateClock, 60000);

    // Desktop icons hover effect (optional additional feedback)
    const icons = document.querySelectorAll('.desktop-icon');
    icons.forEach(icon => {
        icon.addEventListener('dblclick', () => {
            alert(`Ouverture de ${icon.querySelector('span').textContent}...`);
        });
    });
});
