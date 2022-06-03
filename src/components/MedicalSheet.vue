<template>
  <div id="medi">
    <v-main>
      <v-card color="#F5F5F5" height="40px" class="mt-4">
        <div class="d-flex">
          <span class="ma-2 teal--text">Claim Number - 434400123571</span>
          <v-divider vertical></v-divider>
          <span class="mx-4 my-2 red--text"><b>FEATURE CLAIM</b></span>
          <v-spacer></v-spacer>
          <span class="ma-2 teal--text">View Details</span>
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
        id="tabl"
        disable-filtering
        hide-default-footer
        disable-sort
        :items="items"
        :headers="headers"
      >
      <template v-slot:[`item.action`]="{ item }">
  <v-icon small class="black--text">mdi-dots-vertical</v-icon>{{ item.text }}
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
          class: "teal white--text border-left:1px solid black",
          style: "",
          width: 50,
        },
        {
          text: "Settlement Type",
          value: "Settlement",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Claim Payment Type",
          value: "Claim",
          class: "teal white--text",
          width: 200,
        },
        {
          text: "Transaction Type",
          value: "Transaction",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Disability Amount",
          value: "Disability",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Deductible Amount",
          value: "Deductible",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Time Deductible (In Hours)",
          value: "Time",
          class: "teal white--text",
          width: 200,
        },
        {
          text: "Copay%",
          value: "Copay",
          class: "teal white--text",
          width: 50,
          border: 1,
        },
        {
          text: "Per Day Maximum",
          value: "PerDay",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Max no. of days Payable",
          value: "Maxno",
          class: "teal white--text",
          width: 200,
        },
        {
          text: "Claimed Amount",
          value: "Claimed",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Amount Payable",
          value: "Amount",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Net Payable",
          value: "Net",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Total Invoice Amount",
          value: "Total",
          class: "teal white--text",
          width: 150,
        },
        {
          text: "Total Non Payable Amount",
          value: "TotalNon",
          class: "teal white--text",
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

#tabl.v-data-table.tbody.td {
  border: 1px solid grey;
}
</style>
