const button = document.querySelector('button')

button.addEventListener('click', changeHeading)
function changeHeading(){
    document.querySelector('p.special').textContent = 'yo'
}
