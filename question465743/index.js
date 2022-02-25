function sucesionFibonacci(limit) {

    if (limit < 0) {
        return;
    }

    const fibonacci = []; // Initialize array!

    for(let i = 0; i < limit; i++) {
        if (i === 0 || i === 1) {
            fibonacci.push(i);
        } else {
            fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
        }
    }

    return fibonacci;
}

console.log(sucesionFibonacci(10));