console.log("omg u so skibidi")

// gma - 7
// abs-cbn - 2
// tv5 - 5
// ibc - 13
// ptv - 4

rl = require('readline')
rli = rl.createInterface({
    input: process.stdin,
})

rli.on('line',give_Station)

function give_Station(num){
    switch (Number(num)){
        case 7:
            console.log('gma - 7')
            break
        case 2:
            console.log('abs-cbn - 2')
            break
        case 5:
            console.log('tv5 - 5')
            break
        case 13:
            console.log('ibc - 13')
            break
        case 4:
            console.log('ptv - 4')
            break
    }
}