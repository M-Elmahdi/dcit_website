import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'en'
  },
  mutations: {
    langToAr({state}){
      state.lang = 'ar';
      localStorage.setItem('lang', state.lang)
    },
    langToEn({state}){
      state.lang = 'en'
      localStorage.setItem('lang', state.lang)
    },
    restoreSession(){
      console.log(localStorage.getItem('lang'))
    }
  },
  actions: {
    changeToAr({commit}){
      commit('langToAr')
    },
    changeToEn({commit}){
      commit('langToEn')
    }
  },
  modules: {
  }
})
