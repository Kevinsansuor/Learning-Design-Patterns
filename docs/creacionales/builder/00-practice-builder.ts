class Car {
    public wheels: number = 0;
    public color: string = "fabric color";
    public engine: string = "no engine mount";
    public door: number = 0;
    public maxSpeed: number = 0;
    public brandName: string = "brand not set";

    displayVehicle() {
        return (`
            Vehicle Brand : ${this.brandName},
            Vehicle Color : ${this.color},
            Vehicle motor name : ${this.engine},
            Vehicle maximum doors : ${this.door},
            Vehicle maximum wheels : ${this.wheels},
            Vehicle maximum speed : ${this.maxSpeed} KM/H
            `);
    }
}

class carBuilder {

    // Reservamos en memoria la variable con la forma
    // del objeto Car
    public builtCar: Car;

    // Crea el objeto real en memoria, la va llenando de
    // informacion
    constructor() {
        this.builtCar = new Car();
    }

    // Objetivo, tomar el valor que recibimos en la funcion
    // setter y asignarlo al objeto vehicle
    vehicleSetWheels(wheels: number) {
        this.builtCar.wheels = wheels;
        return this
    }

    // Asignar valor
    // Devolver builder
    vehicleSetEngine(engine: string) {
        this.builtCar.engine = engine;
        return this;
    }

    vehicleSetDoor(door: number) {
        this.builtCar.door = door;
        return this;
    }

    vehicleSetColor(color: string) {
        this.builtCar.color = color;
        return this;
    }

    vehicleSetBrandName(brandName: string) {
        this.builtCar.brandName = brandName;
        return this;
    }

    vehicleSetMaximumSpeed(speed: number) {
        this.builtCar.maxSpeed = speed;
        return this;
    }

    // Puerta de salida
    build() {
        return this.builtCar
    }

}

class Director {
    private builder: carBuilder;

    constructor(builder: carBuilder) {
        this.builder = builder;
    }

    constructSportsCar() {
        this.builder.vehicleSetWheels(4)
            .vehicleSetEngine('V8')
            .vehicleSetColor('Yellow')
            .vehicleSetDoor(2)
            .vehicleSetBrandName('Lamborghini')
            .vehicleSetMaximumSpeed(340);
        return this.builder.build();
    }

    constructNormalCar() {
        this.builder.vehicleSetWheels(4)
            .vehicleSetEngine('V6')
            .vehicleSetColor('White')
            .vehicleSetDoor(4)
            .vehicleSetBrandName('Toyota')
            .vehicleSetMaximumSpeed(180);
        return this.builder.build();
    }
}

// Linea de montaje
function play() {
    const newCar = new carBuilder()
        .vehicleSetWheels(2)
        .vehicleSetEngine('V4')
        .vehicleSetColor('Red')
        .vehicleSetDoor(2)
        .vehicleSetBrandName('Ferrari')
        .vehicleSetMaximumSpeed(320)
        .build();

    console.log(`
        ${newCar.displayVehicle()}
        `);

    console.log(newCar.brandName);

    const newSportCar = new Director(new carBuilder())
        .constructSportsCar();

    console.log(`
        ${newSportCar.displayVehicle()}
        `);

    const newNormalCar = new Director(new carBuilder())
        .constructNormalCar();

    console.log(`
        ${newNormalCar.displayVehicle()}
        `);

}

play();
