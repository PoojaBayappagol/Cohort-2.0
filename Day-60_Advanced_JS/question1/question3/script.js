function getUser(username,cb){
    console.log("getting user details...")
    setTimeout(function(){
        cb({id:1233,username:"harsh"})
    },2000)
}

function getUSerPosts(id,cb){
    console.log("getting user posts...")
    setTimeout(() => {
        cb(["hello","view of nature","good morning"]);
        
    }, 2000);
}

getUser("harsh",function(data){
    getUSerPosts(data.id,function(allposts){
        console.log(data.username,allposts)
    })

})