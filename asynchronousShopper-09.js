// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(orderDetails) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5000) + 1000;

        setTimeout(() => {
            resolve(`Order for ${orderDetails} has been placed successfully!`);
        }, delay);
    });
}

placeOrder("Aluminum foil, Plastic Food Containers")
    .then((confirmationMessage) => {
        console.log(confirmationMessage);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

