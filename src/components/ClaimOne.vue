<template>
  <div>
    <!-- Navbar -->
    <v-app-bar app flat dense dark height="70">
      <v-icon color="light-blue" class="pa-7">mdi-arrow-left-circle</v-icon>
      <div class="d-flex" style="width: 250px">
        <p class="mr-16 mt-5">Claim Processing</p>
        <v-icon class="ml-8 align-center">mdi-menu-down</v-icon>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex mx-5">
        <v-icon color="light-blue">mdi-lightning-bolt</v-icon>
        <p class="mt-5 ml-2">Quick Menu</p>
      </div>
      <div class="d-flex mx-3">
        <v-icon color="light-blue">mdi-file-document-outline</v-icon>
        <p class="mt-5 ml-2">View/Upload Documents</p>
      </div>
      <div class="d-flex mx-5">
        <v-icon color="light-blue">mdi-dots-vertical</v-icon>
        <p class="mt-5 ml-3">Menu</p>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
