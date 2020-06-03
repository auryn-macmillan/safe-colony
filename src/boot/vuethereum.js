// import something here
import Vue from 'vue'
import Vuethereum from 'vuethereum'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async (app/* { app, router, Vue ... } */) => {
  Vue.use(Vuethereum)
}
