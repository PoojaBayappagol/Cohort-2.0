function rechargeMobile(mblnum,amount,cb){
    setTimeout(() => {
        cb({status:"2 months plan",number:4567897643,amount:666,transactionID:"hsg34s"})
    }, 2000);
}


rechargeMobile("8865348835","398",function(data){
    console.log("Recharge Successful")
    console.log(`TransactionID :${data.transactionID}  Amount :${data.amount}`)

})