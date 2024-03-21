const createComment = async (postId, commentText) => {
    try {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post_id: postId, comment_text: commentText }),
      });
  
      if (response.ok) {
        document.location.reload(); // Reload the page to display the new comment
      } else {
        alert('Failed to create comment');
      }
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };
  
  // Example usage:
  // Attach this function to a comment form submission in my HTML
  // <form onsubmit="createComment(postId, commentText)">
  