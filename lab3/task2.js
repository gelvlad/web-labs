function sum(argument) {
    this.forEach(element => this + element)
    return total;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));