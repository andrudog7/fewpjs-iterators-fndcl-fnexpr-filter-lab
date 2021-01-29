// Code your solution here
function findMatching(drivers, string) {
    let results = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return results 
}

function fuzzyMatch(drivers, string) {
    let results = drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
    return results 
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}