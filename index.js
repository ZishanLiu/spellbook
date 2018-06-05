const button = document.querySelector('button')

button.addEventListener('click', changeHeading)
function changeHeading(){
    document.querySelector('h1').textContent = 'yo'
}
