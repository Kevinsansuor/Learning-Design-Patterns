class Computer {
    public cpu: string = "cpu not set";
    public ram: string = "ram not set";
    public storage: number = 0;
    public gpu?: string;

    displayInfo() {
        console.log(`
            CPU: ${this.cpu},
            RAM: ${this.ram},
            Storage: ${this.storage}GB,
            GPU: ${this.gpu ?? 'Not included'}`
        );
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCpu(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRam(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: number): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGpu(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build() {
        return this.computer;
    }
}

function main() {
    const basicComputer = new ComputerBuilder()
        .setCpu("Intel i5")
        .setRam("8GB")
        .setStorage(256)
        .build();

    console.log('Computadora Basica:');
    basicComputer.displayInfo();
}

main();