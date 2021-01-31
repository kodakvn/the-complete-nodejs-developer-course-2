var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey. It works!');
        reject('Unable to fullfil promise');
    }, 1000);
});

somePromise.then((message) => {
    console.log('Success: ', message);
}, (error) => {
    console.log('Error: ', error);
});