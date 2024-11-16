function maxSubarraySum(arr) {
    let maxSum = -Infinity; // Initialize to negative infinity to handle all negative numbers
    let currentSum = 0;

    for (let num of arr) {
        currentSum += num; // Add current element to the current sum
        maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is higher
        if (currentSum < 0) currentSum = 0; // Reset currentSum if it goes negative
    }

    return maxSum;
}

// Example usage:
const arr = [4,3,-1,2,5,-6];
console.log(maxSubarraySum(arr)); // Output: 6 (subarray: [4, -1, 2, 1])
