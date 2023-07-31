import { createStore } from 'vuex'
import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

var http = axios.create({
  baseURL: '/',
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, true)
});

export default createStore({
  state: {
    features: [],
    featuresTitle: '',
    load: false,
  },
  getters: {
    features: t => t.features,
    featuresTitle: t => t.featuresTitle,
    load: t => t.load
  },
  mutations: {
    SET_FEATURES(state, features) {
      this.state.features = features
    },
    SET_FEATURES_TITLE(state, title) {
      this.state.featuresTitle = title
    },
    ADD_FEATURE(state, feature) {
      
      this.state.features.forEach(el => {
        if (el.sorting >= 1) {
          el.sorting += 1
        }
      });

      this.state.features.push(feature)
      this.state.features.sort((a, b) => a.sorting - b.sorting)
    },
    LOAD(state, load) {
      this.state.load = load
    }
  },
  actions: {
    async getFeatures({commit}) {
      try {
        commit('LOAD', true) 
        var response = null

        await http.post('https://test-task-frontend-2023.slava.digital').then(resp => {
          response = resp
        })
         
        if (response.status === 200) {
          const features = response.data.features.filter(el => el.model_name === 'Figaro' && el.description && el.image).sort((a, b) => a.sorting - b.sorting)
          const featuresTitle =  response.data.block_heading

          commit('SET_FEATURES', features)
          commit('SET_FEATURES_TITLE', featuresTitle)
          commit('LOAD', false)
        }
      } catch (error) {
        console.log('error', error)
        commit('LOAD', false)
      }
    },
    addFeature({commit}, feature) {
      commit('ADD_FEATURE', feature)
    }
  }
})
