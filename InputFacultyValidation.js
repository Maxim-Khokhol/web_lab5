document.querySelector('.faculty').addEventListener('input', function (e) {
    const input = e.target;


    input.value = input.value
        .toUpperCase()
        .replace(/[^А-ЯІЇЄҐ]/g, '');
});
