const matchDolphin1 = 96
const matchDolphin2 = 108
const matchDolphin3 = 89

const matchKoala1 = 88
const matchKoala2 = 91
const matchKoala3 = 110

const scoreDolphin = (matchDolphin1 + matchDolphin2 + matchDolphin3) / 3;
const scoreKoalas = (matchKoala1 + matchKoala2 + matchKoala3) / 3;

if (scoreDolphin > scoreKoalas){
    console.log('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphin){
    console.log('Koalas win the trophy')
} else {
    console.log('Both win the trophy')
}
