const login = async (event) => {
  event.preventDefault();
  const username = document.getElementById ('username').value;
  const password = document.getElementById('password').value;
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to login');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  // Example usage:
  // Attach this function to a login form submission in my HTML
  // <form onsubmit="login(username, password)">

  document.getElementById('login').addEventListener('submit', login)
  