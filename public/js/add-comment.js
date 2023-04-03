async function newCommentHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment_text').value;

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/blogpost/comments`, {
        method: 'POST',
        body: JSON.stringify({
            post_id,
            comment_text,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/api/blogpost/comments/${post_id}`);
    } else {
        alert('Failed to add comment');
    }
}

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
