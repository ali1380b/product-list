const Product = [
    {
        id: 1,
        name: 'lg tv 23',
        price: 20000000,
        quantity: 6,
        like: false,
        menuFacture: 'lg'
    },
    {
        id: 2,
        name: 'keyboard',
        price: 10000000,
        quantity: 500,
        like: true,
        menuFacture: 'razer,asus'
    },
    {
        id: 3,
        name: 'power',
        price: 8000000,
        quantity: 60,
        like: true,
        menuFacture: 'lg'
    },
    {
        id: 4,
        name: 'ram',
        price: 1000000,
        quantity: 16,
        like: false,
        menuFacture: 'HyperX '
    },
    {
        id: 5,
        name: 'motherboard',
        price: 15000000,
        quantity: 50,
        like: true,
        menuFacture: 'asus,gigabyte'
    },
    {
        id: 6,
        name: 'monitor game 120hz',
        price: 40000000,
        quantity: 70,
        like: true,
        menuFacture: 'asus'
    },

]

export function getProducts() {
    return Product
}

export function getProduct(id) {
    return Product.find(p => p.id === id)
}
