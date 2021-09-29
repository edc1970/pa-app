<template>
  <q-page>    
      <div class="full-width">
        <!-- <q-carousel
          animated
          v-model="slide"
          height="700px"
          infinite
        >
          <q-carousel-slide :name="1">
            <q-img 
              loading="eager"
              alt="Medical image background"
              height="700px"
              spinner-color="white"
              img-class="lighten"
              src="~assets/images/medical.jpeg"
              placeholder-src="~assets/images/placeholder-img.png">

              <div class="row">
                <div class="col-10 q-pa-xl">
                  <p class="martel text-h3 text-primary">Congratulations!</p>
                  <p class="quattro text-subtitle1">Your application for <b>Personal Accident Insurance</b> is now under process.  Details of your application and status of payment has been emailed to <span class="text-bold">{{ emailAdress }}</span>.</p>
                  <p class="quattro text-subtitle1">Likewise, a PHILSECURE account has been created for you in order to view and manage your insurance policies and payment transactions.  We have also sent a second email with a temporary password so you can access your account. We advise that you immediately login and change your temporary password.</p>
                  <p class="quattro text-subtitle1">Thank you very much and congratulations once again for securing your safety!</p>
                  
                  <p class="q-my-xl">&nbsp;</p>
                  <p class="quattro text-h6 q-mt-xl">Need assistance? We're here to help.</p>
                  <p class="martel text-h4 text-primary q-my-xs">cs@phil-secure.com</p>
                  <p class="martel text-h4 text-primary q-my-xs">0917.1234.567</p>
                  <p class="martel text-h4 text-primary q-my-xs">facebook.com/philsecure</p>
                </div>
              </div>
            </q-img>

            <q-img 
              id="cs_image"
              loading="lazy"
              alt="Customer Support image"
              class="absolute-bottom-right transparent"
              width="30%"
              src="~assets/images/cs.png"/>
          </q-carousel-slide>
        </q-carousel> -->
        <!-- <q-img 
          loading="eager"
          alt="Medical image background"
          fit="cover"
          spinner-color="white"
          img-class="lighten"
          src="~assets/images/medical.jpeg"
          placeholder-src="~assets/images/placeholder-img.png"> -->
        
          <div class="medical">
            <div class="row">
              <div class="col-10 text-grey-9 q-pa-xl">
                <p class="martel text-h3 text-primary">Congratulations!</p>
                <p class="quattro text-h6 text-grey-10">Your application for <b>Personal Accident Insurance</b> is now under process.  Details of your application and status of payment has been emailed to <span class="text-bold">{{ emailAdress }}</span>.</p>
                <p class="quattro text-h6 text-grey-10">Likewise, a PHILSECURE account has been created for you so you can view and manage your insurance policies and payment transactions.  We sent you a second email with a temporary password so you can access your account. <span class="text-bold">We advise that you immediately login and change your temporary password in order to secure your account</span>.</p>
                <q-btn color="primary" type="a" to="login" label="Login here" class="martel q-mt-sm q-mb-md"/>
                <p class="quattro text-h6 text-grey-10">Thank you very much and congratulations once again for securing your safety!</p>
                
                <p class="q-my-xl">&nbsp;</p>
                <p class="quattro text-h6 text-grey-10 q-mt-xl">Need assistance? We're here to help.</p>
                <p class="martel text-h4 text-primary q-my-xs">cs@phil-secure.com</p>
                <p class="martel text-h4 text-primary q-my-xs">0908.1234.567</p>
                <p class="martel text-h4 text-primary q-my-xs">facebook.com/philsecure</p>
              </div>

              <div class="col">
                <q-img 
                  id="cs_image"
                  alt="Customer Support image"
                  class="absolute-bottom-right transparent"
                  width="30%"
                  src="~assets/images/cs.png"/>
              </div>
            </div>
          </div>
      </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ApplicationDonePage',

  setup() {
    let slide = ref(1)
  
    return {
      slide
    }
  }
}
</script>

<style lang="scss">
.lighten {
  filter: opacity(20%);
}
div.medical {
  background-image: url('~assets/images/medical.jpeg');
  background-size: cover;
}
div.medical > div {
  backdrop-filter: blur(5px) sepia(100%);
}

@media screen and (max-width: 599px){
  /* img#cs_image {
    width: 300px;
  } */
}
</style>
