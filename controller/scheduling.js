import { getPsychiatristById } from '../model/psychiatristsModel.js';

// Business data/logic is now in the model


// Function to format the date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

// Get the doctor's ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const doctorId = urlParams.get('doctorId');

// Find the psychiatrist object based on the ID via model function
const psychiatrist = getPsychiatristById(doctorId);

// Display the doctor's name in the header
if (psychiatrist) {
    document.getElementById('doctor-name').innerText = psychiatrist.name;
} else {
    document.getElementById('doctor-name').innerText = 'Your provider';
}

// Handle form submission
const appointmentForm = document.getElementById('appointment-form');
const confirmationMessage = document.getElementById('confirmation-message');

appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather information from the form
    const patientName = document.getElementById('patient-name').value;
    const patientEmail = document.getElementById('patient-email').value;
    const patientPhone = document.getElementById('patient-phone').value;
    const appointmentDate = document.getElementById('date-select').value;
    const appointmentTime = document.getElementById('time-select').value;

    // Format the date
    const formattedDate = formatDate(appointmentDate);

    // Construct the confirmation message
    confirmationMessage.innerHTML = `
        Your appointment is confirmed! ✅<br>
        Kindly take note of the date and time we agreed: ${formattedDate} at ${appointmentTime}.<br>
        This is the link for your appointment: <a href="#">example link</a><br>
        See you on your agreed upon time 😊! Thank you ❤️!
    `;
    
    // Display the confirmation message
    confirmationMessage.style.display = 'block';
    
    // Optionally, you could clear the form here if needed
    appointmentForm.reset();
});
