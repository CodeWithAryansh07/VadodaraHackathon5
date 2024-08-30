// Function to handle the add bed button click
document.querySelectorAll('.add-bed').forEach(button => {
    button.addEventListener('click', function () {
        const containerId = this.closest('.bed-container').id;
        window.location.href = `add-bed.html?type=${encodeURIComponent(containerId)}`;
    });
});

// Function to add a new bed element with an image
function addBed(containerId, roomNumber) {
    const bedContainer = document.getElementById(containerId);
    const newBed = document.createElement('div');
    newBed.className = 'bed';
    newBed.innerHTML = `
        <button class="delete-bed">🗑</button>
        <img src="./assets/Bed1.png" alt="Bed Image" style="width: 100%; height: auto;">
        <div class="bed-details">Room No: ${roomNumber}</div>
    `;
    bedContainer.insertBefore(newBed, bedContainer.querySelector('.add-bed-container'));
    addEventListeners(newBed);
}

// Function to add event listeners to bed elements
function addEventListeners(bed) {
    bed.querySelector('.delete-bed').addEventListener('click', function () {
        bed.remove();
    });
}

// On page load, check if a new bed needs to be added
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const roomNumber = urlParams.get('room');
    const bedType = urlParams.get('type');

    if (roomNumber && bedType) {
        addBed(bedType, roomNumber);
    }
};