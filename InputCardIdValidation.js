document.querySelector('.id-card').addEventListener('input', function (e) {
    const input = e.target;
    let value = input.value.toUpperCase();


    value = value.replace(/[^А-ЯІЇЄҐ0-9№ ]/g, '');


    let letters = value.replace(/[^А-ЯІЇЄҐ]/g, '').substring(0, 2);
    let hasNumberSign = value.includes('№');
    let numericPart = value.replace(/[^0-9]/g, '').substring(0, 6);


    if (letters.length === 2 && !hasNumberSign) {
        value = letters + ' №' + numericPart;
    } else if (letters.length < 2) {
        value = letters;
    } else {
        value = letters + (hasNumberSign ? ' №' : '') + numericPart;
    }

    input.value = value;
});