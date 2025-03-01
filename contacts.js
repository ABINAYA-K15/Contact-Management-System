let contacts = [];

function addContact() {
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const event = document.getElementById("event").value;
  const role = document.getElementById("role").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const date = document.getElementById("date").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const topic = document.getElementById("topic").value;
  const type = document.getElementById("type").value;

  if (name && company && event && role && phone && email && address && date && startTime && endTime && topic && type) {
    contacts.push({ name, company, event, role, phone, email, address, date, startTime, endTime, topic, type });
    renderContacts();
    clearForm();
  } else {
    alert("Please fill all fields!");
  }
}

function renderContacts() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const row = `
      <tr>
        <td><a href="details.html" onclick="viewContact(${index})">${contact.name}</a></td>
        <td>${contact.company}</td>
        <td>${contact.phone}</td>
        <td>${contact.type}</td>
        <td>${contact.event}</td>
        <td>${contact.role}</td>
        <td>
          <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
        </td>
      </tr>
    `;
    contactList.insertAdjacentHTML("beforeend", row);
  });
}

function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

function clearForm() {
  document.getElementById("addContactForm").reset();
}

function logout() {
  alert("Logging out...");
  window.location.href = "login.html";
}

function viewContact(index) {
  localStorage.setItem("selectedContact", JSON.stringify(contacts[index]));
}
