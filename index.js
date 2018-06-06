const button = document.querySelector('button')

const changeContents = function(){
    const heading = document.getElementById("head2")
    heading.textContent = 'done !'
}


button.addEventListener('click',changeContents)