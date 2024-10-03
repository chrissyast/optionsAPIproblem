<template>
    <v-main>
      Composition {{ foo }}
    </v-main>
</template>

<script setup lang="ts">
import {useMainStore} from "~/stores";

  const store = useMainStore()
  const foo = ref()
  await store.getFooComp()
  foo.value = store.fooComp

</script>

<style scoped>

</style>