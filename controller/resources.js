// script.js

const resources = [
    {
        category: "Anxiety",
        title: "What is Anxiety?",
        description: "Learn about the symptoms and causes of anxiety.",
        image: "anxiety.jpg",
        link: "https://www.thementalhealthcoalition.org/resource-library/?resources_category=anxiety-stress"
    },
    {
        category: "Anxiety",
        title: "Anxiety Disorders",
        description: "Learn about the different types of anxiety disorders.",
        image: "anxiety.jpg",
        link: "https://www.thementalhealthcoalition.org/resource-library/?resources_category=anxiety-disorders"
    },
    {
        category: "Depression",
        title: "Understanding Depression",
        description: "Learn about the symptoms and causes of depression.",
        image: "depression.jpg",
        link: "https://www.thementalhealthcoalition.org/resource-library/?resources_category=depression-sadness"
    },
    {
        category: "Depression",
        title: "Depression Treatment",
        description: "Learn about the different treatment options for depression.",
        image: "depression.jpg",
        link: "https://www.thementalhealthcoalition.org/resource-library/?resources_category=depression-treatment"
    },
    {
        category: "Coping",
        title: "Coping with Mental Health",
        description: "Learn how to cope with mental health issues.",
        image: "coping.jpg",
        link: "https://www.thementalhealthcoalition.org/resource-library/?resources_category=coping-skills"
    },
    {
        category: "Parenting",
        title: "Parenting and Mental Health",
        description: "Learn how to support your child's mental health.",
        image: "parenting.jpg",
        link: "https://www.thementalhealthcoalition.org/resource-library/?resources_category=parenting"
    },
    {
        category: "Addiction",
        title: "Understanding Addiction",
        description: "Learn about the signs and symptoms of addiction.",
        image: "addiction.jpg",
        link: "https ://www.thementalhealthcoalition.org/resource-library/?resources_category=addiction"
    },
    {
        category: "Hotlines",
        title: "National Center for Mental Health (NCMH) Hotline",
        description: "Call the NCMH hotline for mental health concerns.",
        image: "hotline.jpg",
        phone: "+632 989-8727"
    },
    {
        category: "Hotlines",
        title: "Crisis Line Philippines",
        description: "Call the Crisis Line Philippines for mental health emergencies.",
        image: "hotline.jpg",
        phone: "+632 893-7603"
    },
    {
        category: "Hotlines",
        title: "Crisis Text Line",
        description: "Text COALITION to 741741 for immediate support.",
        image: "hotline.jpg",
        phone: "741741"
    }
];

const gallery = document.querySelector(".gallery");

resources.forEach(resource => {
    const category = resource.category;
    const title = resource.title;
    const description = resource.description;
    const image = resource.image;
    const link = resource.link;
    const phone = resource.phone;

    const resourceHTML = `
        <li>
            <img src="${image}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
            ${link ? `<a href="${link}">Learn More</a>` : `<a href="tel:${phone}">${phone}</a>`}
        </li>
    `;

    gallery.innerHTML += resourceHTML;
});