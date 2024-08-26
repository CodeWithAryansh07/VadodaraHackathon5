document.getElementById('add-bed-btn').addEventListener('click', function() {
    const bedDiv = document.createElement('div');
    bedDiv.className = 'bed';

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = '×';

    // Append the delete button to the bed div
    bedDiv.appendChild(deleteBtn);

    // Add the bed to the bed container
    document.getElementById('bed-container').appendChild(bedDiv);

    // Add event listener to delete the bed
    deleteBtn.addEventListener('click', function() {
        bedDiv.remove();
    });
});
