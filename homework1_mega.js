const button = document.getElementById("button")

const changeContents = function(){
    const heading = document.getElementById("heading")
    const newheading = document.getElementById("input")
    heading.textContent = newheading
}

button.addEventListener('click',changeContents)