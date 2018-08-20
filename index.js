<<<<<<< HEAD
const button = document.querySelector('button')

const changeContents = function(){
    const heading = document.getElementById("head2")
    heading.textContent = 'done !'
}


button.addEventListener('click',changeContents)
=======
const form = document.querySelector('form')


const changeHeading = function(ev){
    ev.preventDefault()
    const f = ev.target
    const spellName = f.spellName1.value
    const spellName2 = f.spellName2.value
    document.querySelector('#spells').innerHTML += `<p>` + spellName+`</p>` 
    document.querySelector('#spells').innerHTML += `<p>` + spellName2 + `</p>`

    f.reset()
}


form.addEventListener('submit', changeHeading)
>>>>>>> f54be45... homework2 basic
