const app = Vue.createApp({
    data() {
        return {
            cart: [],
            onSale: true,
            premium: true,
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate facere, aliquid omnis ab accusamus molestias id voluptatum consequatur ipsa hic iste nisi quaerat iusto veniam sequi perspiciatis qui quo dolorem?",
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

        addReview(review){
            this.reviews.push(review)
        }
    },

    computed: {

    }
})