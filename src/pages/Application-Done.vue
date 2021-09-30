<template>
  <q-page>    
      <div class="full-width">
        <div class="medical">
          <div class="row">
            <div class="col-10 text-grey-9 q-pa-xl">
              <p class="martel text-h3 text-primary">Congratulations!</p>
              <p class="quattro text-h6 text-grey-10">Your application for <b>Personal Accident Insurance</b> is now under process.  Details of your application and status of payment has been emailed to <span class="text-bold">{{ emailAddress }}</span>. Please take note of your Transaction Reference Number: <b>{{ pay_refcode }}</b></p>
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
      
      <q-dialog
        v-model="medium"
      >
        <q-card class="text-center" style="width: 600px; max-width: 80vw;">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6 q-mb-none">{{ pay_code }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <img :src="pay_imageurl" />
            <p class="text-h6 text-bold q-my-none">{{ pay_refcode }}</p>
          </q-card-section>
          <q-card-section class="q-pt-none text-left">
            <div class="full-width text-center bg-grey-5 q-py-xs q-mb-sm">PAYMENT DETAILS</div>
            <div class="row">
              <div class="col-5">Reference Number:</div>
              <div class="col-7 text-bold">{{ pay_refcode }}</div>
            </div>
            <div class="row">
              <div class="col-5">Description:</div>
              <div class="col-7 text-bold">{{ pay_description }}</div>
            </div>
            <div class="row">
              <div class="col-5">Merchant Name:</div>
              <div class="col-7 text-bold">{{ pay_seller }}</div>
            </div>
            <div class="row">
              <div class="col-5">Issuance Date:</div>
              <div class="col-7 text-bold">{{ pay_created }}</div>
            </div>
            <div class="row">
              <div class="col-5">Expiry:</div>
              <div class="col-7 text-bold">{{ pay_expiry }}</div>
            </div>
            <div class="row">
              <div class="col-5 text-subtitle1">Amount To Pay:</div>
              <div class="col-7 text-h6 text-bold">₱ {{new Intl.NumberFormat().format(pay_amount)}}</div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-left">
            <div class="full-width text-center bg-grey-5 q-py-xs q-mb-sm">HOW TO PAY</div>
            <div v-if="pay_instruction !== 'undefined'" >
              <ol>
                <li v-for="(instruction, index) in pay_instruction" :key="index">{{ instruction }}</li>
                <li>Successfull payment notification will be sent via email at <b>{{ emailAddress }}</b></li>
                <li><b>{{ pay_seller }}</b> will contact you regarding your transaction</li>
                <li>If you do not receive successfull payment notification, please contact our Payment Partner's Support Team at <b>support@bux.ph</b></li>
              </ol>
            </div>
            <div v-else>
              <ul>
                <li>Check your email at <b>{{ emailAddress }}</b> for detailed instructions on how to pay at <b>{{ pay_code }}</b></li>
              </ul>
            </div>
          </q-card-section>

          <q-card-actions align="center" class="bg-primary text-white">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'ApplicationDonePage',

  setup(){
    const $q = useQuasar()
    const emailAddress = $q.localStorage.getItem('emailAddress')
    const pay_checkouturl = $q.localStorage.getItem('pay_checkouturl')
    const pay_refcode = $q.localStorage.getItem('pay_refcode')
    const pay_code = $q.localStorage.getItem('pay_code')
    const pay_seller = $q.localStorage.getItem('pay_seller')
    const pay_imageurl = $q.localStorage.getItem('pay_imageurl')
    const pay_created = $q.localStorage.getItem('pay_created')
    const pay_expiry = $q.localStorage.getItem('pay_expiry')
    const pay_amount = $q.localStorage.getItem('pay_amount')
    const pay_description = $q.localStorage.getItem('pay_description')
    const pay_instruction = $q.localStorage.getItem('pay_instruction')

    // Clear Local Storage of any previously saved data
    /* $q.localStorage.set('uuid','')
    $q.localStorage.set('firstName','')
    $q.localStorage.set('middleName','')
    $q.localStorage.set('lastName','')
    $q.localStorage.set('presentAddress','')
    $q.localStorage.set('presentCity','')
    $q.localStorage.set('presentProvince','')
    $q.localStorage.set('permanentAddress','')
    $q.localStorage.set('permanentCity','')
    $q.localStorage.set('permanentProvince','')
    $q.localStorage.set('landlinePhone','')
    $q.localStorage.set('mobilePhone','')
    $q.localStorage.set('emailAddress','')
    $q.localStorage.set('sex','')
    $q.localStorage.set('birthDate','')
    $q.localStorage.set('pay_checkouturl','')
    $q.localStorage.set('pay_refcode','')
    $q.localStorage.set('pay_code','')
    $q.localStorage.set('pay_seller','')
    $q.localStorage.set('pay_imageurl','')
    $q.localStorage.set('pay_created','')
    $q.localStorage.set('pay_expiry','')
    $q.localStorage.set('pay_amount','')
    $q.localStorage.set('pay_description','')
    $q.localStorage.set('pay_instruction','') */

    return {
      emailAddress,
      pay_checkouturl,
      pay_refcode,
      pay_code,
      pay_seller,
      pay_imageurl,
      pay_created,
      pay_expiry,
      pay_amount,
      pay_description,
      pay_instruction,

      medium: ref(pay_checkouturl ? false : true)
    }
  }
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
