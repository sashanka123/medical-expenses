<template>
  <v-app>
    <ClaimOne/>
      <router-view></router-view>
  </v-app>
</template>

<script>
 import ClaimOne from "./components/ClaimOne.vue";

export default {
  components: { ClaimOne },
};
</script>
<style>

</style>
