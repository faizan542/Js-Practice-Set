// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function multiplyByTwo(numbers) {
    const multipliedResult = [];

    for (const num of numbers) {
        const multipliedPromise = new Promise((resolve) => {
            setTimeout(() => {
                const result = num * 2;
                resolve(result);
            }, 500)
        });
        multipliedResult.push(multipliedPromise);
    };

    const results = await Promise.all(multipliedResult);
    return results
};

const numbersArr = [1, 2, 3, 4, 5];

multiplyByTwo(numbersArr).then((resultArray) => {
    console.log("Multiplied Array:" + resultArray);
}).catch((err) => {
    console.error("Error:" + err)
});