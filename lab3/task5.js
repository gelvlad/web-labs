function createCounter() {
    let count = 1;
    function counter() {
        return count++;
    }
    return counter;
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5