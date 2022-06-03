<template>
  <div class="mt-4">
      <router-link to="/" class="img"><v-btn  id="btn1">Claim Details</v-btn></router-link>
    <router-link to="/asse" class="img"><v-btn color="#1EBBD9" class="white--text ml-2"  id="btn2">Assessment Sheet</v-btn></router-link>
      <v-divider></v-divider>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
</style>