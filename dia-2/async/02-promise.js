class Customer{
    static get(id){
        //resolve->ok
        //reject->error
        return new Promise((resolve,reject)=>{
            if(id===1){
                resolve({id})
            }
            else{
                reject("el cliente no exite")
            }
        })
    }
}



class Invoices{
    static get(clientId){
        return new Promise((resolve,reject)=>{
            if(clientId===1){
                resolve({clientId,invoices:[]})
            }
            else{
                reject("El cliente no tiene facturas")
            }
        })
    }
}

//resolve->then->(1->n)
//reject->catch(1)

function main(id){
   Customer.get(id)
        .then(({id})=>Invoices.get(id))
        .then(invoices=>console.log(invoices))
        .catch(err=>console.log(err))
        .finally(()=>console.log("complete"))
}

main(1)