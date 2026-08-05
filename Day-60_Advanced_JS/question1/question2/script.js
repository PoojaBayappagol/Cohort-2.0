function afterDelay(time,cb){
    setTimeout(function(){
        cb();
    },time);
}


afterDelay(2000,function(){
    console.log("callback executed")
})