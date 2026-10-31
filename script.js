// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const successMessage = document.getElementById("successMessage");

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            "",
            message
        ].join("\n");
        const mailto = `mailto:ifeoluwaraji7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
        successMessage.textContent =
            "Your email app should open with your message ready. Please review and send it there.";

    });

}