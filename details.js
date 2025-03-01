let selectedContact = JSON.parse(localStorage.getItem("selectedContact"));

function displayDetails() {
  const contactDetails = document.getElementById("contactDetails");

  if (selectedContact) {
    contactDetails.innerHTML = `
      <p><strong>Name:</strong> ${selectedContact.name}</p>
      <p><strong>Company:</strong> ${selectedContact.company}</p>
      <p><strong>Event Name:</strong> ${selectedContact.event}</p>
      <p><strong>Role:</strong> ${selectedContact.role}</p>
      <p><strong>Phone:</strong> ${selectedContact.phone}</p>
      <p><strong>Email:</strong> ${selectedContact.email}</p>
      <p><strong>Address:</strong> ${selectedContact.address}</p>
      <p><strong>Event Date:</strong> ${selectedContact.date}</p>
      <p><strong>Start Time:</strong> ${selectedContact.startTime}</p>
      <p><strong>End Time:</strong> ${selectedContact.endTime}</p>
      <p><strong>Topics Discussed:</strong> ${selectedContact.topic}</p>
      <p><strong>Event Type:</strong> ${selectedContact.type}</p>
    `;
  } else {
    contactDetails.innerHTML = "<p>No contact details found.</p>";
  }
}

function logout() {
  // Clear any stored session data (if applicable)
  localStorage.removeItem("selectedContact");

  // Redirect to the login page
  alert("Logging out...");
  window.location.href = "login.html";
}

function editContact() {
  alert("Edit functionality coming soon!");
}

function deleteContact() {
  alert("Delete functionality coming soon!");
}

window.onload = displayDetails;
