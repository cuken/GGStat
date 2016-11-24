

export class BoardGame {
    //PROPERTIES
    //name of the property : type of property = 'default value if you want'
    id: number;
    title: string;
    bggLink: string;
    image: string;
    minNumPlayers: number;
    maxNumPlayers: number;
    averageGameTime: number;
    owned: boolean;
    lastPayed: Date

    constructor(values: Object ={}) {
        Object.assign(this, values);
    }
}