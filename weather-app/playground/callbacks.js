var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'kodak'
    };
    setTimeout(() => {
        callback(user);
    }, 1000);
};

getUser(1, (u) => {
    console.log(u);
});