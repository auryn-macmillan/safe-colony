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
           <q-scroll-area style="height: calc(100% - 48px); margin-top: 48px">
             <q-list
             padding>
              <div
                v-for="domain in domains"
                :key="domain.id"
              >
                <q-item
                 clickable
                 v-ripple
                 v-if="domain.children === null"
                 >
                  <q-item-section>
                    {{ domain.name }}
                  </q-item-section>
                </q-item>
                <q-expansion-item
                 clickable
                 v-ripple
                 v-if="domain.children"
                 expand-separator
                 :label="domain.name"
                 >
                   <q-item
                    clickable
                    v-ripple
                    v-for="children in domain.children"
                    :key="children.id"
                    >
                     <q-item-section>
                       -- {{ children.name }}
                     </q-item-section>
                   </q-item>
                </q-expansion-item>
              </div>
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
      domains: [
        {
          name: 'All Domains',
          id: null,
          children: null
        },
        {
          name: 'Rewards Pot',
          id: 0,
          children: null
        },
        {
          name: 'Root',
          id: 1,
          children: [
            {
              name: 'Domain 2',
              id: 2,
              children: null
            },
            {
              name: 'Domain 3',
              id: 3,
              children: null
            }
          ]
        }
      ],
      computed: {
        hasChildren: function () {
          if (this.children === null) {
            return true
          }
        }
      }
    }
  }
}
</script>
