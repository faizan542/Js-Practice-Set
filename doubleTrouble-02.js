// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (i < arr.length - 1 && arr[i] === arr[i + 1]) {

            result.push(arr[i] * 2);
            i++;
        } else {

            result.push(arr[i] * 2);
        }
    }

    return result;
}

const originalArray = [1, 4, 2, 2, 3, 4, 4, 4, 5];
const doubledArray = doubleTrouble(originalArray);

console.log(doubledArray);
