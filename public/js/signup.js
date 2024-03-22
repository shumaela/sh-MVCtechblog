const signup = async (username, email, password) => {
  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

  
  // Example usage:
  // Attach this function to a signup form submission in my HTML
  // <form onsubmit="signup(username, password)">
  