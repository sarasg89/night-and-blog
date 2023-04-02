async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const post_text = document.querySelector('#post_text').value;
  
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to add post');
    }
  }
  
  document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', newFormHandler);
  