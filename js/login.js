document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); 
      const userData = JSON.parse(localStorage.getItem("currentUser"));
      const username = document.getElementById("loginUser").value;
      const password = document.getElementById("loginPass").value;
      if(userData && username === userData.username && password === userData.password) {
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("errorMsg").textContent = "Username or password is incorrect!";
      }
    });