class Customer{
    static get(id,cb){
        if(id===1){
            cb(null,{id})
        }
        else{
            cb("El cliente no existe",null)
        }
    }
}

class Invoices{
    static get(clientId,cb){
        if(clientId===1){
           cb(null,{clientId, invoices:[]})
        }
        else{
           cb("el cliente no tiene facturas", null) 
        }
    }
}

function main(id){
    Customer.get(id,(error,customer)=>{
        if(customer){
            Invoices.get(customer.id, (error,invoices)=>{
                if(invoices){
                    console.log(invoices)
                }
                else{
                    console.log(error)
                }
            })
        }
        else{
            console.log("error")
        }
    })
}

main(1)