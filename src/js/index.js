const inputText = document.querySelectorAll('.input-text')
const btn = document.querySelector('.btn')
const campoPreenchido = document.querySelector('.campo-preenchido')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    inputText.forEach(input => {
        if (input.value === "") {
            input.classList.add('campo-requered')
            input.nextElementSibling.classList.remove('ativo')
            input.classList.remove('campo-preenchido')
        } else {
            input.classList.remove('campo-requered')
            input.nextElementSibling.classList.add('ativo')
            input.classList.add('campo-preenchido')
        }
    }
    )
})




