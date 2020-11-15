class Family {
    constructor(name, children) {
        this.name = name;
        this.children = children;       
    }

    get details() {
       return this.mydetails
        
    }

    mydetails() {
        
        console.log(`My name is ${this.name}, and I have ${this.children} kids`)
    }
}
const Ayda = new Family('name', '2');
console.log(Ayda.details);