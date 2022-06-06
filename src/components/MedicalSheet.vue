<template>
  <div id="medi">
    <v-main>
      <v-card color="#F5F5F5" height="45px" class="mt-4 rounded-0" elevation="0">
        <div class="d-flex">
          <span class="ma-2"><b>Claim Number - 4340002739</b></span>
          <v-divider vertical></v-divider>
          <span class="mx-4 my-2" style="color:#D1121B"><b>FEATURE CLAIM</b></span>
          <v-spacer></v-spacer>
          <span class="ma-2" style="color:#23B1A9">VIEW DETAILS</span>
        </div>
      </v-card>
    </v-main>
    <ButtonS></ButtonS>

    <div class="d-flex mt-5">
      <p class="font-weight-bold text-subtitle-1">
        Medical Expenses Assessment Sheets
      </p>
      <v-spacer></v-spacer>
      <router-link to="/medical_asses" id="link"
        ><v-btn class="btn light-blue white--text text-caption"
          ><v-icon>mdi-plus-box-outline</v-icon>
          <v-divider vertical class="mx-3 grey lighten-5"></v-divider>
          Add Assessment</v-btn
        ></router-link
      >
    </div>

    <!-- Table -->

    <div>
      <v-data-table
        id="table"
        hide-default-footer
        disable-sort
        :items="items"
        :headers="headers"
      >
        <template v-slot:[`item.action`]="{}">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-icon flat slot="activator" v-bind="attrs" v-on="on" left
                >mdi-dots-vertical</v-icon
              >
            </template>
            <v-list  v-for="link in links"
                :key="link.text"
              style="border:1px solid #C1C8CC;" >
              <v-list-item
                style="min-height: 20px; width:130px;"
              >
                <template
                  v-if="link.text === 'Modify'"
                >
                  <v-icon class="pr-3">mdi-{{ link.icon }}</v-icon>
                  <v-list-item-title class="teal--text">{{
                    link.text
                  }}</v-list-item-title>
                </template>
                <template v-else>
                  <v-icon class="pr-3">mdi-{{ link.icon }}</v-icon>
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import ButtonS from "./ButtonS";
export default {
  components: { ButtonS },
  data() {
    return {
     links: [
        { icon: "eye", text: "View" },
        { icon: "pencil-outline", text: "Modify" },
      ],
      itemlist: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      items: [
        {
          Settlement: "Standard",
          Claim: "Cashless to the insured",
          Transaction: "Partial Payment",
          Disability: "0",
          Deductible: "11,600",
          Time: "11:00",
          Copay: "0",
          PerDay: "1500",
          Maxno: "6",
          Claimed: "24,000",
          Amount: "12,400",
          Net: "12,400",
          Total: "24,000",
          TotalNon: "11,600",
        },
        {
          Settlement: "Standard",
          Claim: "Cashless to the insured",
          Transaction: "Partial Payment",
          Disability: "0",
          Deductible: "11,600",
          Time: "11:00",
          Copay: "0",
          PerDay: "1500",
          Maxno: "6",
          Claimed: "24,000",
          Amount: "12,400",
          Net: "12,400",
          Total: "24,000",
          TotalNon: "11,600",
        },
      ],
      headers: [
        {
          text: "Action",
          align: "start",
          value: "action",
          class: "white--text",
          style: "",
          width: 50,
        },
        {
          text: "Settlement Type",
          value: "Settlement",
          class: "white--text",
          width: 150,
        },
        {
          text: "Claim Payment Type",
          value: "Claim",
          class: "white--text",
          width: 200,
        },
        {
          text: "Transaction Type",
          value: "Transaction",
          class: "white--text",
          width: 150,
        },
        {
          text: "Disability Amount",
          value: "Disability",
          class: "white--text",
          width: 150,
        },
        {
          text: "Deductible Amount",
          value: "Deductible",
          class: "white--text",
          width: 150,
        },
        {
          text: "Time Deductible (In Hours)",
          value: "Time",
          class: "white--text",
          width: 200,
        },
        {
          text: "Copay%",
          value: "Copay",
          class: "white--text",
          width: 50,
          border: 1,
        },
        {
          text: "Per Day Maximum",
          value: "PerDay",
          class: "white--text",
          width: 150,
        },
        {
          text: "Max no. of days Payable",
          value: "Maxno",
          class: "white--text",
          width: 200,
        },
        {
          text: "Claimed Amount",
          value: "Claimed",
          class: "white--text",
          width: 150,
        },
        {
          text: "Amount Payable",
          value: "Amount",
          class: "white--text",
          width: 150,
        },
        {
          text: "Net Payable",
          value: "Net",
          class: "white--text",
          width: 150,
        },
        {
          text: "Total Invoice Amount",
          value: "Total",
          class: "white--text",
          width: 150,
        },
        {
          text: "Total Non Payable Amount",
          value: "TotalNon",
          class: "white--text",
          width: 200,
        },
      ],
    };
  },
};
</script>

<style>
#medi {
  width: 95%;
  margin: 0 auto;
}
#link {
  text-decoration: none;
}

.btn {
  text-transform: none;
}

.v-data-table-header tr{
  background-color:#23B1A9;
 
}
.v-data-table-header tr th{
 border:1px solid #C1C8CC;
 font-size:14px;
 font-weight:bold
}
.v-data-table__wrapper table tbody tr td{
   border-left:1px solid #C1C8CC;
   height:20px
}
</style>
