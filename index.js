// Code your solution in this file!
// Function returnFirstTwoDrivers() should return a new array containing the first two drivers from the passed-in array

function returnFirstTwoDrivers(arr) {
    return arr.slice(0,2);
}

// Function returnLastTwoDrivers() should return an array of the last two drivers
function returnLastTwoDrivers(arr) {
    return arr.slice(-2);
}

// selectingDrivers has the `returnFirstTwoDrivers` function to as its first element
// has the `returnLastTwoDrivers` function to as its last element
// allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function createFareMultiplier() should multiply a given value using the created multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Function fareDoubler() doubles fares
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

// Function fareTripler() triples fares
function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

// Function selectDifferentDrivers(arrayOfDrivers, func) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
function selectDifferentDrivers(arr, func) {
    return func(arr);
}