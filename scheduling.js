// Sample psychiatrist data (You can adjust this data as necessary)
const psychiatrists = [
    {
        id: 1,
        name: "Dr. Maria Santos",
        specialty: "Psychiatrist",
        education: "University of the Philippines, MD",
        graduationYear: "2005",
        workplace: "Makati Medical Center",
        email: "mariasantos@example.com",
        phone: "0917-123-4567",
        image: "doctor1.jpg"
    },
    {
        id: 2,
        name: "Dr. John Cruz",
        specialty: "Clinical Psychologist",
        education: "Ateneo de Manila University, PhD",
        graduationYear: "2010",
        workplace: "Asian Hospital and Medical Center",
        email: "johncruz@example.com",
        phone: "0927-987-6543",
        image: "doctor2.jpg"
    },
    {
        id: 3,
        name: "Dr. Anna Lee",
        specialty: "Therapist",
        education: "De La Salle University, MS",
        graduationYear: "2012",
        workplace: "St. Luke's Medical Center",
        email: "annalee@example.com",
        phone: "0932-555-7890",
        image: "doctor3.jpg"
    }
];

// Function to format the date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

// Get the doctor's ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const doctorId = urlParams.get('doctorId');

// Find the psychiatrist object based on the ID
const psychiatrist = psychiatrists.find(doc => doc.id == doctorId);

// Display the doctor's name in the header
if (psychiatrist) {
    document.getElementById('doctor-name').innerText = psychiatrist.name;
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
