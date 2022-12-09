var input = document.querySelector('#options-autoplay-input')
const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

var glide2 = new Glide('#options-autoplay', {
    autoplay: input.value,
    hoverpause: false,
    perView: 3
})

input.addEventListener('input', function (event) {
    glide2.update({
        autoplay: (event.target.value != 0) ? event.target.value : false
    })
})

glide2.mount()
