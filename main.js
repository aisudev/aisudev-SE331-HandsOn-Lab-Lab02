const app = Vue.createApp({
    data() {
        return {
            cart: [],
            onSale: true,
            premium: true,
            detail: ['50% cotton', '30% wool', '20% polyester'],
            reviews: []
        }
    },

    methods: {
        updateCart(id) {
            this.cart.push(id)
        },

        removeCart(id) {
            var index = this.cart.indexOf(id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },

        addReview(review) {
            this.reviews.push(review)
        }
    },

    computed: {

    }
})