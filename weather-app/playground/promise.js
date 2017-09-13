function asyncAdd(a, b){
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b)
            }else{
                reject('Both have to be numbers')
            }
        }, 1500);
    })
}

asyncAdd(5,7).then((data)=>{
    console.log(data);
    return asyncAdd(10, data)
}).then((data)=>{
    console.log(data, 'should be 22');
}).catch((err)=>{
    console.log(err);
})

// var somePromise = new Promise ((resolve, reject)=>{
//     setTimeout(function() {
//         // resolve('Hey it worked')
//         reject('Unable to fulfill promise')
//     }, 3000);
// });

// somePromise.then((data)=>{
//     console.log('Success ', data);
// }, (err)=>{
//     console.log(err);
// })