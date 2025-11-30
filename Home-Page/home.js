
document.addEventListener("DOMContentLoaded", function() {
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('emailInput');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const emailValue = emailInput.value.trim();

            if (emailValue !== "") {
                alert("You are successfully subscribed!");
                emailInput.value = '';
            } else {
                alert("Please fill out the email field.");
            }
        });
    }
})