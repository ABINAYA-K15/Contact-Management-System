// Function for login validation
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user inputs
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Regex to validate college email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/;

  // Mock credentials for login validation
  const mockUsername = "admin";
  const mockEmail = "admin.ei22@bitsathy.ac.in";
  const mockPassword = "1234";

  if (!emailRegex.test(email)) {
    alert("Invalid email format! Please use your college email.");
    return;
  }

  if (username === mockUsername && email === mockEmail && password === mockPassword) {
    alert("Login successful!");
    window.location.href = "contacts.html"; // Redirect to contacts page
  } else {
    alert("Invalid credentials!");
  }
});

// Function for signup validation
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user inputs
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Regex to validate college email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/;

  if (!username) {
    alert("Username cannot be empty!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid email format! Please use your college email.");
    return;
  }

  if (password.length < 4) {
    alert("Password must be at least 4 characters long!");
    return;
  }

  alert("Sign up successful! You can now log in.");
  window.location.href = "login.html"; // Redirect to login page
});
