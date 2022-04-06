<template>

  <div v-if="selectedLang === 'en'" class="tjwal">
    <english-navbar :lang="enLang" />
    <english-about :lang='enLang' />
    <hr class="mx-5">
    <english-vision :lang="enLang" />
    <hr class="mx-5">
    <english-partners :lang="enLang" />
    <hr class="mx-5">
    <english-services :lang="enLang" />
  </div>

  <div v-else class="tjwal">
    <arabic-navbar :lang="arLang" />
    <arabic-about :lang="arLang" />
    <hr class="mx-5">
    <arabic-vision :lang="arLang" />
    <hr class="mx-5">
    <arabic-partners :lang="arLang" />
    <hr class="mx-5">
    <arabic-services :lang="arLang" />
  </div>

  <!-- Footer-->
  <footer class="py-5 daman-theme tjwal">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="text-start text-white">
             info@dcity.ly
             <br> (+218) 091-830 3303 
             <br> (+218) 091-212 0159
             <br> (+218) 091-543 2222

              </p>
          </div>
          <div class="col text-white text-end">
            Copyright &copy; DCIT 2021-2022
          </div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-secondary"
          @click="changeLang('ar')">
عربي              
          </button>
          <button type="button" class="btn btn-secondary"
          @click="changeLang('en')">
            English
          </button>
        </div>
        
      </div>
  </footer>
</template>

<script>
import EnglishNavbar from '@/components/en/Navbar.vue'
import EnglishAbout from '@/components/en/About.vue'
import EnglishPartners from '@/components/en/Partners.vue';
import EnglishServices from '@/components/en/Services.vue';
import EnglishVision from '@/components/en/Vision.vue';

import ArabicNavbar from '@/components/ar/Navbar.vue'
import ArabicAbout from '@/components/ar/About.vue'
import ArabicPartners from '@/components/ar/Partners.vue';
import ArabicServices from '@/components/ar/Services.vue';
import ArabicVision from '@/components/ar/Vision.vue';

import enLang from '@/lang/en.js';
import arLang from '@/lang/ar.js';

export default {
  name: 'Home',
  components: {
      EnglishNavbar, EnglishAbout, EnglishPartners, EnglishServices, EnglishVision,
      ArabicNavbar, ArabicAbout, ArabicPartners, ArabicServices, ArabicVision
  },
  data(){
    return {
      selectedLang: 'en',
      enLang,
      arLang
    }
  },
  methods: {
    changeLang(lang){
      this.selectedLang = lang
    }
  }
  
}
</script>

<style scoped>
.bg-daman {
  background-image: url("../assets/images/daman_logo_blurred.png");
}
</style>
