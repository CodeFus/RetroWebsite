// Universal Footer Content (Replace this with your desired footer content)
const footerContent = `
<footer>
<div class="outer">
<div class="footer-content"><!--
    <div class="footer-logo">
        <img src="/images/robot.jpeg" alt="Your Logo" height="200px">
    </div>--><!--
    <div class="footer-links">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            
        </ul>-->
    </div>
    <div class="footer-social">
        <!-- Add your social media icons or links here -->
        <a href="https://www.facebook.com/login/" class="social-icon"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/accounts/login/" class="social-icon"><i class="fab fa-instagram"></i></a>
        <!-- Add more social media icons or links as needed -->
    </div>
</div>
<div class="footer-bottom">
    <p>&copy; 2023 Arvinder Singh Mehra (200556037) . All rights reserved.</p>
</div>
</div>
</footer>
`;

// Function to create and insert the footer
function createUniversalFooter() {
  const footerContainer = document.getElementById("universal-footer");
  footerContainer.innerHTML = footerContent;
}

// Call the function to create the footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createUniversalFooter);
