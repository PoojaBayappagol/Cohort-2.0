function registerUser(username,cb){
    console.log("User details...")
    setTimeout(() => {
        cb({id:23221,username:'harsh'})
    }, 1000);
}

registerUser('harsh',function(data){

    console.log(data.id, data.username);

})