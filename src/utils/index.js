export const calcTotal = (cart) => {
    return cart.map(product => parseFloat(product.price)).reduce((a, b) => a + b);
}