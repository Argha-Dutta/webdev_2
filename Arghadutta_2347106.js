document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const popupText = `Your response has been recorded\nName: ${name}\nEmail: ${email}`;
        alert(popupText);
    });
});
