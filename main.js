const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            onSale: true,
            premium: true,
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate facere, aliquid omnis ab accusamus molestias id voluptatum consequatur ipsa hic iste nisi quaerat iusto veniam sequi perspiciatis qui quo dolorem?"
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
        
    }
})