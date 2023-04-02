async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const post_text = document.querySelector('#post_text').value;

    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert('Failed to edit post');
    }
}

document
    .querySelector('.edit-blogpost-form')
    .addEventListener('submit', editFormHandler);
