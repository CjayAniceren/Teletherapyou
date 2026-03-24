import { getPsychiatrists } from '../model/psychiatristsModel.js';

const psychiatrists = getPsychiatrists();

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
