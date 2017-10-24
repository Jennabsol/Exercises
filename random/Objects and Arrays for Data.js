// Copy this entire code example into a Quokka project
const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]

// // how many times did it rain more than 6.0 inches in a month

// let = numberOfTimes = 0

// for (var year = 0; year < RainfallDatabase.length; year++) {
//     var currentyear = RainfallDatabase[year];
    
//     for (var month = 0; month < currentyear.length; month++) {
//         var currentmonth = currentyear[month];

//         if (currentmonth > 6.0) {
//             numberOfTimes++
            
            
//         }
        
//     }
// }
// numberOfTimes
// Find out how much total rain has fallen over last 10 years
// const allRainfall = RainfallDatabase.reduce(
//   function(currentSet, nextSet) {
//     return currentSet.concat(nextSet)
//   }
// ).reduce(
//   function(total, monthlyRainfall) {
//     return total + monthlyRainfall
//   }
// )

// console.log(allRainfall)


// What is total Rainfall per year
conts = totalPerYear = []
for (let year = 0; year < RainfallDatabase.length; year++) {
    let currentyear = RainfallDatabase[year];
    let sumRainfall = 0


    

    for (let month = 0; month < currentyear.length; month++) {
        sumRainfall += currentyear[month];
        
    }
    totalPerYear.push(sumRainfall)


    
}
totalPerYear 