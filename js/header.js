// Universal Header Content (Replace this with your desired header content)
const headerContent = `
<nav class="navbar">
<div class="logo">
<a href="#"><img src="images/header-image.jpeg" alt="logo-image" height="70px" width="200px"></a>
<p id="name" style="display: inline;">Retro Sale</p>
</div>
<ul class="nav-links">
  <li><a href="index.html">Home</a></li>
  <li><a href="About.html">About</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
</nav>
`;

// Function to create and insert the header
function createUniversalHeader() {
  const headerContainer = document.getElementById("universal-header");
  headerContainer.innerHTML = headerContent;
}

// Call the function to create the header when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createUniversalHeader);
