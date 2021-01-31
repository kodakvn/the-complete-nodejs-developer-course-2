var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(10, 11).then((message) => {
    console.log('sum is ', message);
}, (error) => {
    console.log('error: ', error);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey. It works!');
//         reject('Unable to fullfil promise');
//     }, 1000);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (error) => {
//     console.log('Error: ', error);
// });