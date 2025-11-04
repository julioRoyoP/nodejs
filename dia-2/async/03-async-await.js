class Customer {
    static async get(id) {
        if (id === 1) {
            return { id }
        }
        throw "El cliente no existe"
    }
}



class Invoices {
    static get(clientId) {
        return new Promise((resolve, reject) => {
            if (clientId === 1) {
                resolve({ clientId, invoices: [] })
            }
            else {
                reject("El cliente no tiene facturas")
            }
        })
    }
}

//resolve->then->(1->n)
//reject->catch(1)

async function main(id) {
    try {
        const customer = await Customer.get(id)
        const invoices = await Invoices.get(customer.id)
        console.log(invoices)
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log("Complete")
    }
}

main(1)
console.log("End")