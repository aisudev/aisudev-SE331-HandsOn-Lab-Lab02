const app = Vue.createApp({
    data() {
        return {
            brand: 'SE331',
            product: 'Shoes',
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            cart: 0,
            selectVariant: 0,
            onSale: true
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectVariant = index
        }
    },

    computed: {
        title() {
            if(this.onSale) return this.brand + ' ' + this.product + ' is On Sale'

            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectVariant].image
        },
        inStock() {
            return this.variants[this.selectVariant].quantity
        }
    }
})