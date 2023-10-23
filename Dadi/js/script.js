
let computerNum = Math.floor(Math.random() * 6) + 1;
let userNum = Math.floor(Math.random() * 6) + 1;
console.log(computerNum, userNum)

if (computerNum === userNum) {
    console.log("PAREGGIO")
} else if (computerNum < userNum) {
    console.log("HAI VINTO! :-)")
} else if(computerNum > userNum) {
    console.log("HAI PERSO! :'(")
}