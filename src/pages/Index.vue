<template>
  <q-page>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="full-width">
        <q-parallax :speed="0.3" :height="560">
          <template v-slot:media>
            <img src="~assets/images/medical.jpeg" />
          </template>

          <div class="text-center hero-text shadow-5">
            <p class="martel text-h3 text-black hero-heading">Personal Accident Insurance</p>
            <p class="quattro text-h4 text-grey-10 hero-subheading">Individual personal accident insurance with extensive coverage for accidents resulting in injury or death.</p>
            <q-btn
              color="amber"
              text-color="black"
              size="large"
              class="martel q-mt-lg"
              to="application">
              Apply Now!
            </q-btn>
          </div>
        </q-parallax>

        <div class="row quote">
          <div class="col-12 q-pa-xl text-center">
            <h4 class="quattro text-grey-9">"We live in a world at constant risk of public health emergencies. In our increasingly interconnected world, public health emergencies can affect anyone, anywhere."</h4>
            <p class="martel text-body1 text-bold">Tedros Adhanom</p>
          </div>
        </div>

        <div class="fit row items-start content-center bg-grey-2 q-pa-none">
          <div class="col-12 col-sm-6 self-center" style="overflow: auto; min-height: 500px; max-height: 700px;">
            <q-img src="~assets/images/emergency.jpg" fit="cover" height="500px" style="max-height:700px;"/>
          </div>
          <div class="col-12 col-sm-6 q-pa-xl text-left self-center" style="overflow: auto;">
            <p class="martel text-h5 text-primary text-bold q-px-lg">Worried About Medical Emergencies?</p>
            <p class="quattro text-body1 text-grey-9 q-px-lg">Give yourself the peace of mind you deserve by protecting yourself with our <b>Personal Accident Insurance</b><sup>*</sup>.</p>
            <p class="quattro text-body1 text-grey-9 q-px-lg">Now with Covid-19 coverage in case of death or as cash assistance when diagnosed and confirmed as Covid-19 positive<sup>**</sup>.</p>
            <p class="quattro text-caption text-grey-9 q-px-lg q-mt-xl q-mb-none">____</p>
            <p class="quattro text-caption text-grey-9 q-px-lg q-mt-xs q-mb-none"><sup>*</sup>Underwriter: <strong>Philippine British Assurance Company, Inc.</strong></p>
            <p class="quattro text-caption text-grey-9 q-px-lg q-mt-xs"><sup>**</sup>Terms and conditions apply.</p>
          </div>
        </div>

        <div class="q-ma-xl q-pa-lg">
          <h4 class="martel text-primary text-bold text-center q-mt-none">Included Packages</h4>
          <div class="row quattro text-center text-body1 text-bold q-col-gutter-lg">
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Accidental Death and Disablement<p class="text-grey-9 text-weight-regular q-pt-sm">Insured amount paid to next of kin or a percentage of the insured amount for permanent partial disablement within 180 days.</p></div>
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Unprovoked Murder and Assault<p class="text-grey-9 text-weight-regular q-pt-sm">Insured amount is paid for the loss of life of the insured (subject to certain conditions).</p></div>
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Motorcycling<p class="text-grey-9 text-weight-regular q-pt-sm">Extended cover for accidental death and disablement arising from motorcycling.</p></div>
          </div>
          <div class="row quattro text-center text-body1 text-bold q-col-gutter-lg q-mt-xs">
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Accidental Medical Reimbursement<p class="text-grey-9 text-weight-regular q-pt-sm">Reimbursements for the actual and necessary medical or hospital charges for injuries within 26 weeks of the accident.</p></div>
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Daily Hospital Income Benefit<p class="text-grey-9 text-weight-regular q-pt-sm">Daily cash paid out to the insured person for confinement to accredited hospitals by the Department of Health.</p></div>
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Kabuhayan Assistance<p class="text-grey-9 text-weight-regular q-pt-sm">Livelihood assistance for the bereaved family as a result of the accidental of the insured person.</p></div>
          </div>
          <div class="row quattro text-center text-body1 text-bold q-col-gutter-lg q-mt-xs">
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Fire Cash Assistance<p class="text-grey-9 text-weight-regular q-pt-sm">Cash assistance for the insured's household as a result of accidental fire.</p></div>
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Covid-19 Cash Assistance<p class="text-grey-9 text-weight-regular q-pt-sm">Cash assistance in the the insured person is diagnosed and confirmed as Covid-19 positive.</p></div>
            <div class="col-12 col-sm-4">
              <q-icon size="xl" name="mdi-clipboard-check-outline" class="text-secondary q-mb-sm"/><br>
              Optional Addons<p class="text-grey-9 text-weight-regular q-pt-sm">Choice of Mediphone, Emergency Illness, and/or Dental Benefit</p></div>
          </div>
        </div>

        <div class="row bg-grey-9 q-pa-xl">
          <div class="col-12 text-center">
            <h4 class="quattro text-grey-1 q-ma-lg q-px-xl">Do not allow yourself to worry any further.<br>Having you protected now is the right step to getting that peace of mind,<br>for you and your family.</h4>
            <q-btn
              color="amber"
              text-color="black"
              size="large"
              class="martel q-mb-lg"
              to="application">
              Yes, I want to apply now!
            </q-btn>
          </div>
        </div>
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

<style lang="scss">
.q-parallax__media > img {
  width: 1440px;
  top: -274px;
}

div.hero-text, .q-img__content > div {
  padding: 40px;
  width: 70%; 
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(7px);
}

body.screen--xs, body.screen--sm {
  .hero-text {
    width: 80%;
  }
  .hero-text > .hero-heading {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }
  .hero-text > .hero-subheading {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
  p.text-h3 {
    font-size: 2.5rem;
  }
  div.quote h4 {
    font-size: 1.5rem;
  }
}

body.screen--md, body.screen--lg {
  div.quote h4 {
    font-size: 2.215rem;
  }
}
</style>
