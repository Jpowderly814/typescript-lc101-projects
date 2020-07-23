import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';
import {Payload} from './Payload';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    massKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass (items: Payload[] ): number{
        let total = 0;
        for (let i=0; i < items.length; i++){
            total += items[i].massKg;
        };//for loop
        return total;
    }//sumMass

    currentMassKg():number{
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload):boolean{
        if(this.currentMassKg()+item.massKg <= this.totalCapacityKg){
            return true;
        }
        else{
            return false;
        }
    }

    addCargo(cargo: Cargo):boolean{
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }
}
 


