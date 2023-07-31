<template>
    <div class="features">
        <div class="features__container">
            <div v-if="load" class="features__loader">
                <TheLoader/>
            </div>
            <div v-else class="features__body">
                <h1 class="features__title">{{ featuresTitle }}</h1>
                <div class="features__items">
                    <article class="features__item item-feature" v-for="(feature, i) in features" :key="i">
                      <TheFeature :feature="feature"></TheFeature>
                    </article>
                </div>
                <div class="features__button">
                    <button  @click="addFeature()">Добавить особенность</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheFeature from './TheFeature.vue'
import TheLoader from './TheLoader.vue'
export default {
    name:'TheFeatures',
    components: {
		TheFeature,
        TheLoader
	},
    mounted() {
        this.$store.dispatch('getFeatures')
    },
    computed: {
        features() {
            return this.$store.getters.features
        },
        featuresTitle() {
            return this.$store.getters.featuresTitle
        },
        load() {
           return this.$store.getters.load
        }
    },
    methods: {
        addFeature() {
            const newFeature = {
                description: "Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор",
                image:"assets/img4.jpg",
                image_alt: "нестационарный гироскопический стабилизатор",
                model_name: "Figaro",
                sorting: 1
            }

            this.$store.dispatch('addFeature', newFeature)
        }
    }
}
</script>