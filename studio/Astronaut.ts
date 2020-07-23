import {Payload} from './Payload';

export class Astronaut implements Payload{
    name:string;
    massKg: number;

    constructor(MassKg:number, name:string){
        this.name = name;
        this.massKg = MassKg;
    }
}