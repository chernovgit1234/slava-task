<template>
  <div class="advantages">
    <div class="advantages__container">
      <div class="advantages__body">
        <hr class="advantages__line">
        <h1 class="advantages__title">{{ advantagesTitle }}</h1>
        <div>
          <div v-if="phoneMode">
            <Swiper 
              class="advantages__items advantages-item"
              :modules="modules"
              :autoplay="{
                delay: 800,
                disableOnInteraction: true,
              }"
            >
              <swiper-slide v-for="(advantage, i) in advantages" :key="i">
                <TheAdvantage :advantage="advantage"></TheAdvantage>
              </swiper-slide>
            </Swiper>
          </div>
          <div v-else class="advantages__items advantages-item" >
            <article class="advantages-item__item" v-for="(advantage, i) in advantages" :key="i">
              <TheAdvantage :advantage="advantage"></TheAdvantage>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay} from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import TheAdvantage from './TheAdvantage.vue'

export default {
  name:'TheAdvantages',
  components: {
		Swiper,
		SwiperSlide,
    TheAdvantage
	},
  mounted() {
    this.initial()

    window.addEventListener("resize", (event) => {
      let width = event.target.innerWidth
      this.updatePhoneMode(width)
    });
  },
  data() {
		return {
      advantagesTitle: 'мы ценим ваше время и комфорт! запишитесь на сервис nissan онлайн',
      phoneMode: true,
			modules: [ Autoplay ],
			advantages: [
				{ img: "benefit-icon4", title: "выгода", text: "узнайте о выгодных сервисных предложениях nissan именно для вашего автомобиля"},
        { img: "benefit-icon1", title: "актуальность", text: "выберите актуальные для вас сервисные предложения"},
        { img: "benefit-icon2", title: "широкий выбор", text: "выберите дилера, который вам подходит"},
        { img: "benefit-icon3", title: "онлайн обслуживание", text: "отправьте дилеру данные о вашем автомобиле в форме удобной анкеты"}
			],
		}
	},
  methods: {
    initial() {
      let width = window.innerWidth
      this.updatePhoneMode(width)
    },
    updatePhoneMode(width) {
      if (width <= 480) {
        this.phoneMode = true
      } else {
        this.phoneMode = false
      }
    }
  }
}
</script>