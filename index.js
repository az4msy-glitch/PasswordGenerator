const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById('passOne')
let pass2El = document.getElementById('passTwo')

function passGenerator() {
    let pass1 = ""
    let pass2 = ""
    
    for (let i=0; i<16; i++){
        let char1 = getRandomCh()
        let char2 = getRandomCh()
        pass1 += char1
        pass2 += char2
    }

    function getRandomCh() {
        let randInt = Math.floor(Math.random()*characters.length)
        return characters[randInt]
    }
    pass1El.textContent = pass1
    pass2El.textContent = pass2
}
