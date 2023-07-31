<template>
    <div class="advantages-item__item">
        <div class="advantages-item__icon">
            <img :src="require('../assets/icons/benefit-icons/' + advantage.img + '.png')" alt="icon"/>
        </div>
        <div class="advantages-item__content">
            <h3 class="advantages-item__title">{{ advantage.title }}</h3>
            <div class="advantages-item__text">{{ advantage.text }}</div>
        </div>
    </div>
</template>

<script>
import { validateAdvantage } from '../validators'

export default {
    name:'TheAdvantage',
    props: {
        advantage: {
            type: Object,
            required: true,
            validator: validateAdvantage
        }
    }
}
</script>