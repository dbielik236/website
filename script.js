document.addEventListener('DOMContentLoaded', () => {
  // Function to update navbar attributes based on window size
  const updateNavbarAttributes = () => {
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
      if (window.innerWidth > 768) {
        navbarNav.removeAttribute('data-bs-toggle');
        navbarNav.removeAttribute('data-bs-target');
      } else {
        navbarNav.setAttribute('data-bs-toggle', 'collapse');
        navbarNav.setAttribute('data-bs-target', '#navbarNav');
      }
    }
  };

  // Run the function on page load
  updateNavbarAttributes();

  // Add event listener for window resize
  window.addEventListener('resize', updateNavbarAttributes);
});

const topDiv = document.getElementById("top");
const topTab = document.getElementById("top-tab");
const bottomTopTab = document.getElementById("bottom-top-tab");
const vidDiv = document.getElementById("media");
const vidTab = document.getElementById("media-tab");
const bottomVidTab = document.getElementById("bottom-media-tab");
const calDiv = document.getElementById("calendar");
const calTab = document.getElementById("calendar-tab");
const bottomCalTab = document.getElementById("bottom-calendar-tab");
const aboutDiv = document.getElementById("about");
const aboutTab = document.getElementById("about-tab");
const bottomAboutTab = document.getElementById("bottom-about-tab");
const contDiv = document.getElementById("contact");
const contTab = document.getElementById("contact-tab");
const bookingButton1 = document.getElementById("about-booking-button");
const bookingButton2 = document.getElementById("calendar-booking-button");
const bookingDiv = document.getElementById("booking");

function scroll(div, tab) {
tab.addEventListener("click", () => {
  div.scrollIntoView({ behavior: "smooth" });

});
}

scroll(calDiv, calTab);
scroll(aboutDiv, aboutTab);
scroll(contDiv, contTab);
/* scroll(topDiv, topTab); */
scroll(vidDiv, vidTab);
scroll(calDiv, bottomCalTab);
scroll(aboutDiv, bottomAboutTab);
scroll(topDiv, bottomTopTab);
scroll(vidDiv, bottomVidTab);
scroll(bookingDiv, bookingButton1);
scroll(bookingDiv, bookingButton2);


function updateDownloadAttribute() {
  const download = document.getElementById("download-picture");

  if (window.innerWidth < 1100) {
    document.querySelectorAll("a > img.photos").forEach(img => {
      const anchor = img.parentNode;
      const column = anchor.parentNode;

      column.insertBefore(img, anchor);
      anchor.remove();
    });

    download.innerText = "";
  }
}

// Run on page load
updateDownloadAttribute();

// Run on window resize
window.addEventListener('resize', updateDownloadAttribute);

window.onload = function() {
  emailjs.init("Abm0b8RIpGS0ezhMr"); // Replace with your EmailJS Public Key
};

function sendEmail(event) {
  
  event.preventDefault();

  let form = document.getElementById("contact-form"); // Get the form element
  let responseMessage = document.getElementById("response-message"); // Get the response div


  let templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
  };

  emailjs.send("service_gj83vl5", "template_h8vmcw1", templateParams)
      .then(response => {
          // Hide the form
          form.style.display = "none";
          
          // Show the success message
          
          responseMessage.style.display = "block"; // Make sure the div is visible
          
      })
      .catch(error => {
          responseMessage.innerHTML = "<p style='color: red;'>Error sending email. Please try again.</p>";
          responseMessage.style.display = "block";
      });
}
function mailingList(event) {
  event.preventDefault();

  let form = document.getElementById("mailingList"); // Form ID here should match HTML
  let button = form.querySelector("button"); // Get the button inside the form
  

  let templateParams = {
      email: document.getElementById("mailing-list-email").value,
  };

  emailjs.send("service_gj83vl5", "template_n8j33kz", templateParams)
      .then(response => {
          // Change button text to "Success!" and disable it
          button.textContent = "Success!";
          button.disabled = true;

          // Optional: clear the input field
          document.getElementById("mailing-list-email").value = "";
      })
      
}