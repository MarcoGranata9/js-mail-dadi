const userEmail = prompt("Inserisci la tua e-mail")
// console.log(userEmail)

const emailList = ["pippo@gmail.com", "pinco@gmail.com", "pallino@gmail.com", "pluto@gmail.com"]

let flag = false
for (let i = 0; i < emailList.length; i++) {

    let emailListRead = emailList[i]
    console.log(emailListRead)
    if (userEmail === emailListRead) {
        flag = true
        console.log(flag)
    }
}

if (flag === true) {
    console.log("LOGGATO!")
} else {
    console.log("REGISTRATI!")
}  