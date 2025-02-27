// // user must be prompted for froyo flavors 

const placeOrder = prompt ("enter a list of comma-separated froyo flavors to order!");
console.log(placeOrder);

// // user's input string is split into an array of strings
function splitArray(str,delim) {
    return str.split(delim);
}

const flavors = splitArray(placeOrder, ",");

// create an object used to count how many orders there are of each flavor
// // a loop iterates an array of flavors
// > build an object for the following usages:
// - used to count how many orders there are of each flavor
// - counts the number of each flavor in the user's input properly
// - function returns the object to count frequencies of elements properly
// // > result: console output changes depending on the user's input

const countOrders = (flavorsArray) => {
    const orderAmt = {};
        // loop iteration with if and else statements per flavor amt
        for (let i=0; i < flavorsArray.length; i++) {
             const flavor = flavorsArray[i].trim();
             if (orderAmt[flavor]) {
                orderAmt[flavor] += 1;
             } else {
                orderAmt[flavor] = 1;
             }
        }  
        return orderAmt;
}

const orderAmt = countOrders(flavors);
console.table(orderAmt);












// Note to Self: Scrap Work
// // - how I started the hw, where I got stuck, and what I got wrong; redid the above with gbt; return to study and properly code the rest from scratch
// -------------

// First Attempt Below:

// // user must be prompted for froyo flavors 

// const placeOrder = prompt ("enter a list of comma-separated froyo flavors to order!");
// console.log(placeOrder);

// // // user's input string is split into an array of strings
// function splitArray(str,delim) {
//     return str.split(delim);
// }

// const flavors = splitArray("vanilla,vanilla,vanilla,strawberry,coffee,coffee", ",");
// console.log(flavors);

// // // a loop iterates an array of flavors

// const flavors = [ 'vanilla', 'vanilla', 'vanilla', 'strawberry', 'coffee', 'coffee' ]
// for (let i=0; i < flavors.length; i++) {
//     console.log(flavors[i]);
// 
// }

// // create an object used to count how many orders there are of each flavor

// // const orderAmt = {
// //     vanilla: 3,
// //     strawberry: 2,
// //     coffee: 2,
// // }
// // console.log(orderAmt.vanilla);
// // console.log(orderAmt.strawberry);
// // console.log(orderAmt.coffee);
// // console.log(Object.values(orderAmt));

// stuck below:
// // > build an object for the following usages:
// // - used to count how many orders there are of each flavor
// // - counts the number of each flavor in the user's input properly
// // - function returns the object to count frequencies of elements properly
// // // > result: console output changes depending on the user's input

// const orderAmt = (key,value) => {
//     const obj = {};
//     obj[key]= value;
//     return obj;

// if and else?
// }

// const froyo = orderAmt("vanilla",3);
// console.table(froyo);
// froyo.strawberry = 2;
// console.table(froyo);
// froyo.coffee = 2;
// console.table(froyo);






