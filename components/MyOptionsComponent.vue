<template>
  Options {{foo}}
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import {mapStores} from "pinia";
import {useMainStore} from "~/stores";

export default defineComponent({
  name: "MyOptionsComponent",
  computed: {
    ...mapStores(useMainStore),
    foo() {
      return this.mainStore.fooOpts
    }
  },
  async mounted() {
    await this.mainStore.getFooOpts()
  }
})
</script>


<style scoped lang="scss">

</style>