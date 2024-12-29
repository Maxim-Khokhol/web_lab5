document.querySelector('.phone').addEventListener('input', function (e) {
    const input = e.target;
    const errorElement = document.querySelector('.operator-error');
    const validPrefixes = [
        '38031', '38032', '38033', '38034', '38035', '38036', '38038',
        '38041', '38043', '38044', '38045', '38046', '38039', '38020',
        '38089', '38094', '38092', '38091', '38067', '38068', '38096',
        '38097', '38098', '38070', '38700', '38090', '38900', '38063',
        '38073', '38093', '38050', '38066', '38095', '38099'
    ];

    let value = input.value.replace(/\D/g, '');
    errorElement.style.display = 'none';


    if (value.length >= 3 && value.substring(0, 3) !== '380') {
        errorElement.textContent = 'Український номер повинен починатися з 380';
        errorElement.style.display = 'inline';
        input.value = '';
        return;
    }

    if (value.length > 5) {
        const currentPrefix = value.substring(0, 5);
        const isValidPrefix = validPrefixes.includes(currentPrefix);

        if (!isValidPrefix) {
            errorElement.textContent = 'Такого оператора не існує';
            errorElement.style.display = 'inline';
            value = value.substring(0, 5);
        }
    }

    if (value.length <= 3) {
        value = value.replace(/(\d{1,3})/, '($1');
    } else if (value.length <= 6) {
        value = value.replace(/(\d{3})(\d{1,3})/, '($1)-$2');
    } else if (value.length <= 8) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,2})/, '($1)-$2-$3');
    } else if (value.length <= 10) {
        value = value.replace(/(\d{3})(\d{3})(\d{2})(\d{1,2})/, '($1)-$2-$3-$4');
    } else {
        value = value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})(\d{1,2})/, '($1)-$2-$3-$4-$5');
    }

    input.value = value;
});


