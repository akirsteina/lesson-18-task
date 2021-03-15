// task 1 - fizzbazz
console.log('Task 3: Fizz Bazz for numbers from 0 to 100')
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log('Fizz Bazz');
    } else if (i % 3 == 0) {
        console.log('Bazz');
    } else if (i % 2 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

// task 2 - every 7th number from 1000 to 50 - odd/even
for (let i = 1000; i >= 50; i -= 7) {
    if (i % 2) {
        console.log(i, ' is an odd number');
    } else {
        console.log(i, ' is an even number');
    }
}