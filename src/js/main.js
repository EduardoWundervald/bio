// This file contains the JavaScript code for the website. It handles the dynamic aspects of the site, such as loading the procedures from the JSON file and displaying them on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    fetchProcedures();
});

function fetchProcedures() {
    fetch('./data/procedures.json')
        .then(response => response.json())
        .then(data => displayProcedures(data))
        .catch(error => console.error('Error fetching procedures:', error));
}

function displayProcedures(procedures) {
    const catalogContainer = document.getElementById('catalog');
    procedures.forEach(procedure => {
        const procedureElement = document.createElement('div');
        procedureElement.classList.add('procedure');

        procedureElement.innerHTML = `
            <h3>${procedure.name}</h3>
            <p>Price: $${procedure.price}</p>
            <p>${procedure.summary}</p>
            <a href="https://wa.me/yourwhatsappnumber" class="contact-button">Contact via WhatsApp</a>
            <a href="https://instagram.com/yourinstagramhandle" class="contact-button">Contact via Instagram</a>
        `;

        catalogContainer.appendChild(procedureElement);
    });
}