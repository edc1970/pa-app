<template>
  <q-page padding class="bg-grey-3">
    <div class="row q-py-sm">
      <div class="full-width text-center">
        <p class="martel text-h4 text-primary title q-mb-sm">Personal Accident Insurance
          <!-- <br/><span class="q-ml-md text-subtitle1 text-grey-9">Underwriter: <strong>Philippine British Assurance Company, Inc.</strong></span> -->
        </p>
        <p class=" martel text-h5 q-py-sm sub-title text-center">Application Form</p>
      </div>
    </div>
    
    <q-form
      method="post"
      @submit.prevent="submitForm"
      autocomplete="off"
    >
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
        class="bg-white quattro shadow-5">

        <q-step
          :name="1"
          title="Fill-Up Application Form"
          prefix="1"
          :done="done1"
        >
          <div class="row text-h6">
            <div class="col-12">
              <p class="martel text-subtitle2 text-bold text-toUpperCase">A. Please Fill-Up The Application Form</p>
            </div>
          </div>

          <div class="row text-h6">
            <div class="col-12 col-md-4">
              <q-input autofocus clearable outlined stack-label v-model="firstName" @blur="(saveData('firstName'))" label="First Name" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase validation-bg"/>
            </div>
            <div class="col-12 col-md-4">
              <q-input clearable outlined stack-label v-model="middleName" @blur="(saveData('middleName'))" label="Middle Name" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase validation-bg"/>
            </div>
            <div class="col-12 col-md-4">
              <q-input clearable outlined stack-label v-model="lastName" @blur="(saveData('lastName'))" label="Last Name" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase validation-bg"/>
            </div>
          </div>

          <div class="row q-mt-sm text-h6">
            <div class="col-12 col-md-6">
              <q-input clearable outlined stack-label v-model="presentAddress" @blur="(saveData('presentAddress'))" label="Present Address" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
            <div class="col-12 col-md-3">
              <q-input clearable outlined stack-label v-model="presentCity" @blur="(saveData('presentCity'))" label="Present City" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
            <div class="col-12 col-md-3">
              <q-input clearable outlined stack-label v-model="presentProvince" @blur="(saveData('presentProvince'))" label="Present Province" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
          </div>

          <div class="col">
            <q-checkbox v-model="samePresent" label="Permanent address is the same with present address"/>
          </div>

          <div class="row q-mt-sm text-h6">
            <div class="col-12 col-md-6">
              <q-input clearable outlined stack-label :disable="samePresent === true" v-model="permanentAddress" @blur="(saveData('permanentAddress'))" label="Permanent Address" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
            <div class="col-12 col-md-3">
              <q-input clearable outlined stack-label :disable="samePresent === true" v-model="permanentCity" @blur="(saveData('permanentCity'))" label="Permanent City" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
            <div class="col-12 col-md-3">
              <q-input clearable outlined stack-label :disable="samePresent === true" v-model="permanentProvince" @blur="(saveData('permanentProvince'))" label="Permanent Province" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase" />            </div>
          </div>

          <div class="row q-mt-sm text-h6">
            <div class="col-12 col-md-4">
              <q-input clearable outlined stack-label type="tel" mask="(###) ####-####" v-model="landlinePhone" @blur="(saveData('landlinePhone'))" label="Landline Phone" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
            <div class="col-12 col-md-4">
              <q-input clearable outlined stack-label type="tel" mask="(####) ###-####" v-model="mobilePhone" @blur="(saveData('mobilePhone'))" label="Mobile Phone" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
            <div class="col-12 col-md-4">
              <q-input clearable outlined stack-label type="email" v-model="emailAddress" @blur="(saveData('emailAddress'))" label="Email Address" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
          </div>

          <div class="row q-mt-sm text-h6">
            <div class="col-12 col-md-4">
              <q-select clearable outlined stack-label options-dense v-model="sex" :options="sexOptions" @blur="(saveData('sex'))" label="Sex" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase"/>
            </div>
            <div class="col-12 col-md-4">
              <q-input clearable outlined stack-label type="text" v-model="birthDate" @blur="calculateAge(); saveData('birthDate')" placeholder="MM/DD/YYYY" label="Birthdate" :rules="[val => !!val || 'Field is required']" class="q-ma-xs bg-grey-1 text-uppercase">
                <template v-slot:append>
                  <q-icon name="mdi-calendar" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="birthDate" mask="MM/DD/YYYY">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>

          <q-stepper-navigation class="row justify-end content-end">
            <q-btn flat @click="cancelApplication" color="primary" label="Cancel Application" class="martel q-mr-sm" />
            <q-btn :disable="disableButton1" @click="{ scrollTop(); done1 = true; step = 2; }" color="primary" label="Continue" class="martel"/>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Choose Plans &amp; Add-Ons"
          prefix="2"
          :done="done2">

          <div class="row q-col-gutter-lg">
            <!-- Plans -->
            <div class="col-12 col-md-6">
              <p class="martel text-subtitle2 text-bold">B. Please Choose Your Plan</p>

              <div class="q-pl-sm q-pt-none">
                <div v-for="planOption in planOptions" :key="planOption.id">
                  <input
                    type="radio"
                    v-model="plan"
                    :id="planOption.id"
                    :value="parseInt(planOption.id)"
                    name="plan"
                    class="q-ma-sm" />
                  <label :for="planOption.id" class="q-ml-sm">{{planOption.name}}</label>
                </div>
              </div>

              <div class="q-ml-md q-pt-md q-pb-lg q-mr-md">
                <q-table
                  title="Basic Coverage"
                  dense
                  :rows="planRows"
                  :columns="planColumns"
                  row-key="name"
                  hide-pagination
                  :pagination="pagination"
                />
              </div>

              <div class="q-ml-md q-pt-none q-pb-lg">
                <q-btn rounded color="secondary" size="sm" class="q-mr-sm q-mb-sm martel">Compare Plans</q-btn>
                <q-btn rounded color="secondary" size="sm" class="q-mb-sm martel">Scope And Terms Of Coverage</q-btn>
              </div>
            </div>

            <!-- Addons -->
            <div class="col-12 col-md-6">
              <p class="martel text-subtitle2 text-bold">C. Please Choose Add-Ons (Optional, uncheck items you don't need.)</p>

              <div class="q-pl-sm q-pt-none">
                <div>
                  <input
                    type="checkbox"
                    v-model="addon1"
                    id="addon1"
                    class="q-ma-sm" />
                  <label for="addon1" class="q-ml-sm">Mediphone (annual per person), add <b>{{new Intl.NumberFormat('en-US').format(planOptions[plan-1].medical)}}</b></label>
                  <q-btn dense outline round color="white" size="xs" label="?" class="q-ml-sm q-mb-md text-grey-10" @mouseenter="showAddonDetail('showAddon1')" @mouseleave="showAddonDetail('showAddon1')"></q-btn>
                </div>

                <div>
                  <input
                    type="checkbox"
                    v-model="addon2"
                    id="addon2"
                    class="q-ma-sm" />
                  <label for="addon2" class="q-ml-sm">Emergency Illness to <b>{{new Intl.NumberFormat().format(planOptions[plan-1].emergency_limit)}}</b> aggregate, add <b>{{new Intl.NumberFormat().format(planOptions[plan-1].emergency)}}</b></label>
                  <q-btn dense outline round color="white" size="xs" label="?" class="q-ml-sm q-mb-md text-grey-10" @mouseenter="showAddonDetail('showAddon2')" @mouseleave="showAddonDetail('showAddon2')"></q-btn>
                </div>
                <div>
                  <input
                    type="checkbox"
                    v-model="addon3"
                    id="addon3"
                    class="q-ma-sm" />
                  <label for="addon3" class="q-ml-sm">Dental Benefit (annual per person), add <b>{{new Intl.NumberFormat().format(planOptions[plan-1].dental)}}</b></label>
                  <q-btn dense outline round color="white" size="xs" label="?" class="q-ml-sm q-mb-md text-grey-10" @mouseenter="showAddonDetail('showAddon3')" @mouseleave="showAddonDetail('showAddon3')"></q-btn>
                </div>
              </div>

              <div class="q-pl-none q-pt-none">
                <transition
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                >
                  <div id="showAddon1" class="quattro text-caption q-ml-md q-mt-md">
                    <p class="text-bold">MEDIPHONE</p>
                    <p>A 24-hour medical assistance service, which allows the client with just a telephone call, to speak to a doctor and
                    obtain medical advice.</p>
                    <p>MEDIPHONE is a medical service provided over the phone, which offers to the customer:</p>
                    <ul>
                      <li>Medical orientation all day long without waiting time in the hospital queue</li>
                      <li>Real-time medical and technical support for all health-related questions</li>
                      <li>General information and advice</li>
                      <li>Medical assessment / advice</li>
                    </ul>
                    <p>Considering the Deontological Code of the medical practice: It is not an ethical medical practice for any means of consults to be carried out exclusively by letter, phone, radio, press or internet. Therefore, IT IS NOT ALLOWED TO PRESCRIBE ANY TREATMENT WITHOUT EXAMINING THE PATIENT.</p>
                    <p>For Mediphone, it must be only done for therapeutic purposes or as a medical orientation: MEDICAL ADVICE.</p>
                    <p>However, given the evolution of the times (brought about by the pandemic), it is now acceptable and practiced to issue electronic prescription during a telephone consultation.</p>
                    <p>More information can be found at the <b>Scope and Terms of Coverage</b>.</p>
                  </div>
                </transition>

                <div id="showAddon2" class="quattro text-caption q-ml-md q-mt-md">
                  <p class="text-bold">EMERGENCY (ILLNESS)</p>
                  <p>The policy shall cover Emergency Room expenses, up to the maximum coverage, from a serious or dangerous condition or state requiring immediate attention, otherwise it may cause loss of life or may cause permanent disability, of the insured individual.</p>
                  <p>EMERGENCY</p>
                  <p>An emergency medical condition means the sudden and, at that time, an unexpected onset of a health condition that requires immediate medical treatment and/or an operation. These are life threatening conditions that require immediate first aide or care by physician - serious risk to the health of the individual, serious impairment to bodily functions and serious dysfunction of any body organ or part. If the treatment is not available, the emergency could result in weakened bodily functions, serious and lasting damage to organs, limbs or other body parts, or even death.</p>
                  <p>Emergency conditions include:</p>
                  <ul>
                    <li>Acute abdominal pain</li>
                    <li>Severe Respiratory Problems / Difficulty breathing</li>
                    <li>Fainting</li>
                    <li>Bleeding (Uncontrolled or Internal)</li>
                    <li>Sudden severe pain</li>
                    <li>Poisoning</li>
                    <li>Injuries (Vehicular, Burns, Lacerations)</li>
                    <li>Sudden facial drooping or weakness in an arm or leg</li>
                    <li>Severe allergic reactions</li>
                    <li>Suspected heart attack or stroke/ Chest Pain Convulsion or Seizure</li>
                  </ul>
                  <p>More information can be found at the <b>Scope and Terms of Coverage</b>.</p>
                </div>

                <div id="showAddon3" class="quattro text-caption q-ml-md q-mt-md">
                  <p class="text-bold">DENTAL BENEFIT</p>
                  <p>Member may avail of the following dental care services from any of Health Partners Dental Access, Inc. accredited dental clinics:</p>
                  <ul>
                    <li>Oral examination/diagnosis as needed</li>
                    <li>Oral prophylaxis - every six (6) months (twice a year)</li>
                    <li>Problem consultation and treatment planning</li>
                    <li>Simple tooth extraction when indicated (excluding impaction)</li>
                    <li>Temporary fillings when indicated</li>
                    <li>Re-cementation of loose jacket crowns</li>
                    <li>Adjustment/repair of dentures</li>
                    <li>Oral hygiene instruction</li>
                    <li>Dental health education and consultation</li>
                    <li>Orthodontic treatment consultation</li>
                    <li>Discounted rates up to 15% for other services not covered by the dental plan (e.g. dentures, x-rays, permanent fillings and dental surgery)</li>
                  </ul>
                  <p>Prior appointment with the dental clinic is required. In case of non-availability of card, member has to coordinate with PhilBritish to arrange the availment with the accredited dentist.</p>
                  <p>Using non-accredited dentist through reimbursement is not allowed.</p>
                  <p>More information can be found at the <b>Scope and Terms of Coverage</b>.</p>
                </div>
              </div>
            </div>
          </div>

          <q-stepper-navigation class="row justify-end content-end">
            <q-btn flat @click="cancelApplication" color="primary" label="Cancel Application" class="martel q-mr-sm" />
            <q-btn flat @click="step = 1" color="primary" label="Back" class="martel q-mr-sm" />
            <q-btn :disable="disableButton2" @click="{ scrollTop(); done2 = true; step = 3 }" color="primary" label="Continue" class="martel"/>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Select Payment Method"
          prefix="3"
          :done="done3">

          <div class="row q-col-gutter-lg">
            <div class="col-12">
              <p class="martel text-subtitle2 text-bold">D. How Do You Wish To Pay?</p>
            </div>
          </div>

          <div class="row q-col-gutter-lg">
            <div class="col-12 col-md-6 text-center">
              <p class="text-h6 text-center">We accept a wide range of payment methods in one solution - over-the-counter, online banking, e-wallets, and more coming soon!</p> 
              <q-img
                src="../assets/images/pay_channels.svg"
                fit="contain"
                style="width:70%"
                class="q-my-lg"
              />
            </div>

            <div class="col-12 col-md-6">
              <div class="text-subtitle1 text-bold">
                Total Amount To Pay:<span class="text-right text-h5 text-bold float-right q-pr-sm">₱ {{new Intl.NumberFormat().format(totalToPay)}}</span>
              </div>

              <q-list
                dense
                bordered
                class="bg-white shadow-2 text-grey-9 q-mt-sm q-mb-lg q-py-sm">

                <q-item>
                  <q-item-section>I. Basic Coverage</q-item-section>
                  <q-item-section side>{{new Intl.NumberFormat().format(planOptions[plan-1].total)}}</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>II. Addons:</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="q-ml-md">a. Mediphone</q-item-section>
                  <q-item-section side>{{addon1 ? new Intl.NumberFormat().format(planOptions[plan-1].medical) : 0}}</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="q-ml-md">b. Emergency Illness</q-item-section>
                  <q-item-section side>{{addon2 ? new Intl.NumberFormat().format(planOptions[plan-1].emergency) : 0}}</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="q-ml-md">c. Dental Benefit</q-item-section>
                  <q-item-section side>{{addon3 ? new Intl.NumberFormat().format(planOptions[plan-1].dental) : 0}}</q-item-section>
                </q-item>
              </q-list>

              <q-select outlined stack-label options-dense v-model="channel" :options="channelOptions" label="Payment Method" @update:model-value="getOutletOptions(channel)" :rules="[val => !!val || 'Field is required']" class="bg-grey-1 text-uppercase"/>
              <q-select outlined stack-label options-dense v-model="outlet" :options="outletOptions" label="Payment Outlets" @update:model-value="getOutletDetails(channel,outlet)" :rules="[val => !!val || 'Field is required']" class="bg-grey-1 text-uppercase"/>

              <div>
                <p class="text-h6">Instructions:</p>
                <ol style="line-height: 1.6">
                  <li>Please review the amounts stated above. Click <b>"Back"</b> to change Plans or Addons.</li>
                  <li>Select your preferred payment channel.</li>
                  <li>Selecting <b>"Banking"</b>, <b>"EWallet"</b>, or <b>"Card Payments"</b> will redirect you to the payment channel's webpage. Follow further instructions.</li>
                  <li>Selecting <b>"Non Bank OTC"</b> or <b>"BNPL"</b> will generate a Reference Number. You will then receive an email containing instructions how to proceed.</li>
                  <li>Click <b>"Proceed to Payment"</b> to checkout.</li>
                </ol>
              </div>
            </div>
          </div>

          <q-stepper-navigation class="row justify-end content-end">
            <q-btn flat :disable="disableCancel" @click="cancelApplication" color="primary" label="Cancel Application" class="martel q-mr-sm" />
            <q-btn flat :disable="disableBack" @click="step = 2" color="primary" label="Back" class="martel q-mr-sm" />
            <q-btn
              type="submit"
              color="primary"
              :disable="disableButton3"
              :loading="submitting"
              @click="done3 = true"
              label="Proceed To Payment"
              class="martel">
              <template v-slot:loading>
                <q-spinner-orbit class="on-left" color="white"/>
                Processing...
              </template>
            </q-btn>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-form>
  </q-page>
</template>

<script>
import { ref, watchEffect, computed } from 'vue'
import { useQuasar, uid, date, openURL } from 'quasar'
import { axios, bux_api  } from 'boot/axios'
//import channelData from '../assets/channels.json'

export default {
  name: 'ApplicationPage',
  
  setup () {
    const $q = useQuasar()
    const step = ref(1)
    const done1 = ref(false)
    const done2 = ref(false)
    const done3 = ref(false)
    
    // Verify session
    const session = $q.sessionStorage.getItem('session-date')
    const session_done = $q.sessionStorage.getItem('session-done')

    // form data
    let uuid = uid() //generate user ID session
    let firstName = ref(null)
    let middleName = ref(null)
    let lastName = ref(null)
    let presentAddress = ref(null)
    let presentCity = ref(null)
    let presentProvince = ref(null)
    let permanentAddress = ref(null)
    let permanentCity = ref(null)
    let permanentProvince = ref(null)
    let landlinePhone = ref(null)
    let mobilePhone = ref(null)
    let emailAddress = ref(null)
    let sex = ref(null)
    let birthDate = ref(null)
    const samePresent = ref(false) 
    const sexOptions = ['FEMALE', 'MALE']
    const addon1 = ref(true)
    const addon2 = ref(true)
    const addon3 = ref(true)
    let addonNumber = ref(null)

    let plan = ref(1) // default is Plan A 
    let planOptions = ref([])

    /* Verify Geolocation */
    /* axios.get('https://iplist.cc/api')
      .then(res => {
        if (res.data.countrycode !== 'PH'){
          $q.dialog({
            title: 'Alert',
            persistent: true,
            html: true,
            class: 'text-h6',
            message: `<p style='text-align: center; line-height: 1.2; color: #505050;'>Our sincere apologies! This product is not yet available in <b>${res.data.countryname}</b>.</p>`,
            ok: {
              color: 'primary',
            }
          }).onOk(() => {
            // Clear session and stored data
            clearSession()
            // Redirect to home
            window.open('/','_self')
          })
        }else{
          fetchInitData()
        }
      })
      .catch(error => {
        console.log(error)
      }) */
    
    fetchInitData()
    
    /* let planOptions = [  // later we load this value from the database
      {
        id: '1', 
        name: 'Plan A',
        accidental_death: 100000,
        unprovoked_murder: 50000,
        motorcycling: 50000,
        accidental_medical: 20000,
        daily_hospital: 200,
        daily_hospital_days: 15,
        kabuhayan_assistance: 10000,
        fire_assistance: 10000,
        covid_assistance: 5000,
        medical: 240.00,
        emergency: 20.00,
        emergency_limit: 5000,
        dental: 165.00,
        total: 134.16
      },
      {
        id: '2', 
        name: 'Plan B',
        accidental_death: 250000,
        unprovoked_murder: 100000,
        motorcycling: 75000,
        accidental_medical: 40000,
        daily_hospital: 300,
        daily_hospital_days: 10,
        kabuhayan_assistance: 15000,
        fire_assistance: 10000,
        covid_assistance: 10000,
        medical: 240.00,
        emergency: 40.00,
        emergency_limit: 10000,
        dental: 165.00,
        total: 321.05
      },
    ] */

    const planColumns = [
      {
        name: 'coverage',
        label: '',
        align: 'left',
        field: row => row.name,
      },
      {
        name: 'plan',
        label: 'Plan Amount',
        align: 'center',
        field: 'plan'
      }
    ]
    
    let planRows = computed(() => [
      {
        name: 'Accidental Death And Disablement',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].accidental_death)
      },
      {
        name: 'Unprovoked Murder And Assault',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].unprovoked_murder)
      },
      {
        name: 'Motorcycling',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].motorcycling)
      },
      {
        name: 'Accidental Medical Reimbursement',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].accidental_medical)
      },
      {
        name: 'Daily Hospital Income Benefit (Due To Accident)',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].daily_hospital) + ' / day, max. ' + planOptions.value[plan.value-1].daily_hospital_days + ' days' 
      },
      {
        name: 'Kabuhayan Assistance (Due To Accident)',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].kabuhayan_assistance)
      },
      {
        name: 'Fire Cash Assistance (Residential of Insured)',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].fire_assistance)
      },
      {
        name: 'Cash Assistance (Due To COVID-19 Positive)',
        plan: new Intl.NumberFormat().format(planOptions.value[plan.value-1].covid_assistance)
      },
      {
        name: 'Total Premium Per Person (Inclusive of Taxes)',
        plan: '₱ ' + new Intl.NumberFormat().format(planOptions.value[plan.value-1].total)
      },
    ])

    let channel = ref(null)
    let outlet = ref(null)
    let channelData = ref(null)
    let channelOptions = ref(null)
    let outletOptions = ref(null)
    let pay_code = ref(null)
    let pay_instructions = ref(null)
    let pay_refcode = ref(null)
    let pay_checkout_url = ref(null)

    let totalToPay = computed(() => {
      let total = parseFloat(planOptions.value[plan.value-1].total)

      if (addon1.value){
         total += parseFloat(planOptions.value[plan.value-1].medical)
      }
      if (addon2.value){
         total += parseFloat(planOptions.value[plan.value-1].emergency)
      }
      if (addon3.value){
         total += parseFloat(planOptions.value[plan.value-1].dental)
      }

      return total
    })
    
    const pagination = ref({
      page: 1,
      rowsPerPage: 20
    })

    let disableButton1 = ref(false)
    let disableButton2 = ref(false)
    let disableButton3 = ref(false)
    let disableCancel = ref(false)
    let disableBack = ref(false)
    const submitting = ref(false)

    watchEffect(
      () => {
        // watch for checkbox
        if (samePresent.value) {
          permanentAddress.value = presentAddress.value
          permanentCity.value = presentCity.value
          permanentProvince.value = presentProvince.value
          $q.localStorage.set('permanentAddress',toUpperCase(presentAddress.value))
          $q.localStorage.set('permanentCity',toUpperCase(presentCity.value))
          $q.localStorage.set('permanentProvince',toUpperCase(presentProvince.value))
        }

        // first Continue button
        if (firstName.value && middleName.value && lastName.value && 
            presentAddress.value && presentCity.value && presentProvince.value &&
            permanentAddress.value && permanentCity.value && permanentProvince.value &&
            mobilePhone.value && emailAddress.value && sex.value && birthDate.value)
        {
          disableButton1.value = false
        }else{ 
          disableButton1.value = true
        }

        if (done2.value === true){
          $q.localStorage.set('plan',plan.value)
          $q.localStorage.set('addon1',addon1.value)
          $q.localStorage.set('addon2',addon2.value)
          $q.localStorage.set('addon3',addon3.value)
        }
      }
    )

    /* 
     * All function declarations
     */

    function getPlans(){
      return new Promise((resolve, reject) => {
        bux_api.get('/get_plans')
          .then(res => {
            planOptions.value = res.data
            resolve('ok')
            console.log('Plan Options is ok.')
          })
          .catch(error => {
            resolve(error)
            //console.error(error)
          })
      })
    }

    function getChannels(){
      return new Promise((resolve, reject) => {
        bux_api.get('/channel_codes')
          .then(res => {
            channelData.value = res.data              
            channelOptions.value = Object.keys(channelData.value).sort()
            resolve('ok')
            console.log('Channel Codes is ok.')
          })
          .catch(error => {
            resolve(error)
            //console.error(error)
          })
      })
    }

    async function fetchInitData(){
      const [getPlansRes, getChannelsRes] = await Promise.all([getPlans(), getChannels()])
      //console.log(getPlansRes,getChannelsRes)
      if (getPlansRes == 'ok' && getChannelsRes == 'ok'){
        console.log('Initial data was successfully fetched.')
        // remove the loading screen

        // check for old session
        checkSession(session,session_done)
      }else{
        console.error('Error encountered while initializing data.')
        // remove the loading screen

        // show the error dialog
        $q.dialog({
          title: 'Alert',
          html: true,
          class: 'quattro',
          message: '<p>Oh no! We encountered an error while trying to initialize some data. Please try again in a few minutes to check if the situation has been resolved. If the problem persists, you may send us an email at <b>cs@phil-secure.com</b></p>',
          ok: {
            color: 'primary',
            class: 'martel'
          },
        }).onOk(() => {
          window.open('/','_self')
        })
      }
    }

    function checkSession(session,session_done){
      if (session && session_done == ''){
        $q.dialog({
          title: 'Confirm',
          persistent: true,
          html: true,
          cancel: true,
          class: 'quattro',
          message: `It appears you have previously started an application. Do you wish to continue your session of <b>${date.formatDate(session,'dddd, MMMM D, YYYY h:mm A')}</b>?`,
          ok: {
            label: 'Yes, continue',
            color: 'primary',
            class: 'martel'
          },
          cancel: {
            label: 'No, begin a fresh one',
            flat: true,
            class: 'martel'
          }
        }).onOk(() => {
          // load session and previous data
          firstName.value = $q.localStorage.getItem('firstName')
          middleName.value = $q.localStorage.getItem('middleName')
          lastName.value = $q.localStorage.getItem('lastName')
          presentAddress.value = $q.localStorage.getItem('presentAddress')
          presentCity.value = $q.localStorage.getItem('presentCity')
          presentProvince.value = $q.localStorage.getItem('presentProvince')
          permanentAddress.value = $q.localStorage.getItem('permanentAddress')
          permanentCity.value = $q.localStorage.getItem('permanentCity')
          permanentProvince.value = $q.localStorage.getItem('permanentProvince')
          samePresent.value = $q.localStorage.getItem('samePresent')
          landlinePhone.value = $q.localStorage.getItem('landlinePhone')
          mobilePhone.value = $q.localStorage.getItem('mobilePhone')
          emailAddress.value = $q.localStorage.getItem('emailAddress')
          sex.value = $q.localStorage.getItem('sex')
          birthDate.value = $q.localStorage.getItem('birthDate')
          if ($q.localStorage.getItem('plan')){
            plan.value = $q.localStorage.getItem('plan')
            addon1.value = $q.localStorage.getItem('addon1')
            addon2.value = $q.localStorage.getItem('addon2')
            addon3.value = $q.localStorage.getItem('addon3')
          }
        }).onCancel(() => {
          clearSession()
          $q.sessionStorage.set('session-date',Date.now())
          $q.localStorage.set('uuid',uuid)
        })
      }else{
        clearSession()
        $q.sessionStorage.set('session-date',Date.now())
        $q.sessionStorage.set('session-done','')
        $q.localStorage.set('uuid',uuid)
      }
    }

    function clearSession() {
      // Clear Local Storage and Session of any previously saved data
      $q.sessionStorage.set('session-date','')
      $q.sessionStorage.set('session-done','')

      $q.localStorage.set('uuid','')
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
      $q.localStorage.set('plan','')
      $q.localStorage.set('addon1','')
      $q.localStorage.set('addon2','')
      $q.localStorage.set('addon3','')
      $q.localStorage.set('pay_checkouturl','')
      $q.localStorage.set('pay_refcode','')
      $q.localStorage.set('pay_code','')
      $q.localStorage.set('pay_seller','')
      $q.localStorage.set('pay_imageurl','')
      $q.localStorage.set('pay_created','')
      $q.localStorage.set('pay_expiry','')
      $q.localStorage.set('pay_amount','')
      $q.localStorage.set('pay_description','')
      $q.localStorage.set('pay_instruction','')
    }

    const cancelApplication = () => {
      $q.dialog({
        title: 'Confirm',
        persistent: true,
        html: true,
        cancel: true,
        class: 'quattro',
        message: '<p class="text-subtitle1 text-bold">Do you really wish to cancel your application?</p><p>It only takes about 5 minutes to ensure your safety and peace of mind.</p>',
        ok: {
          label: 'I want to continue',
          color: 'primary',
          class: 'martel'
        },
        cancel: {
          label: 'Yes, cancel it',
          flat: true,
          class: 'martel'
        }
      }).onOk(() => {
        // Continue with application
      }).onCancel(() => {
        // Clear session and stored data
        clearSession()
        // Redirect to home
        window.open('/','_self')
      })
    }

    const saveData = (fielddata) => {
      $q.localStorage.set(fielddata,toUpperCase(eval(fielddata).value))
    }

    function scrollTop() {
      window.scrollTo(0,0);
    }

    const toUpperCase = (str) => {
      if(typeof str === 'string') {
          return str.toUpperCase();
      } else {
          return '';
      }
    };

    const getOutletDetails = (channel,outlet) => {
      pay_code.value = channelData.value[channel][outlet]['code']
    }

    const getOutletOptions = (channel) => {
      if (channel){
        outletOptions.value = Object.keys(channelData.value[channel]).sort()
        outlet.value = null
        return outletOptions.value
      }else{
        return null
      }   
    }

    const showAddonDetail = (addonNumber) => {
      const state = document.getElementById(addonNumber).style.display;
      
      if (state == 'block') {
        setTimeout(function () {
          document.getElementById(addonNumber).style.display = 'none'
        }, 200);
      } else {
          document.getElementById(addonNumber).style.display = 'block'
      }
    }

    const showAgeDialog = () => {
      $q.dialog({
        title: 'Oops!',
        class: 'quattro',
        html: true,
        message: 'As a matter of policy, age eligibility of the applicant <b>must be 18 years old</b> at the time of enrollment <b>and has not reached the 65th birthday</b> at the inception of the insurance coverage.',
        ok: {
          color: 'primary',
          class: 'martel'
        }
      }).onOk(() => {
        birthDate.value = null
      })
    }

    const calculateAge = () => {
      if (birthDate.value){
        let birthDateYear = new Date(birthDate.value)
        //console.log(birthDateYear.getFullYear(),1956)

        if (parseInt(birthDateYear.getFullYear()) >= 1956) {
          let age = new Date() - new Date(birthDate.value)
          
          age = Math.floor(age/(1000*60*60*24*365.25))
          
          //console.log(age)
          if (age < 18 || age > 65) {
            showAgeDialog()
          }
        }else{
          showAgeDialog()
        }
      }
    }

    return {
      step,
      done1,
      done2,
      done3,

      // form data
      firstName,
      middleName,
      lastName,
      presentAddress,
      presentCity,
      presentProvince,
      permanentAddress,
      permanentCity,
      permanentProvince,
      landlinePhone,
      mobilePhone,
      emailAddress,
      sex,
      birthDate,
      samePresent,
      sexOptions,
      plan,
      planOptions,
      planColumns,
      planRows,
      pagination,
      addon1,
      addon2,
      addon3,
      addonNumber,
      channel,
      channelOptions,
      channelData,
      outlet,
      outletOptions,
      pay_code,
      pay_instructions,
      pay_refcode,
      pay_checkout_url,
      totalToPay,

      getPlans,
      getChannels,
      fetchInitData,
      clearSession,
      cancelApplication,
      saveData,
      scrollTop,
      toUpperCase,
      getOutletOptions,
      getOutletDetails,
      showAddonDetail,
      calculateAge,

      disableButton1,
      disableButton2,
      disableButton3,
      disableCancel,
      disableBack,
      submitting,

      uuid,

      // form submission
      submitForm() {
        // do something when form is submitted
        console.log('Processing payment...')
        submitting.value = true
        disableButton3.value = true
        disableCancel.value = true
        disableBack.value = true
        //console.log(pay_code.value)
        bux_api
          .post('/generate_code',
          {
            "req_id": $q.localStorage.getItem('uuid'),
            "channel": pay_code.value,
            "amount": totalToPay.value.toString(),
            "description": "PA-" + planOptions.value[plan.value-1].name,
            "expiry": 24,
            "email": $q.localStorage.getItem('emailAddress'),
            "contact": $q.localStorage.getItem('mobilePhone'),
            "name": $q.localStorage.getItem('firstName') + ' ' + $q.localStorage.getItem('middleName') + ' ' + $q.localStorage.getItem('lastName'),
            "notification_url": "https://philsecure-pa.netlify.app/bux_notif",
            "redirect_url": "https://philsecure-pa.netlify.app/application-done",
            "param1": "",
            "param2": "",
            "cust_shoulder": 0
          })
          .then(res => {
            //console.log(res.data)
            submitting.value = false
            disableButton3.value = false
            disableCancel.value = false
            disableBack.value = false
            if (res.data.payment_url){
              pay_checkout_url.value = res.data.payment_url
              pay_refcode.value = res.data.ref_code

              openURL(pay_checkout_url.value,null,
                {
                  menubar: false, 
                  toolbar: false,
                  noreferrer: false
                }
              )
            }else{
              pay_checkout_url.value = ''
              pay_refcode.value = res.data.ref_code
            }
            //console.log(channelData.value, channel.value, outlet.value)
            //console.log(channelData.value[channel.value][outlet.value]['instructions'].Payment)

            $q.localStorage.set('pay_code',channel.value + " | " + outlet.value)
            $q.localStorage.set('pay_checkouturl',pay_checkout_url.value)
            $q.localStorage.set('pay_refcode',pay_refcode.value)
            $q.localStorage.set('pay_seller',res.data.seller_name)
            $q.localStorage.set('pay_imageurl',res.data.image_url)
            $q.localStorage.set('pay_created',res.data.created)
            $q.localStorage.set('pay_expiry',res.data.expiry)
            $q.localStorage.set('pay_amount',totalToPay.value)
            $q.localStorage.set('pay_description',"PA-" + planOptions.value[plan.value-1].name)
            $q.localStorage.set('pay_instruction',channelData.value[channel.value][outlet.value]['instructions'].Payment)
            
            // Save personal information and selected plans to database
            console.log('Saving information...')

            console.log('Application done.')
            // Show finished application page
            $q.sessionStorage.set('session-done','true')
            window.open('/application-done','_self')
          })
          .catch(error => {
            submitting.value = false
            disableButton3.value = false
            disableCancel.value = false
            disableBack.value = false
            console.log(error)
            $q.dialog({
              title: 'Alert',
              persistent: true,
              html: true,
              class: 'quattro',
              message: '<p>An error occurred while trying to access the selected Payment Channel. Please try again in a few minutes to check if the situation has been resolved or select a different Payment Channel if the error persist.</p><p style="font-weight:bold;">'+error+'</p>',
              ok: {
                color: 'primary',
                class: 'martel'
              }
            })
          })
      }
    }
  },
}
</script>

<style lang="scss">
.q-field__bottom {
  background-color: #fff;
}

input[name="plan"], input[type="checkbox"] {
  transform: scale(1.5);
}

div#showAddon1, div#showAddon2, div#showAddon3 {
  display: none;
}

div.q-card__section.q-dialog__title {
  background-color: $negative;
  color: white;
  padding: 5px 10px;
}

div.q-card__section.q-dialog__message {
  padding-top: 16px !important;
}

@media screen and (max-width: 599px){
  .title {
      font-size: 1.5rem;
      line-height: 1.5rem;
  }
  .sub-title {
      font-size: 1.2rem;
      line-height: 1.2rem;
  }

  .q-stepper--horizontal .q-stepper__step-inner {
    padding: 15px;
  }
}
</style>