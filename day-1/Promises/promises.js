// console.log("Hello from Promises!");

// var p = new Promise(function(resolve,reject){
//     resolve("resolved here");
//     reject("rejected here");
// })

// p.then(function(data){
//     console.log(data);
// });

// console.log(p);
var userData;
var Ids = new Promise(function (res, rej) {
    setTimeout(() => {
        var ids = [1, 2, 3, 4, 5];
        if (ids.length > 4) {
            res(ids);
        } else {
            rej("Erro getting IDs");
        }
    }, 1000);
})

Ids.then((ids) => {
    console.log(ids);
    userData = getUser(ids[1])

    return userData
}).then((userData) => {
    console.log(userData);
    return userData
}).then((userData) => {
    return getAddress(userData);
}).then((userAddress) => {
    console.log(userAddress);
    return userData;
}).then((userData) => {
    return getSalary(userData.userId)
}).then((userSalary=>{
    console.log(userSalary);
}))
.catch((err) => {
    alert(err);
})
// .catch((err) => alert(err));



function getUser(userId) {
    return userPromise = new Promise(function (res, rej) {
        setTimeout(() => {
            let userData = {
                userId: userId,
                userName: "Hamada",
            };

            if (userData) {
                res(userData);
            } else {
                rej("Error getting user data");
            }

        }, 1000);
    })
}

function getAddress(user) {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            var userAddress = {
                userName: user.userName,
                userAddress: "Tanta"
            }
            if (userAddress) {
                res(userAddress)
            } else {
                rej("Error from getting Address")
            }

        }, 1000);
    })
}

function getSalary(userId) {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            let salary = {
                userId: userId,
                userSalary: 5000
            }

            if (userId) {
                res(salary)
            } else {
                rej("Error from getting Salary")
            }
        }, 1000);
    })
}
// userData = getUser(10);

// console.log(userData);


