document.querySelector('.birthdate').addEventListener('input', function (e) {
    const input = e.target;
    const errorElement = document.querySelector('.error');
    let value = input.value.replace(/\D/g, '');


    if (value.length >= 1) {
        if (value[0] > '3') value = '3' + value.substring(1);
    }
    if (value.length >= 2) {
        if (value.substring(0, 2) > '31') value = '31' + value.substring(2);
    }


    if (value.length >= 3) {
        if (value[2] > '1') value = value.substring(0, 2) + '1' + value.substring(3);
    }
    if (value.length >= 4) {
        const month = value.substring(2, 4);
        if (month > '12') value = value.substring(0, 2) + '12' + value.substring(4);
    }


    if (value.length >= 5) {
        const year = value.substring(4, 8);
        if (year.length === 4) {
            if (year < '1900') value = value.substring(0, 4) + '1900';
            if (year > '2024') value = value.substring(0, 4) + '2024';
        }
    }


    if (value.length <= 2) {
        value = value.replace(/(\d{1,2})/, '$1');
    } else if (value.length <= 4) {
        value = value.replace(/(\d{2})(\d{1,2})/, '$1.$2');
    } else if (value.length <= 8) {
        value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1.$2.$3');
    }

    input.value = value;


    const [day, month, year] = value.split('.').map(Number);
    const isValidDate =
        day >= 1 && day <= 31 &&
        month >= 1 && month <= 12 &&
        year >= 1900 && year <= 2024;

    if (!isValidDate || value.length < 10) {
        errorElement.style.display = 'inline';
    } else {
        errorElement.style.display = 'none';
    }
});