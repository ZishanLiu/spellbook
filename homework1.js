const button = document.querySelector('button')

const changeContents = function(){
    const heading = document.querySelector('h1')
    heading.textContent = 'done !'
}

button.addEventListener('click',changeContents)