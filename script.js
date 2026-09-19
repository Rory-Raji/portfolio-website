// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Error elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;


        // Validate name
        if (name === "") {

            nameError.textContent = "Please enter your name.";
            isValid = false;

        }


        // Validate email
        if (email === "") {

            emailError.textContent = "Please enter your email.";
            isValid = false;

        } else if (!email.includes("@")) {

            emailError.textContent = "Please enter a valid email.";
            isValid = false;

        }


        // Validate subject
        if (subject === "") {

            subjectError.textContent = "Please enter a subject.";
            isValid = false;

        }


        // Validate message
        if (message === "") {

            messageError.textContent = "Please enter a message.";
            isValid = false;

        }


        // Show success message
        if (isValid) {

            successMessage.textContent =
                "Thank you! Your message has been validated successfully.";

            contactForm.reset();

        }

    });

}