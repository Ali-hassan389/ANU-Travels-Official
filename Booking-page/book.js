document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
 
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const travelers = document.getElementById("travelers").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        if (!name) {
            alert("Please enter your full name.");
            return;
            }
        if (!email) {
            alert("Please enter a valid email address.");
            return;
            }
        if (!phone) {
            alert("Please enter your phone number.");
            return;
            }
        if (!travelers || travelers < 1) {
            alert("Please enter at least 1 traveler.");
            return;
            }
        if (travelers > 10) {
            alert("For groups larger than 10, please contact us directly.");
            return;
            }
        if (!destination) {
            alert("Please select a destination.");
            return;
            }
        if (!date) {
            alert("Please select a travel date.");
            return;
            }
     alert(`Booking Successful!\n\nThank you, ${name}.\nWe have received your request for ${travelers} person(s) to ${destination} on ${date}.\n\nConfirmation will be sent to ${email}.`);
            
            bookingForm.reset();
        });
    }
});