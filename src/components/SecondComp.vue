<template>
  <div id="compB">
    <v-card color="#F5F5F5" height="40px" class="mt-7">
      <div class="d-flex">
        <span class="ma-2 teal--text">Claim Number - 434400123571</span>
        <v-divider vertical></v-divider>
        <span class="ma-2 red--text"><b>Feature Claim</b></span>
        <v-spacer></v-spacer>
        <span class="ma-2 teal--text"><b>VIEW DETAILS</b></span>
      </div>
    </v-card>
    <div class="mt-3">
      <div class="grey d-flex lighten-3">
        <p class="align-center font-weight-bold mt-3 mx-5">
          <b>Claim Number - 4340002739</b>
        </p>
        <v-divider vertical class="my-2"></v-divider>
        <p class="font-weight-bold darken-3 mt-3 mx-5" style="color:#D1121B">
          FEATURE CLAIM
        </p>
        <v-spacer></v-spacer>
        <p class="text-subtitle-2 mt-3 mr-5" style="color:#23B1A9">VIEW DETAILS</p>
      </div>
      <div class="mt-3">
        <router-link to="/" id="link">
          <v-btn outlined class="btn pa-5" elevation="0">
            Claim Details</v-btn
          ></router-link
        >
        <v-btn class="btn light-blue white--text pa-5 ml-1 text-subtitle-2"
          >Assessment Sheet</v-btn
        >
        <v-divider class="mr-16"></v-divider>
      </div>
    </div>
    <div class="mt-16">
      <v-img
        src="../assets/70d6b933-994a-41ab-9da9-9606390b847c.jpg"
        height="200"
        width="300"
        class="mx-auto"
      />

      <router-link to="/medical_asses" id="link">
        <v-btn id="img" class="btn light-blue white--text text-caption"
          ><v-icon>mdi-plus-box-outline</v-icon>
          <v-divider vertical class="mx-3 grey lighten-5"></v-divider>
          Add Assessment</v-btn
        ></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#img {
  margin: 0 720px;
  text-transform: none;
}
#link {
  text-decoration: none;
}
#compB {
  width: 96%;
  margin: 0 auto;
}
.btn {
  text-transform: none;
}
</style>
