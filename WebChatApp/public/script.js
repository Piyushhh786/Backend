function confirmDelete(event) {
    // Show the confirmation dialog
    const isConfirmed = confirm("Are you sure you want to delete this chat?");

    // If the user cancels, prevent the form from submitting
    if (!isConfirmed) {
        event.preventDefault();
    }
}