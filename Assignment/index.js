// Function to greet user with a prompt box
function greetUser() {
    // Display a prompt box asking the user to enter their name
    var userName = prompt("Please enter your name:");
    // Check if the user entered a name and did not cancel the prompt
    if (userName !== null && userName !== "") {
        // Display a welcome message on the page with the user's name
        document.getElementById("welcomeMessage").textContent = "Hello, " + userName + "! Welcome to Memphis Redbirds.";
    } else {
        // If the user cancels the prompt or leaves it empty, display a default welcome message
        document.getElementById("welcomeMessage").textContent = "Welcome to Memphis Redbirds!";
    }
}

// Function to change link color to yellow on hover
function changeLinkColor() {
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            this.style.color = "yellow";
        });
        link.addEventListener("mouseleave", function() {
            this.style.color = "white";
        });
    });
}
// Function to set the tagname dynamically on each page load
function setTagName() {
    // Get the element with the ID "tagName" and set its text content
    var tagName = document.getElementById("tagName");
    tagName.textContent = "flashmobster"; // Set tagname content
}

// Event listener for when the window loads
window.onload = function() {
    // Check if the current page is the homepage (index.html)
    if (window.location.pathname.endsWith("index.html")) {
        // Call the greetUser function when the window loads only on the homepage
        greetUser();
    }
    // Get the element with the ID "tagName" and set its text content
    var tagName = document.getElementById("tagName");
    tagName.textContent = "YourTagName"; // Set tagname content
    
    // Change link color on hover
    changeLinkColor();

    //Call the setTagName function when the window loads
    setTagName();
};

// Function to generate a random number for the email subject
function generateRandomNumber() {
    // Generate a random number between 0 and 9999
    return Math.floor(Math.random() * 10000);
}

// Function to handle form submission
function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user inputs from the form
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if the email and message fields are not empty
    if (email !== "" && message !== "") {
        // Generate a subject line for the email containing a random number
        var subject = "Message #" + generateRandomNumber();
        // Construct the body of the email including the user's email and message
        var body = "From: " + email + "\n\n" + message;

        // Open the default email client with pre-filled fields
        window.location.href = "mailto:exampleredbirdss@redbirds.com?cc=redbirdscc@example.com&subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        // Replace the form with a success message
        var form = document.getElementById("contactForm");
        form.innerHTML = "<p>Your message has been sent successfully!</p>";
        
        // Return to the homepage after a successful message with a 5-second delay
        setTimeout(function() {
            window.location.href = "index.html";
        }, 5000);
    } else {
        // Display an error message if the email or message fields are empty
        document.getElementById("errorMessage").style.display = "block";
    }
}


// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", handleSubmit);

