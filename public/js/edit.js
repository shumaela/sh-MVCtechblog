const editPost = async (id, newData) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit post');
      }
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };
  
  // Example usage:
  // Attach this function to an edit form submission in my HTML
  // <form onsubmit="editPost(postId, newData)">
  