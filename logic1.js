document.getElementById('validate-btn').addEventListener('click', function () {
    let isValid = true;
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    const addResult = (key, value) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        resultsList.appendChild(listItem);
    };


    const nameInput = document.querySelector('.name');
    if (/^[А-ЯІЇЄҐ]{3,}\s[А-ЯІЇЄҐа-яіїєґ]\.\s?[А-ЯІЇЄҐа-яіїєґ]\.\s?$/.test(nameInput.value.trim())) {
        nameInput.classList.remove('error-field');
    } else {
        nameInput.classList.add('error-field');
        isValid = false;
    }


    const phoneInput = document.querySelector('.phone');
    if (/^\(380\)-\d{3}-\d{2}-\d{2}-\d{2}$/.test(phoneInput.value)) {
        phoneInput.classList.remove('error-field');
    } else {
        phoneInput.classList.add('error-field');
        isValid = false;
    }


    const idCardInput = document.querySelector('.id-card');
    if (/^[А-ЯІЇЄҐ]{2}\s№\d{6}$/.test(idCardInput.value)) {
        idCardInput.classList.remove('error-field');
    } else {
        idCardInput.classList.add('error-field');
        isValid = false;
    }


    const facultyInput = document.querySelector('.faculty');
    if (/^[А-ЯІЇЄҐ]{4}$/.test(facultyInput.value)) {
        facultyInput.classList.remove('error-field');
    } else {
        facultyInput.classList.add('error-field');
        isValid = false;
    }


    const birthdateInput = document.querySelector('.birthdate');
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (dateRegex.test(birthdateInput.value)) {
        const [day, month, year] = birthdateInput.value.split('.').map(Number);
        const isValidDate =
            day >= 1 && day <= 31 &&
            month >= 1 && month <= 12 &&
            year >= 1900 && year <= 2024;

        if (isValidDate) {
            birthdateInput.classList.remove('error-field');
        } else {
            birthdateInput.classList.add('error-field');
            isValid = false;
        }
    } else {
        birthdateInput.classList.add('error-field');
        isValid = false;
    }


    if (isValid) {
        addResult('ПІБ', nameInput.value.trim());
        addResult('Телефон', phoneInput.value);
        addResult('ID-карта', idCardInput.value);
        addResult('Факультет', facultyInput.value);
        addResult('Дата народження', birthdateInput.value);
    }
});