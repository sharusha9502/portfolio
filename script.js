// Smooth scrolling to target section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// Get references to the elements
const navbarContent = document.getElementById('navbarContent');

// Function to show navbar content
function showNavbarContent() {
  navbarContent.classList.add('show');
}

// Function to hide navbar content
function hideNavbarContent() {
  navbarContent.classList.remove('show');
}

// Show navbar content initially
showNavbarContent();

// Hide navbar content after 5 seconds (5000 milliseconds)
setTimeout(() => {
  hideNavbarContent();
}, 5000);

const scriptURL = 'https://script.google.com/macros/s/AKfycbzm9MUzgi0Eo-2fZneUCZInlhBtLOIFx6CToSd09t-qKkUqKmoVE65c5MWgicJ3X0LR/exec'
			const form = document.forms['contactform']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			});

