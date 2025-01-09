function calculateSum(n) {
    let r;
    if (n % 2 === 0) {
        r = Math.floor(n / 2) + 1;
    } else {
        r = Math.floor((n + 1) / 2);
    }

    let sum = 1;

    for (let i = 1; i <= r; i++) {
        let a = i;
        let b = n - 3 * a;

        if (b < 0) {
            continue; // Skip invalid cases
        }

        sum += factorial(a + b) / (factorial(a) * factorial(b));
    }

    return sum;
}

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

// Example usage:
let n = 2; // Replace with the desired input
console.log("Sum:", calculateSum(n));
