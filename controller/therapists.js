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

// Create doctor profiles
const doctorsList = document.getElementById('doctors-list');

psychiatrists.forEach(doctor => {
    const doctorCard = document.createElement('div');
    doctorCard.classList.add('doctor-card');

    // Add click event for redirecting to scheduling page
    doctorCard.onclick = function() {
        window.location.href = `scheduling.html?doctorId=${doctor.id}`;
    };

    const doctorImage = document.createElement('img');
    doctorImage.src = doctor.image;

    const doctorInfo = document.createElement('div');
    doctorInfo.classList.add('doctor-info');
    doctorInfo.innerHTML = `
        <h3>${doctor.name}</h3>
        <p><strong>Specialty:</strong> ${doctor.specialty}</p>
        <p><strong>Education:</strong> ${doctor.education}, ${doctor.graduationYear}</p>
        <p><strong>Workplace:</strong> ${doctor.workplace}</p>
        <p class="contact-details"><strong>Contact:</strong> ${doctor.email}, ${doctor.phone}</p>
    `;

    doctorCard.appendChild(doctorImage);
    doctorCard.appendChild(doctorInfo);
    doctorsList.appendChild(doctorCard);
});
