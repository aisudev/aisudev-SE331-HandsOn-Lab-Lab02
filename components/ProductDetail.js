app.component('product-detail', {
    props: {
        detail: {
            type: String,
            required: true
        },
    },

    template:
        // HTML
        `
        <div 
            className="product-detail"
        >
            <h3>Detail:</h3>
            <p
                class="product-detail"
            >
                {{detail}}
            </p>
        </div>
    `,

    data() {
        return {}
    },
    methods: {},
    computed: {}
})