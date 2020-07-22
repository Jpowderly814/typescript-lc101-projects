// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
//let spacecraftName: string = 'Determination';
//let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToMoon: number =  384400;
//let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars
let milesToMars: number;
//milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars: number;
//hoursToMars = milesToMars/speedMph;
let daysToMars: number;
//daysToMars = hoursToMars/24;

// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} would take ${daysToMars} to get to Mars.`);


// Part 3: Create a Function ("getDaysToLocation")
let daysToLocation: number;
/*function getDaysToLocation(kilometersAway:number): number {
   let hoursToLocation:number;
   let milesAway:number;
   milesAway = kilometersAway *milesPerKilometer;
   hoursToLocation = milesAway/speedMph;
   daysToLocation = hoursToLocation/24;
   return daysToLocation;
}
*/

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

//console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMoon)} to get to Mars.`);


// Part 4: Create a Spacecraft Class

class Spacecraft {
    
    name: string;
    speedMph: number;
    constructor(spacecraftName: string, speed:number) {
        this.name = spacecraftName;
        this.speedMph = speed;
    }
    milesPerKilometer: number = 0.621;

    getDaysToLocation(kilometersAway:number): number {
        let hoursToLocation:number;
        let milesAway:number;
        milesAway = kilometersAway * this.milesPerKilometer;
        hoursToLocation = milesAway/this.speedMph;
        daysToLocation = hoursToLocation/24;
        return daysToLocation;
     }

     printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}


// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

/*console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} to get to Mars.`);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMoon)} to get to the Moon.`);
*/
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToMoon));