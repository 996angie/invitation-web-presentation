(function () {
    emailjs.init("2jiy9zHgh7JUdMpgx");
})();

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const eventType = document.getElementById("event").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !eventType || !email || !message) {
        formMessage.textContent = "Popuni sva polja.";
        return;
    }

    formMessage.textContent = "Upit je spreman za slanje.";

    emailjs.send("service_nhihlga", "template_cv458li", {
        name: name,
        email: email,
        message: message,
        title: eventType
    })
        .then(() => {
            document.getElementById("formMessage").textContent = "Poruka poslata ✅";
            setTimeout(() => {
                this.reset();
            }, 2000)
        })
        .catch(() => {
            document.getElementById("formMessage").textContent = "Greška pri slanju ❌";
        });
});