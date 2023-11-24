const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const post_title = document.querySelector('#exampleFormControlInput1').value.trim();
    const post_body = document.querySelector('#exampleFormControlTextarea1').value.trim();
  
    if (post_title && post_body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/post/', {
        method: 'POST',
        post_body: JSON.stringify({ post_title, post_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log('new post', post_title)
        // document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('#newpst')
    .addEventListener('click', postFormHandler);
  