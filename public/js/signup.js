const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#userNameSignup").value.trim();
  const password = document.querySelector("#passwordSignup").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/create-user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("welcome", username);
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#SignupSub")
  .addEventListener("click", signupFormHandler);
