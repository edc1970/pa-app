<template>
  <q-page>    
      <div class="full-width">
        <div class="medical">
          <div class="row">
            <div class="col-10 text-grey-9 q-pa-xl">
              <p class="martel text-h3 text-primary">Congratulations!</p>
              <p class="quattro text-h6 text-grey-10">Your application for <b>Personal Accident Insurance</b> is now under process.  Details of your application and status of payment has been emailed to <span class="text-bold">your email address</span>.</p>
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
}
</script>

<style lang="scss">
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
