const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let password1 = document.getElementById("password1")
let passwordLength = 16
let button = document.querySelector("button")
let copy = document.getElementById("copy")

function generatePasswords() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let newPassword = Math.floor(Math.random() * characters.length)
        password += characters[newPassword]
    }
    password1.style.visibility = 'visible'
    copy.style.visibility = 'visible'
    password1.textContent = password
    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(password)
    })
}
