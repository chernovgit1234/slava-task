<template>
    <div class="item-feature__icon">
        <picture>
            <source :srcset="require('../assets/icons/characteristic-icons/min/'+ img )" media="(max-width: 400px)">
            <img :src="require('../assets/icons/characteristic-icons/'+ img )" :alt="feature.image_alt">
        </picture>
    </div>
    <div class="item-feature__description">{{ feature.description }}</div>
</template> 

<script>
import { validateFeature } from '../validators'

export default {
    name:'TheFeature',
    props: {
        feature: {
            type: Object,
            required: true,
            validator: validateFeature
        }
    },
    computed: {
        img() {
            let img = this.feature.image

            if (img[0] === '/') {
                return this.feature.image.slice(1)
            } else {
                return this.feature.image
            }
        }
    }
}
</script>