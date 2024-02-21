<!-- <template>
    <BasePageDetails :product-id="selectProductId" :product-data="selectProductData"></BasePageDetails>
</template>
<script>
import { laptopData } from '@/data-js/laptop-data.js';
import BasePageDetails from '../sharedVue/base-page/base-page-details.vue';
export default {
    components: {
        BasePageDetails
    },
    data() {
        return {
            laptopData,
            selectProductId: null,
            selectProductData: null
        }
    },
    methods: {
        setProductId(id) {
            this.selectProductId = id
            this.selectProductData = this.laptopData.find(item => item.id === id)
        }
    },
    mounted() {
        console.log("data from laptop details: ", this.selectProductData)
        console.log("ID from laptop details: ", this.selectProductId)
    }
}
</script> -->