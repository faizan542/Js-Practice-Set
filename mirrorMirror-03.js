// 3. The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


function mirrorString(string) {
    // Reverse the input string
    const reversedString = string.split('').reverse().join('');

    // Append the reversed string to the original string
    const mirroredString = string + reversedString;

    return mirroredString;
};
const originalString = "hello";
console.log(mirrorString(originalString));

