const contactForm = document.querySelector('.contactForm')

const membershipForm = document.querySelector('#theForm')

// Harjoitus 1 ja 3
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const comment = document.querySelector('#comment');

    let valid = true;
    document.querySelector('#name').textContent = '';
    document.querySelector('#email').textContent = '';
    document.querySelector('#comment').textContent = '';

    if (name.value.trim() === '') {
        valid = false;
        name.style.border = '1px solid red';
        alert('Nimikenttä ei saa olla tyhjä.');
    } else {
        name.style.border = "";
    }

    if (email.value.length < 6 || email.value.length > 15 || !email.value.includes('@')) {
        valid = false;
        email.style.border = '1px solid red';
        alert('Varmista, että S-posti on 6-15 merkkiä ja sisältää @-merkin.');
    } else {
        email.style.border = 'none';
    }

    if (comment.value.trim() === '' || comment.value.length > 150) {
        valid = false;
        comment.style.border = '1px solid red';
        alert('Kommenttikenttä on pakollinen ja pituus enintään 150 merkkiä');
    } else {
        comment.style.border = "";
    }

    if (valid) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('comment', comment.value);
        alert('Tiedot tallennettu localStorageen!');
    }
});

// Harjoitus 2: Jäsenyyslaskuri
membershipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const membership = parseFloat(document.getElementById("type").value);
    const years = parseInt(document.getElementById("years").value);
    let cost = membership * years;

    if (years > 2) {
        cost *= 0.8;
        alert('Saat 20 % alennuksen!');
    }

    if (years >= 5) {
        cost -= 5;
        alert(' Kaupan päälle 5 € lisäsalennus!');
    }

    document.getElementById("cost").value = cost.toFixed(2) + " €";
    if (discountMessage) alert(discountMessage);
});

// Harjoitus 4: Datan lataaminen localStoragesta
function loadStorage() {
    const name = localStorage.getItem('name') || 'Ei tallennetua nimeä';
    const email = localStorage.getItem('email') || 'Ei tallennettua sähköpostiosoitetta';
    const comment = localStorage.getItem('comment') || 'Ei allennettuja kommentteja';

    document.querySelector('#sessiondata').innerHTML = `
        <table style="width: 100% text-align: left">
            <tr>
                <th>Nimi: </th>
                <td>${name}</td>
            </tr>
            <tr>
                <th>Sähköposti: </th>
                <td>${email}</td>
            </tr>
            <tr>
                <th>Kommentti: </th>
                <td>${comment}</td>
            </tr>
        </table     
    `;
}

window.onload = loadStorage;