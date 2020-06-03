<template>
  <q-layout view="lHr lpr fFf">

    <q-header class="bg-primary text-white">

      <q-tabs align="left">
        <q-route-tab to="/" label="Tokens" />
        <q-route-tab to="/Permissions" label="Permissions" />
        <q-route-tab to="/rewards" label="Rewards" />
      </q-tabs>
    </q-header>

    <q-drawer
           v-model="drawer"
           show-if-above
           :width="150"
           :breakpoint="600"
         >
           <q-scroll-area style="height: calc(100% - 150px); margin-top: 48px">
             <q-list padding>

               <q-item clickable v-ripple>
                 <q-item-section>
                   All Domains
                 </q-item-section>
               </q-item>

               <q-item active clickable v-ripple>
                 <q-item-section>
                   Rewards
                 </q-item-section>
               </q-item>

               <q-item clickable v-ripple>
                 <q-item-section>
                   Root
                 </q-item-section>
               </q-item>

               <q-item clickable v-ripple>
                 <q-item-section>
                   Domain 1
                 </q-item-section>
               </q-item>

               <q-item clickable v-ripple>
                 <q-item-section>
                   Domain 2
                 </q-item-section>
               </q-item>
             </q-list>
           </q-scroll-area>
          <div class="bg-primary absolute-top" style="height: 48px">
          </div>
         </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
