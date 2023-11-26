const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const newPost = document.getElementById('list-group')
    const post_title = document.getElementById('exampleFormControlInput1').value.trim();
    const post_body = document.getElementById('exampleFormControlTextarea1').value.trim();
  console.log(post_title, post_body)
    if (post_title && post_body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ post_title, post_body }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
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
  