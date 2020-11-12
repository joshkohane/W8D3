function Cat (name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
    console.log(`${this.name} loves ${this.owner}.`);
}

Cat.prototype.meow = function () {
    console.log(`${this.name} says MEOW`);
}

const cat1 = new Cat('Tom', 'Jerry');
const cat2 = new Cat('Garfield', 'John');

cat1.cuteStatement();

cat1.meow = function () {
    console.log(`${this.name} says FEED ME`);
}

cat1.meow();
cat2.meow();