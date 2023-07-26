// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (() => {
    return [drivers[0], drivers[1]];
})

const returnLastTwoDrivers = (() => {
    return [drivers[2], drivers[3]];
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return function (fare) {
        return multiplier * fare;
    }
}

const doubler = createFareMultiplier(2);

function fareDoubler (fare) {
    return doubler(fare);
}

const tripler = createFareMultiplier(3);

function fareTripler (fare) {
    return tripler(fare);
}


function selectDifferentDrivers(arrayOfDrivers, func) {
    arrayOfDrivers = drivers;
    return func(arrayOfDrivers);
}

