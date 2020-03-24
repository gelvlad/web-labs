function sum(argument) {
    let total = 0;
    this.forEach(element => total += element)
    return total;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));