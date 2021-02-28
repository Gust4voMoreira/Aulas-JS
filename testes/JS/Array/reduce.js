// 

/*const numbers = [1, 2, 3]
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)
console.log(sumResult)*/

const phaseScores = [
    { name: 'Vinicius C.', score: 337},
    { name: 'Roger M.', score: 43},
    { name: 'Alfredo B.', score: 234},
    { name: 'Pedro H.', score: 261},
    { name: 'Ana P.', score: 491},
    { name: 'Vinicius C.', score: 167},
    { name: 'Roger M.', score: 137},
    { name: 'Alfredo B.', score: 135},
    { name: 'Ana P.', score: 359},
    { name: 'Pedro H.', score: 133}
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger M.') {
        accumulator += phaseScore.score
    }
    return accumulator
}, 0)
console.log(rogerScore)