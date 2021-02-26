//Cria um array e filtra os falores :>

/*const randomNubers = [36, 99, 37, 63]
const numbersGreaterThan37 = randomNubers.filter(item => item > 37)
console.log({ numbersGreaterThan37, randomNubers })*/

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUser = users.filter(user => user.premium)

console.log(premiumUser)