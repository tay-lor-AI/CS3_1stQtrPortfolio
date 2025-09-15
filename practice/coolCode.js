/*for (let i = 2; i <= 20; i+=2){
    console.log(i)
}*/

let fav_things = ["sleep", "eat", "games", "ao3"]
fav_things.push("friends!") //add friends to end

var popped = fav_things.pop() //take the last value

console.log(popped) //print "friends!"
console.log("---------------------")


for(let i=0; i<fav_things.length; i++){
    console.log(fav_things[i])
}

console.log("---------------------")

var shifted = fav_things.shift() //remove "sleep"

for(let i=0; i<fav_things.length; i++){
    console.log(fav_things[i])
}

console.log("---------------------")
fav_things.unshift("school") //add school to start

for(let i=0; i<fav_things.length; i++){
    console.log(fav_things[i])
}
/*
for(let i=0; i<fav_things.length; i++){
    console.log(fav_things[i])
}

for(thing of fav_things) {
    console.log(thing);
}

i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}

i = 1;
do {
    console.log(i);
    i++;
} while (i <=3)
 */