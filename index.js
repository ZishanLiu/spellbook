const form = document.querySelector('form')


const changeHeading = function(ev){
    ev.preventDefault()
    const f = ev.target
    const spellName = f.spellName1.value
    document.querySelector('#spells').innerHTML += `<p>` + spellName+`</p>` 
    document.querySelector('#spells').innerHTML += `<p>` + spellName2 + `</p>`

    f.reset()
}

form.addEventListener('submit', changeHeading)