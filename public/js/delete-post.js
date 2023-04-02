async function deleteFormHandler(event) {
    event.preventDefault();

    const postId = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${postId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert('Failed to delete post');
    }
}

var allDeleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < allDeleteBtns.length; i++) {
    allDeleteBtns[i].addEventListener("click", deleteFormHandler);
}