class Rocket{
    //name states first
    constructor(
        fuelType,
        weight,
        power
    ){ //substaniate states 
        this.fuelType = fuelType;
        this.weight=weight;
        this.power=power;

    }
    //methods
    launch(){
        console.log("launch sequence started");
        alert("launch sequence Started");
        return true;
    }

    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
        return true;
    }

    detatchThruster(thrusterID){
        console.log("detatchThruster sequence started");
        alert("thruster "+thrusterID + " has been detatched");
        return true;

    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl=oxyLvl;
        this.launchDateDay = launchDateDay
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts= numOfAstronauts;
    }
    displayMissionParameters(){
        alert("the spacecraft " + this.spaceCraft+ " will launch on the " + this.launchDateDay +" of " +
        this.launchDateMonth + " " + this.launchDateYear + " with an O2 level of " + this.oxyLvl+"%")
    }

    launch(){
        console.log("launch sequence started");
        alert("launch sequence Started");
        
    }
    
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();
}
function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.displayMissionParameters();

}
