<template>
  <div class="q-pa-md" style="max-width: 480px">
      <q-list bordered>
        <q-item
          clickable
          v-ripple
          v-for="token in tokens"
          :key="token.address"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>{{ token.name }}</q-item-section>
        </q-item>
      </q-list>
    </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 480px
</style>

<script>
export default {
  data () {
    return {
      tokens: [
        {
          address: '0x3e828ac5c480069d4765654fb4b8733b910b13b2',
          name: 'CLNY',
          symbol: 'CLNY',
          balance: 0
        },
        {
          address: '0x0000000000000000000000000000000000000000',
          name: 'Ether',
          symbol: 'ETH',
          balance: 0
        },
        {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          name: 'DAI',
          symbol: 'ETH',
          balance: 0
        }
      ]
    }
  }
}
</script>
