<template>
  <div id="compA">
    <v-main>
      <v-card
        class="mt-6 rounded-0"
        color="#10242B0D"
        height="50px"
        elevation="0"
      >
        <div class="d-flex">
          <span class="ma-3 teal--text"
            ><b>Claim Number - 434400123571</b></span
          >
          <v-divider vertical class="my-2"></v-divider>
          <span class="new ma-3"><b>NEW CLAIM</b></span>
          <v-spacer></v-spacer>
          <span class="ma-3 teal--text" @click="change" v-if="val == true"
            >HIDE DETAILS</span
          >
          <span class="ma-3 teal--text" @click="change" v-if="val == false"
            >SHOW DETAILS</span
          >
        </div>
      </v-card>
      <v-divider></v-divider>
      <v-card color="#10242B0D" class="rounded-0" elevation="0" v-show="val">
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
      <router-link to="/" class="img"
        ><v-btn color="#1EBBD9" class="white--text rounded-0" id="btn1"
          >Claim Details</v-btn
        ></router-link
      >
      <router-link to="/asse" class="img"
        ><v-btn class="ml-2 rounded-0" id="btn2"
          >Assessment Sheet</v-btn
        ></router-link
      >
      <v-divider></v-divider>
    </div>
    <MedicalExp />
  </div>
</template>

<script>
import MedicalExp from "./MedicalExp.vue";
export default {
  data() {
    return {
      val: true,
    };
  },
  components: {
    MedicalExp,
  },
  methods: {
    change() {
      this.val = !this.val;
    },
  },
};
</script>

<style>
#compA {
  width: 96%;
  margin: 0 auto;
}
.new {
  color: #d1121b;
}

/* Buttons */
.img {
  text-decoration: none;
}
#btn1 {
  width: 149px;
  text-transform: none;
  height: 48px;
  letter-spacing: 0px;
}
#btn2 {
  width: 188px;
  text-transform: none;
  height: 48px;
  background-color: white;
  letter-spacing: 0px;
}
</style>
