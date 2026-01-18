function createUser(e) {
  e.preventDefault(); 
  const username = document.getElementById("newUser").value;
  const password = document.getElementById("newPass").value;
  const email = document.getElementById("newEmail").value;
  const phone = document.getElementById("newPhone").value;
  const user = {
    username: username,
    password: password,
    email: email,
    phone: phone
  };
  localStorage.setItem("currentUser", JSON.stringify(user));
  window.location.href = "login.html";
}
