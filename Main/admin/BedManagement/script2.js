document.addEventListener('DOMContentLoaded', () => {
    // Handling input labels
    const inputs = document.querySelectorAll('.inputbox input');
    
    inputs.forEach(input => {
        const label = input.nextElementSibling;

        input.addEventListener('focus', () => {
            if (input.value === '') {
                label.classList.remove('label-top');
                label.style.opacity = '1';
            } else {
                label.classList.add('label-top');
                label.style.opacity = '1';
            }
        });

        input.addEventListener('blur', () => {
            if (input.value !== '') {
                label.classList.add('label-top');
                label.style.opacity = '0';
            } else {
                label.classList.remove('label-top');
                label.style.opacity = '1';
            }
        });

        input.addEventListener('input', () => {
            if (input.value === '') {
                label.classList.remove('label-top');
                label.style.opacity = '1';
            }
        });
    });

    // Handling room number form submission
    const roomForm = document.getElementById('roomForm');
    if (roomForm) {
        roomForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the default form submission

            const roomNumberInput = document.getElementById('roomNumber');
            const roomNumber = roomNumberInput ? roomNumberInput.value.trim() : '';

            // Get the bed type from the URL
            const urlParams = new URLSearchParams(window.location.search);
            const bedType = urlParams.get('type');

            if (roomNumber && bedType) {
                // Redirect back to the index page with the room number and bed type as query parameters
                window.location.href = `index.html?type=${encodeURIComponent(bedType)}&room=${encodeURIComponent(roomNumber)}`;
            } else {
                alert('Please enter a valid room number.');
            }
        });
    }
});
