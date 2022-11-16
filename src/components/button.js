 // Toggle Navbar
  function toggleNav() {
    const x = document.querySelector(".links");
    const y = document.querySelector(".connect-wallet");
    
  if (x.style.display === "none" && y.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
  }