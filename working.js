grades = [90, 88, 99, 98, 97]

sum = 0;
lowest = grades[0];
highest = grades[0];
for (let i = 0; i < grades.length; i++){
    sum += grades[i]
    if (lowest > grades[i]){
        lowest = grades[i];
    }
    if (highest < grades[i]){
        highest = grades[i];
    }
}
console.log(sum)
let ave = sum/grades.length
console.log("average: " + ave)
console.log("highest: " + highest)
console.log("lowest: " + lowest)

//shortcuts
/*
console.log(Math.min(...grades))
console.log(Math.max(...grades))
grades.push(100,20)
grades.sort((a,b) => a-b)
console.log(grades)
*/

for (let i = 0; i < grades.length; i++){
    for (let j = i+1; j < grades.length; j++)
    {
        if (grades[i] > grades[j]){
            let skibidi = grades[i];
            grades[i] = grades[j]
            grades[j] = skibidi
        }
    }
}

for (let i = 0; i < grades.length; i++){
    console.log(grades[i])
}