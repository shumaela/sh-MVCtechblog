const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to logout');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  // Example usage:
  // Attach this function to a logout button in my HTML
  // <button onclick="logout()">Logout</button>
  