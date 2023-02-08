const passwordField = document.querySelector('input[type="password"]')
const blurry = document.querySelector('.blurry')

passwordField.addEventListener('input', ()=>{
    const passwordLength = +passwordField.value.length;
    const blurValue = (20-passwordLength*2) ;
    blurry.style.filter= `blur(${blurValue}px)`
})