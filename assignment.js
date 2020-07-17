// Feet to Mile 

function feetToMile(feet) {
    let mile = feet * 0.000189394;
    return mile;
}

let totalMile = feetToMile(/*UserInput*/);
let summeryOfmile= "Total :" + " " + totalMile+ " " + "mile" ;
console.log(summeryOfmile);

//woodCalculator 1cf 3cf 5cf

function woodCalculator(chair, table, bed) {
    let woodChair = 1 * chair;
    let woodTable = 3 * table;
    let woodBed = 5 * bed;
    let totalWood = woodChair + woodTable + woodBed;
    return totalWood; 
}

let totalWoodYourNeed = woodCalculator(/*UserInput*/);
let summeryOfWood = "Total Wood Your Need:" + " " + totalWoodYourNeed +" " + "cubic feet" ;
console.log(summeryOfWood);

//brickCalculator

function brickCalculator(floor) {
    const firstTenFloorHeight = 15,
        secondTenFloorHeight = 12,
        towentyUpFloorHeight = 10,
        brickFerFeet = 1000;
    let totalBrick,
        afterFirstTenFloor,
        towentyUpFloor,
        brickOfFirstTenFloor,
        brickOfSecondTenFloor,
        brickOfTowentyUpFloor;

    if ( floor <= 0 ){
        const talk = "Hey,this is not bulding,minimum one floor this is a bulding."
        return talk;
    }
    else if ( floor >= 1 && floor <= 10 ){
        totalBrick = floor * firstTenFloorHeight * brickFerFeet;
        return totalBrick;
    }
    else if( floor > 10 && floor <= 20 ) {
        afterFirstTenFloor = floor -10;
        brickOfSecondTenFloor = afterFirstTenFloor * secondTenFloorHeight * brickFerFeet;
        brickOfFirstTenFloor = 10 * firstTenFloorHeight * brickFerFeet;
        totalBrick = brickOfSecondTenFloor + brickOfFirstTenFloor;
        return totalBrick;
    }
    else if( floor > 20 ){
        towentyUpFloor =  floor - 20 ;
        brickOfFirstTenFloor = 10 * firstTenFloorHeight * brickFerFeet;
        brickOfSecondTenFloor = 10 * secondTenFloorHeight * brickFerFeet;
        brickOfTowentyUpFloor = towentyUpFloor * towentyUpFloorHeight * brickFerFeet;
        totalBrick = brickOfFirstTenFloor + brickOfSecondTenFloor + brickOfTowentyUpFloor;
        return totalBrick;
    }
}

let totalBrickOnYourBulding = brickCalculator(/*UserInput*/);
let summeryOfBrick = "Total Brick need make your bulding:" + " " + totalBrickOnYourBulding + " " + "pcs";
console.log(summeryOfBrick);

//tinyFriend
function tinyFriend(friends) {
    let length = friends.length; 
    let tinyFriendName = friends[0];
        for (let i = 0; i < length; i++) {
            if ( friends[i].length < tinyFriendName.length ) { 
                tinyFriendName = friends[i]; 
            }
        }
    return tinyFriendName;
}

let tinyFriendsName = tinyFriend([/*UserInput*/]); 
let summeryTinyFriendName = "Tiny Friend Name:"+ " " + tinyFriendsName;
console.log(summeryTinyFriendName);
