<template>
  <q-page class="flex flex-center">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="full-width">
        <q-img 
          loading="eager"
          alt="Medical image background"
          fit="cover"
          spinner-color="white"
          src="~assets/images/medical.jpeg"
          placeholder-src="~assets/images/placeholder-img.png">
          
          <div class="fixed-center text-center hero-text shadow-5">
            <p class="martel text-h3 text-black hero-heading">Personal Accident Insurance</p>
            <p class="quattro text-h5 text-black hero-subheading">Individual personal accident insurance with extensive coverage for accidents resulting in injury or death.</p>
            <q-btn
              push
              color="amber"
              text-color="black"
              size="large"
              class="martel q-mt-lg"
              to="application">
              Apply Now!
            </q-btn>
          </div>
        </q-img>
      </div>
    </transition>
  </q-page>
</template>

<script>

import { ref } from 'vue'
export default {
  name: 'PageIndex',
}
</script>

<style scoped lang="scss">
  div.q-img {
    height: 100vh;
  }
  .hero-text {
    padding: 30px;
    width: 60%; 
    background-color: rgba(100, 100, 100, 0.1);
    border-radius: 5px;
    backdrop-filter: blur(7px);
  }

  @media screen and (max-width: 1023px){
    div.q-img {
      height: 50vh;
    }
    .hero-text {
      width: 80%;
    }
    .hero-text > .hero-heading {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    .hero-text > .hero-subheading {
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }
</style>
