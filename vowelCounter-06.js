// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    if (count === 0) {
        return "No vowels found.";
    } else if (count === 1) {
        return "There is only 1 vowel.";
    } else {
        return `Number of vowels are ${count}.`
    }
}
let string1 = "Hello World";
console.log(countVowels(string1));
let string2 = "Hey";
console.log(countVowels(string2));
let string3 = "My";
console.log(countVowels(string3));
