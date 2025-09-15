
console.log("Exersise 1")
for (let number = 1; number <= 3; number++){
    console.log(number);
}

console.log("Exersise 2")
let even = ""
for(let number = 2; number <= 20; number += 2){
    even = even + number + " "
}
console.log(even)

console.log("Exersise 3")
let friends = ["elle", "faith", "hope"]
console.log(friends)

console.log("Last friend in list:", friends[friends.length - 1])

friends.push("bettina")
friends.unshift ("rei")

console.log("After adding:", friends)

friends.pop() //or remove for last
console.log("After removing:", friends)