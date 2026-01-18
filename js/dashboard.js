window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  if (document.getElementById("userName")) {
    if (!userData) {
      
      window.location.href = "signup.html";
    } else {   
      document.getElementById("userName").textContent = userData.username;
      document.getElementById("userEmail").textContent = userData.email;
      document.getElementById("userPhone").textContent = userData.phone;
    }
  }
};
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "signup.html";
}
