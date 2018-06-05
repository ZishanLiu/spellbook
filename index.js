const form = document.querySelector('form')


const changeHeading = function(ev){
    ev.preventDefault()
    document.querySelector('p.special').textContent = 'yo'
}

form.addEventListener('submit', changeHeading)