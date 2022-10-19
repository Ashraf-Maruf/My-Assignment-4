// 1. Problem solving

function radianToDegree(radian) {
    const radianPi = Math.PI;    
    if (Number.isFinite(radian)) {
        const radianResult = ((radian * 180) / radianPi).toFixed(2);
        return radianResult;
    }
}


// // 2. Problem solving

function isJavaScriptFile(string) {
    const fileName = '.js';
    if (typeof string !== 'string') {
        return 'it is not a number, please enter the string file name';
    } else if (string.endsWith(fileName)) {
        return true;
    }
    else {
        return false;
    }
}
const fileNameExtensions = '.js';
const fileNameResult = isJavaScriptFile(fileNameExtensions);
console.log(fileNameResult);


// 3. Problem solving

function oliPrice(diesel, petrol, octane) {

    const dieselOli = 114 * diesel;
    const petrolOli = 130 * petrol;
    const octaneOli = 135 * octane;

    if(Number.isFinite(diesel) && Number.isFinite(petrol) && Number.isFinite(octane)){
        const totalPriceOli = dieselOli + petrolOli + octaneOli;
        return totalPriceOli;
    }
    else{
        return 'Its a number, not a string, Please enter the number';
    }
}



// 4. Problem solving

function publicBusFare(publicBus) {

    if (Number.isFinite(publicBus)) {
        let totalPublicBusPrice;
        if (publicBus >= 50) {

            let MicroBus = publicBus % 50;

            if (MicroBus >= 11) {
                let peoplePublicBus = MicroBus % 11;
                totalPublicBusPrice = peoplePublicBus * 250;
            } else {
                totalPublicBusPrice = MicroBus * 250;
            }

        } else {

            if (publicBus >= 11) {
                let peoplesPublicBus = publicBus % 11;
                totalPublicBusPrice = peoplesPublicBus * 250;
            } else {
                totalPublicBusPrice = publicBus * 250;
            }
        }
        return totalPublicBusPrice;

    } else {
        return 'Its a number, not a string, Please enter the number';
    }
}


// 5. Problem solving

function isBestFriend(friendOne, friendTwo) {

    if (typeof friendOne.name === "string" && typeof friendTwo.name === "string" && typeof friendOne.friend === "string" && typeof friendTwo.friend === "string"
    ) {
        if (friendOne.name === friendTwo.friend && friendOne.friend === friendTwo.name) {

            return true;

        } else {

            return false; 
        }
    }
    else {

        return 'it is not a number, please enter the string';

    }
}

