const createPost = async (event) => {
  event.preventDefault()
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value; 
    try {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  
  // Example usage:
  // Attach this function to a post creation form submission in my HTML
  // <form onsubmit="createPost(title, content)">

  document.getElementById('newPost').addEventListener("submit", createPost)
  