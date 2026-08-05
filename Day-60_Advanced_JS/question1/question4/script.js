function logninUser(username,cb){
    console.log("User login loading...")
    setTimeout(function(){
        cb({username:"harsh"});

    },2000)
}

function fetchPermissions(id,cb){
    console.log("User permissions loadingg...")
    setTimeout(function(){
        cb(['write','read','delete']);
    },2000)
}

function loadDashboard(permissions,cb){
    console.log("User dashboard loading...")
    setTimeout(() => {
        cb();
    }, 2000);
}


logninUser("Harsh",function(data){
    fetchPermissions(data.id,function(permissions){
        loadDashboard(permissions,function(){
            console.log("User Dashboard Loaded")

        })

    })
})