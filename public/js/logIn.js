const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#userNameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
        console.log('welcome', username)
        // document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('#SigninSub')
    .addEventListener('click', loginFormHandler);
  
  