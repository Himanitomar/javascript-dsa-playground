/**
 * Processes a string to handle backspace characters ('#').
 * @param {string} str - Input string.
 * @returns {string} - Final processed string after simulating backspaces.
 */
function processString(str) {
    const stack = [];
    for (let char of str) {
        if (char === '#') {
            if (stack.length > 0) {
                stack.pop(); // Remove the last character.
            }
        } else {
            stack.push(char); // Add character to the stack.
        }
    }
    return stack.join('');
}

/**
 * Compares two strings after processing their backspace characters.
 * @param {string} s1 - First string.
 * @param {string} s2 - Second string.
 * @returns {number} - 1 if both strings are equal, otherwise 0.
 */
function compareStrings(s1, s2) {
    const processedS1 = processString(s1);
    const processedS2 = processString(s2);

    return processedS1 === processedS2 ? 1 : 0;
}

// Example usage:
const s1 = "ab#c";
const s2 = "ad#c";

console.log(compareStrings(s1, s2)); // Output: 1
