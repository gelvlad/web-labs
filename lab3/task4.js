function User(name) {
    this.name = name;
}

Object.prototype.getName = function(first_argument) {
    return this.name;
};

const me = new User('Rex');

console.log(me.getName()); // Rex