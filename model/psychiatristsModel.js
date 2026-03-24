export const psychiatrists = [
    {
        id: 1,
        name: "Dr. Maria Santos",
        specialty: "Psychiatrist",
        education: "University of the Philippines, MD",
        graduationYear: "2005",
        workplace: "Makati Medical Center",
        email: "mariasantos@example.com",
        phone: "0917-123-4567",
        image: "../doctor1.jpg"
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
        image: "../doctor2.jpg"
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
        image: "../doctor3.jpg"
    }
];

export function getPsychiatrists() {
    return psychiatrists;
}

export function getPsychiatristById(id) {
    const numericId = Number(id);
    return psychiatrists.find(doc => doc.id === numericId);
}
