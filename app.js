const btn = document.querySelector('.form')

const input = document.querySelector('.input')

const error = document.querySelector('.err-msg')
// console.log(error);

btn.addEventListener('submit',  (e) => {
    console.log('submitted');
    if (input.value == ''){
        // alert('input is empty');
        error.style.display = 'block'
        input.style.borderColor = 'rgba(241, 59, 59, 0.877)';
        setTimeout(() => {
            error.style.display = 'none'
            input.style.borderColor = 'hsl(0, 0%, 59%)';
        }, 3000)
    }

    e.preventDefault();
})