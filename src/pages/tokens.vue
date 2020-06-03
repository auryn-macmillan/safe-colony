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
              <vth-blockie :string="token.address" />
            </q-avatar>
          </q-item-section>
          <q-item-section>{{ token.name }}</q-item-section>
          <q-item-section class="text-right" v-money="money">{{ token.balance }} {{ token.symbol }}</q-item-section>
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
          balance: 10000
        },
        {
          address: '0x0000000000000000000000000000000000000000',
          name: 'Ether',
          symbol: 'ETH',
          balance: 50
        },
        {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          name: 'DAI',
          symbol: 'DAI',
          balance: 5000
        }
      ]
    }
  }
}
</script>
