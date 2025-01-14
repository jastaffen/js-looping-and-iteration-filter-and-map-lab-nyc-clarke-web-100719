// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver) { return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function(driver) {return driver.name})
}

function exactMatch(drivers, object) {
    let key = Object.keys(object)[0]
    return drivers.filter(function(driver) {
        return driver[key] === object[key]
    });
}

function exactMatchToList(drivers, object) {
    return exactMatch(drivers, object).map(function(driver) {return driver.name});
}
