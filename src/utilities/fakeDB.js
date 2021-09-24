const getDB = () => localStorage.getItem('shopping_cart')
const updateDB = (cart) => localStorage.setItem('shopping_cart', JSON.stringify(cart))

const addToDB = id => {
    const exists = getDB()
    let shopping_cart = {}
    if (!exists) {
        shopping_cart[id] = 1
    } else {
        shopping_cart = JSON.parse(exists)
        if (shopping_cart[id]) {
            shopping_cart[id] += 1
        } else {
            shopping_cart[id] = 1
        }
    }
    updateDB(shopping_cart)
}
const deleteFromDB = id => {
    const exists = getDB()
    if (exists) {
        const shopping_cart = JSON.parse(exists)
        delete shopping_cart[id]
        updateDB(shopping_cart)
    }
}
const getStoredCart = () => {
    const exists = getDB()
    return exists ? JSON.parse(exists) : {}
}
export { addToDB, deleteFromDB, getStoredCart }