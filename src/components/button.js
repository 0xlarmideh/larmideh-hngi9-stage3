 // Toggle Navbar
    const btn = document.querySelector(".nav-btn")
    const x = document.querySelector(".links");
    const y = document.querySelector(".connect-wallet");
    x.style.display = "none";
    y.style.display = "none";
  btn.addEventListener("click",
    function toggleNav() {
      
      
    if (x.style.display === "none" && y.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
    }
  )