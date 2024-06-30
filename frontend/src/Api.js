const uri = 'http://localhost:8000'

export const getProducts = async () => {
    try{
        const response = await fetch(uri + '/')
        const data = await response.json()
        return data
    }catch(e){
        console.error(e)
    }
}

export const addProduct = async (productData) => {
    try{
        const response = await fetch(uri + '/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        const data = await response.json()
        return data
    }catch(e){
        console.error(e)
    }
}

export const deleteProduct = async (productData) => {
    try{
        const response = await fetch(uri + '/deleteProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        const data = await response.json()
        return data
    }catch(e){
        console.error(e)
    }
}