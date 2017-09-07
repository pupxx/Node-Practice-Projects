var getUser = (id, cb)=>{
    var user = {
        id: id,
        name: 'Vikram'
    }
    setTimeout(()=>{
        cb(user);
    }, 3000)
}

getUser(31, (user)=>{
    console.log(user);
})