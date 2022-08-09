const $ = document;
let btnConvert = $.querySelector('.btnConvert')
let btnReset = $.querySelector('.btnReset')
let converter = $.querySelector('.converter')
let result = $.querySelector('.result')
btnConvert.addEventListener('click', function () {
    if (converter.value === '') {
        result.innerHTML = 'insert correct value'
    } else {
        let userResult = (converter.value * 1.8) + 32
        result.innerHTML = converter.value + ' °C to ' + userResult + ' °F ';
    }
})
btnReset.addEventListener('click', function () {
    converter.value = '';
    result.innerHTML = '';
})
