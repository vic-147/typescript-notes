// class padre
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    saludar(): void {
        console.log(`Helo, welcome ${this.name} tienes ${this.age} de edad.`);
    }
}

// class hijo
class Developer extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }

    writeCode(yes: boolean = false) : void {
        yes
        ? console.log('Ready to code')
        : console.log('I need power')
    }
}

const person = new Person('Victor', 28);
person.saludar();

const dev = new Developer('David', 25);
dev.saludar();
dev.writeCode(true);
