class Model {
    constructor(name){
        this.name = name;
    }

    static hello(){
        return "this is part of Model";
    }
}

class Bus extends Model {
    constructor(name){
        super(name);
    }

    bye(){
        console.log(`${this.name} is a bus`);
    }
}
const b1 = new Bus("Volvo");

b1.bye();
console.log(Model.hello());