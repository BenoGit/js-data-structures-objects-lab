// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]: value});
    
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key, value){
    let NewDriver = Object.assign({}, driver);
    delete NewDriver.name;
    return NewDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver.name;
    return driver;
}

