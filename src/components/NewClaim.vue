<template>
  <div id="compA">
    <v-main>
    <v-card class="mt-6" color="#10242B0D" height="50px">
      <div class="d-flex">
        <span class="ma-2 teal--text">Claim Number - 434400123571</span>
        <v-divider vertical id="divider"></v-divider>
        <span class="ma-2 red--text">New Claim</span>
        <v-spacer></v-spacer>
        <span class="ma-2 teal--text">Hide Details</span>
      </div>
    </v-card>
    <v-card color="#10242B0D">
      <v-layout class="mx-4">
        <v-flex class="sm2">
          <p class="subtitle-2">Claim Number</p>
          <p class="body-2">43440761524</p>
        </v-flex>
        <v-flex class="sm2">
          <p class="subtitle-2">Policy Number</p>
          <p class="body-2">8312826273</p>
        </v-flex>
         <v-flex class="sm2">
          <p class="subtitle-2">Claimant Name</p>
          <p class="body-2">Ameya Sharma</p>
        </v-flex>
         <v-flex class="sm2">
          <p class="subtitle-2">Relationship with Insured</p>
          <p class="body-2">Brother</p>
        </v-flex>
         <v-flex class="sm2">
          <p class="subtitle-2">Insured Name</p>
          <p class="body-2">Deepak Sharma</p>
        </v-flex>
         <v-flex class="sm2">
          <p class="subtitle-2">Benefit Claimed</p>
          <p class="body-2">11500</p>
        </v-flex>
      </v-layout>
      <v-layout class="mx-4">
        <v-flex class="sm2">
          <p class="subtitle-2">Sum Insured</p>
          <p class="body-2">5000000000</p>
        </v-flex>
        <v-flex class="sm2">
          <p class="subtitle-2">Balance Sum Insured</p>
          <p class="body-2">489000000</p>
        </v-flex>
         <v-flex class="sm2">
          <p class="subtitle-2">Indemnity Reserve Amount</p>
          <p class="body-2">10000</p>
        </v-flex>
         <v-flex class="sm2">
          <p class="subtitle-2">Expense Reserve Amount</p>
          <p class="body-2">500000</p>
        </v-flex>
         <v-flex class="sm2">
          <p class="subtitle-2">Product Name</p>
          <p class="body-2">Travel Guard with sublimate</p>
        </v-flex>
      </v-layout>
    </v-card>
    </v-main>
    <div class="mt-4">
      <router-link to="/" class="img"><v-btn  color="#1EBBD9" class="white--text" id="btn1">Claim Details</v-btn></router-link>
    <router-link to="/asse" class="img"><v-btn  class="ml-2"  id="btn2">Assessment Sheet</v-btn></router-link>
      <v-divider></v-divider>
  </div>
    <MedicalExp/>
  </div>
</template>

<script>

import MedicalExp from './MedicalExp.vue';
export default {
  components:{
    
    MedicalExp
  }
};
</script>

<style>
#compA{
  width:96%;
  margin:0 auto;
}


/* Buttons */
.img{
  text-decoration:none
}
#btn1{
  width:149px;
   text-transform:none;
  height:45px;
}
#btn2{
  width:188px;
  text-transform:none;
  height:45px;
}
#divider{
  width:40px
}
</style>
