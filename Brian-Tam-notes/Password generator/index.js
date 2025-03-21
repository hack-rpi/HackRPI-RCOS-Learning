const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
function storeNumber(){
    var number = document.getElementById("password").value;

    var password = "";
    for(let i = 0; i < number; ++i){
        const randomIndex = Math.floor(Math.random() * letters.length);
        const letter = letters[randomIndex];
        password += letter;
    }
    document.getElementById("outputField").value = password;

}