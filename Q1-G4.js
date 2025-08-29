rl = require('readline');
rli = rl.createInterface({
    input: process.stdin,
});

rli.on('line',greet);

function greet(greeting){
    switch (String(greet)){
        case "HELLO":
            console.log('ENGLISH');
            break;
        case "MABUHAY":
            console.log('FILIPINO');
            break;
        case "HOLA":
            console.log('SPANISH');
            break;
        case "HALLO":
            console.log('GERMAN');
            break;
        case "BONJOUR":
            console.log('FRENCH');
            break;
        case "CIAO":
            console.log('ITALIAN');
            break;
        case "ZDRAVSTUJTE":
            console.log('RUSSIAN');
            break;
        default:
            console.log('UNKNOWN');
            break;
    }
}