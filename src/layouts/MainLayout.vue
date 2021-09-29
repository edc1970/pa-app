<template>
  <q-layout view="lHh lpR lff">
    <q-header
      bordered
      class="header q-pa-sm text-grey-8">

      <q-toolbar class="q-py-xs full-width row">
        <div class="col-md-3 col-sm-12">
          <q-btn dense flat round icon="mdi-menu" class="float-left lt-md" @click="toggleLeftDrawer" />
          <a href="/">
            <q-toolbar-title>
              <q-avatar square size="70px" class="q-mx-sm">
                <img src="icons/logo.png" class="q-mx-sm" style="height: 70px;"/>
              </q-avatar>
              <p class="text-h5 text-primary inline-block">PHILSECURE</p>
            </q-toolbar-title>
          </a>
        </div>

        <div class="col-6 gt-sm">
          <div class="row justify-center">
            <template v-for="(menuItem, index) in menuList1" :key="index" v-bind="menuItem">
              <q-btn flat class="martel" type="a" :href="menuItem.link">{{ menuItem.label }}</q-btn>
              <!-- <q-separator :key="'sep' + index"  v-if="menuItem.separator" vertical /> -->
            </template>
          </div>
        </div>

        <div class="col-md-3 gt-sm">
          <div class="row float-right">
            <q-btn v-if="!loginStatus" class="q-ml-md martel" icon="mdi-login-variant" color="secondary" type="a" to="login" label="Login" />

            <q-btn v-else outline class="q-ml-md martel" label="My Account">
              <q-menu class="shadow-5">
                <q-list>
                  <q-item clickable b-close-popup v-ripple>
                    <q-item-section side>
                      <q-icon color="primary" name="mdi-folder-heart-outline" />
                    </q-item-section>
                    <q-item-section class="martel">My Plans</q-item-section>
                  </q-item>

                  <q-item clickable b-close-popup v-ripple>
                    <q-item-section side>
                      <q-icon color="primary" name="mdi-file-table-outline" />
                    </q-item-section>
                    <q-item-section class="martel">Receipts</q-item-section>
                  </q-item>
                  
                  <q-item clickable b-close-popup v-ripple>
                    <q-item-section side>
                      <q-icon color="primary" name="mdi-file-download-outline" />
                    </q-item-section>
                    <q-item-section class="martel">Downloadable Forms</q-item-section>
                  </q-item>
                  
                  <q-separator />

                  <q-item clickable b-close-popup v-ripple>
                    <q-item-section side>
                      <q-icon color="primary" name="mdi-exit-to-app" />
                    </q-item-section>
                    <q-item-section class="martel">Logout</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" shadow-3 class="bg-blue-1" style="width: 230px" >
      <q-toolbar class="header row" style="height: 95px;">
        <a href="/">
          <q-toolbar-title stretch>
            <q-avatar square size="50px" class="q-mx-sm">
                <img src="icons/logo.png" class="q-mx-sm" style="height: 50px;"/>
              </q-avatar>
              <p class="text-h6 text-primary inline-block">PHILSECURE</p>
          </q-toolbar-title>
        </a>
      </q-toolbar>

      <template v-for="(menuItem, index) in menuList1" :key="index" v-bind="menuItem">
        <q-list>
          <q-item clickable v-ripple tag="a" :href="menuItem.link">
            <q-item-section  class="q-pt-xs martel">
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
        </q-list>
      </template>

      <q-toolbar>
        <q-btn v-if="!loginStatus" class="martel" icon="mdi-login-variant" color="secondary" type="a" to="login" label="Login" />
      </q-toolbar>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="footer q-pa-lg text-white full-width row inline wrap justify-left" >
      <div class="col-xs-12 col-md-3">
        <q-avatar square size="50px;" class="q-my-md">
          <img src="icons/logo_black.png" class="q-mx-sm" style="height: 50px;"/>
        </q-avatar>
        <p class="quattro text-subtitle2 text-grey-10">&#169; 2021 - Philsecure Insurance Agency Corp.<br>All rights reserved.</p>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3 q-pr-md q-pt-xs">
        <template v-for="(menuItem, index) in menuList1" :key="index" v-bind="menuItem">
          <q-list dense>
            <q-item clickable v-ripple exact tag="a" :href="menuItem.link">
              <q-item-section class="q-pt-xs martel text-grey-10">
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
          </q-list>
        </template>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3 q-pr-md q-pt-xs">
        <template v-for="(menuItem, index) in menuList2" :key="index" v-bind="menuItem">
          <q-list dense>
            <q-item clickable v-ripple exact tag="a" :to="menuItem.link">
              <q-item-section  class="q-pt-xs martel text-grey-10">
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
          </q-list>
        </template>
      </div>

      <div class="col-xs-12 col-md-3">
        <q-btn flat round class="text-grey-10" padding="sm" icon="mdi-facebook" size="x-large" type="a" href="https://www.facebook.com/philsecureinsurance" target="_blank"/>
        <q-btn flat round class="text-grey-10" padding="sm" icon="mdi-facebook-messenger" size="x-large"/>
        <q-btn flat round class="text-grey-10" padding="sm" icon="mdi-youtube" size="x-large"/>
        <q-btn flat round class="text-grey-10" padding="sm" icon="mdi-twitter" size="x-large"/>

        <p class="quattro text-subtitle2 text-grey-10 q-mt-lg q-mb-xs">Customer Support Hotline:</p>
        <p class="martel text-h3 text-grey-10">0908.123.4567</p>
      </div>
    </q-footer>

    <!-- <q-page-scroller position="bottom" :scroll-offset="200" :offset="[0, 30]">
      <q-btn fab icon="mdi-chevron-up" color="accent" />
    </q-page-scroller> -->
  </q-layout>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    let loginStatus = ref(false)
    const menuList1 = [
      {
        icon: 'mdi-home',
        label: 'Home',
        link: '/',
        separator: true
      },
      {
        icon: '',
        label: 'Insurance Products',
        link: 'http://www.phil-secure.com/insurance-products.html',
        separator: true
      },
      {
        icon: '',
        label: 'How To File A Claim',
        link: '#/file-a-claim',
        separator: true
      },
      {
        icon: '',
        label: 'Contact',
        link: 'http://www.phil-secure.com/contact.html',
        separator: false
      }
    ]

    const menuList2 = [
      {
        icon: '',
        label: 'Privacy Policy',
        link: 'privacy-policy',
        separator: true
      },
      {
        icon: '',
        label: 'Cookie Use',
        link: 'cookie',
        separator: false
      }
    ]

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      loginStatus,
      menuList1,
      menuList2
    }
  },

}
</script>

<style scoped lang="scss">
  .header {
    backdrop-filter: blur(7px);
    background-color: #ffffffc4;

  }
  .footer {
    background-color: #d39e52;
  }
  a.sidebar {
    color: #000000;
    font-weight: 500;
  }
</style>
