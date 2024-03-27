const logout = async (event) => {
  event.preventDefault();
  // const username = document.getElementById('username').value;
  // const password = document.getElementById('password').value;
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


document.getElementById('logout').addEventListener('submit', logout)


// Example usage:
// Attach this function to a logout button in my HTML
// <button onclick="logout()">Logout</button>