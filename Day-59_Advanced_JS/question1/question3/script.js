function downloadImage(imageName,cb){
    console.log("Downloading...")
    setTimeout(() => {
        cb({imageName:"StudentPhoto",format:"jpeg",size:"30KB"});
    }, 3000);
}

downloadImage("studentPhoto",function(data){
    console.log("Download completed");
    console.log(`Image Name : ${data.imageName} \nFormat : ${data.format}\nSize: ${data.size}`)

})