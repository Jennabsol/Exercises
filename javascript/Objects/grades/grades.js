// an array of random scores in your JavaScript
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]

// this sorts the array from the lowest to the highest score
scores.sort(function(a, b){return a - b});

// this give me the length of the array 
console.log(scores.length)

// this gives me the first index which is the lowest score
console.log(scores[0])

// the is gives me the last index which is the highest score
console.log(scores[scores.length-1])

// place holder for my grades
let grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
} 

// this loops through my array 
for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
    
    switch (true) {
        case scores[i] > 90:
        grades.A++
        break;

        case scores[i] < 91 && scores[i] > 80:
        grades.B++
        break; 
        
        case scores[i] < 81 && scores[i] > 70:
        grades.C++
        break;

        case scores[i] < 71 && scores[i] > 60:
        grades.D++
        break;

        case scores[i] < 61 && scores[i] > 50:
        grades.F++
        break;
        
        
    }

    
}

//  iterates through the object grades and prints the value of each property to the console.
for (let key in grades) {
    
        let element = grades[key];
        console.log(`${key} ${element}`)

        
    
    
}  
        
console.log(grades)


