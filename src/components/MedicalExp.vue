<template>
  <div class="mt-5">
    <h2>Medical Expenses-AS00018</h2>
    <!-- New -->
    <v-system-bar dark color="#1EBBD9" height="40px">
      <h4 class="white--text">Basic Details</h4>
      <v-spacer></v-spacer>
      <span>
        <v-icon
          color="#4DD0E1"
          class="tbtn"
          @click="toggleA"
          v-show="valA == true"
          >mdi-plus</v-icon
        >
        <v-icon
          color="#4DD0E1"
          class="tbtn"
          @click="toggleA"
          v-show="valA == false"
          >mdi-minus</v-icon
        >
      </span>
    </v-system-bar>
    <v-card v-show="valA" id="cardA">
      <div id="mainA">
        <v-form>
          <v-layout>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2"
                >Hospital Name<span class="red--text">*</span></label
              >
              <v-text-field outlined solo dense label="Enter..."></v-text-field>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Pin(Hospital)</label>
              <v-text-field disabled outlined solo dense label="Enter..."></v-text-field>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Hospital Alias Name</label>
              <v-text-field disabled outlined solo dense label="Enter..."></v-text-field>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Roshini Code</label>
              <v-text-field disabled outlined solo dense label="Enter..."></v-text-field>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Hospital Status</label>
              <v-text-field disabled outlined solo dense label="Enter..."></v-text-field>
            </v-flex>
          </v-layout>
          <!-- 2nd row -->
          <v-layout class="secrow">
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Hospital Flags</label>
              <v-text-field disabled outlined solo dense label="Enter..."></v-text-field>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Date of Admission</label>
              <v-text-field
                type="date"
                outlined
                dense
                solo
                prepend-inner-icon="mdi-calendar"
              ></v-text-field>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Time of Admission</label>
              <v-select
                outlined
                dense
                solo
                prepend-inner-icon="mdi-clock"
                placeholder="Enter..."
              ></v-select>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Date of Discharge</label>
              <v-text-field
                outlined
                dense
                solo
                prepend-inner-icon="mdi-calendar"
              ></v-text-field>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Time of Discharge</label>
              <v-select
                outlined
                dense
                solo
                placeholder="Enter..."
                prepend-inner-icon="mdi-clock"
              ></v-select>
            </v-flex>
          </v-layout>

          <!-- 3rd row -->
          <v-layout>
            <v-flex class="pa-1 sm3 mt-6">
              <v-card class="vcard rounded-0" elevation="0">
                <v-checkbox label="If PED" class="mx-2"></v-checkbox>
              </v-card>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">lcd code</label>
              <v-select solo outlined dense label="select"></v-select>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Long Description</label>
              <v-select solo outlined dense label="Enter..."></v-select>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Long Description</label>
              <v-select solo outlined dense label="Enter..."></v-select>
            </v-flex>
            <v-flex class="pa-1 sm3">
              <label class="subtitle-2">Hospital Type</label>
              <v-select solo outlined dense label="select"></v-select>
            </v-flex>
          </v-layout>
        </v-form>

        <!-- Diagnosis -->
        <h3 class="mt-3">Diagnosis</h3>
        <v-simple-table class="table">
          <thead class="thead">
            <th>Sr No.</th>
            <th class="invoice-details">Diagnosis</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr>
              <td class="mt-5">1</td>
              <td>
                <v-text-field
                  id="invoice-details"
                  class="mt-1"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </td>
              <td>
                <v-icon class="white red--text mx-10">
                  mdi-delete-outline
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-simple-table>

        <div class="btn">
          <v-icon color="#23B1A9">mdi-plus</v-icon> <span>Add Row</span>
        </div>

        <!-- Procedures codes -->
        <h3>Procedures Codes</h3>
        <v-layout class="mt-4">
          <v-flex class="mr-2 sm4">
            <label class="subtitle-2">Procedure Code Level 1 & text</label>
            <v-text-field solo outlined dense label="Enter..."></v-text-field>
          </v-flex>
          <v-flex class="mr-2 sm4">
            <label class="subtitle-2">Procedure Code Level 2 & text</label>
            <v-text-field solo outlined dense label="Enter..."></v-text-field>
          </v-flex>
          <v-flex class="sm4">
            <label class="subtitle-2">Procedure Code Level 3 & text</label>
            <v-text-field solo outlined dense label="Enter..."></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <label class="subtitle-2"
              >Medical History<span class="red--text">*</span></label
            >
            <v-text-field solo outlined dense label="Enter..."></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex class="sm3 mr-2">
            <label class="subtitle-2"
              >Pre Existing Condition<span class="red--text">*</span></label
            >
            <v-card class="card rounded-0" elevation="0">
              <v-radio-group v-model="row" row class="radio">
                <v-radio label="Yes" value="radio-1" color="#23B1A9"></v-radio>
                <v-radio label="No" value="radio-2" color="#23B1A9"></v-radio>
              </v-radio-group>
            </v-card>
          </v-flex>
          <v-flex class="sm3 mr-2">
            <label class="subtitle-2"
              >Duration of Illness<span class="red--text">*</span></label
            >
            <v-text-field solo outlined dense label="Enter..."></v-text-field>
          </v-flex>
          <v-flex class="sm3 mr-2">
            <label class="subtitle-2"
              >Payment Type<span class="red--text">*</span></label
            >
            <v-card class="card rounded-0" elevation="0">
              <v-radio-group v-model="row" row class="radio body-1">
                <v-radio
                  label="Cashless"
                  value="radio-1"
                  color="#23B1A9"
                ></v-radio>
                <v-radio
                  label="Reinbursement"
                  value="radio-2"
                  color="#23B1A9"
                ></v-radio>
              </v-radio-group>
            </v-card>
          </v-flex>
          <v-flex class="sm3 mr-2">
            <label class="subtitle-2"
              >Treatment Type<span class="red--text">*</span></label
            >
            <v-select solo outlined dense label="select"></v-select>
          </v-flex>
          <v-flex class="sm3">
            <label class="subtitle-2"
              >Submit<span class="red--text">*</span></label
            >
            <v-card class="card rounded-0" elevation="0">
              <v-radio-group v-model="row" row class="radio">
                <v-radio label="Yes" value="radio-1" color="#23B1A9"></v-radio>
                <v-radio label="No" value="radio-2" color="#23B1A9"></v-radio>
              </v-radio-group>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-card class="scard rounded-0" elevation="0">
            <label class="subtitle-2">Is This an Accident Case</label>
            <v-select solo outlined dense></v-select>
          </v-card>
        </v-layout>
      </div>
    </v-card>
    <!-- Accident Details -->
    <v-system-bar dark color="#1EBBD9" height="40px" class="mt-2">
      <h4 class="white--text">Accident Details</h4>
      <v-spacer></v-spacer>
      <span>
        <v-icon
          color="#4DD0E1"
          class="tbtn"
          @click="toggleB"
          v-show="valB == true"
          >mdi-plus</v-icon
        >
        <v-icon
          color="#4DD0E1"
          class="tbtn"
          @click="toggleB"
          v-show="valB == false"
          >mdi-minus</v-icon
        >
      </span>
    </v-system-bar>
    <v-card v-show="valB" id="cardB">
      <div id="mainB">
        <v-layout warp>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Name of Accident</label>
            <v-select solo label="select" outlined dense class="ab"></v-select>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Others</label>
            <v-text-field solo label="Enter..." outlined dense></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Fir Registered</label>
            <v-select
              label="select"
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-select>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Reason For Not Intimating Police</label>
            <v-text-field solo label="Enter..." outlined dense></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">FIR/GD Number</label>
            <v-text-field
              label="Enter..."
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout warp>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">FIR Date</label>
            <v-text-field
              prepend-inner-icon="mdi-calendar"
              type="date"
              outlined
              solo
              dense
            ></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Police Station Name</label>
            <v-text-field solo label="Enter..." outlined dense></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Police Station Address Line 1</label>
            <v-text-field label="Enter..." outlined solo dense></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Police Station Address Line 2</label>
            <v-text-field label="Enter..." outlined solo dense></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Police Station Address Line 3</label>
            <v-text-field label="Enter..." outlined solo dense></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout warp>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Pincode</label>
            <v-text-field
              label="Enter..."
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">City</label>
            <v-select
              label="Name"
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-select>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">District</label>
            <v-text-field label="Enter..." outlined solo dense></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">State</label>
            <v-select
              label="select"
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-select>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Phone</label>
            <v-text-field
              prepend-inner-icon="mdi-phone"
              label="Enter..."
              outlined
              dense
              solo
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout warp>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">Email</label>
            <v-text-field
              prepend-inner-icon="mdi-email"
              label="Enter..."
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-text-field>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">MLC</label>
            <v-select
              label="select"
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-select>
          </v-flex>
          <v-flex class="pa-1 sm3">
            <label class="subtitle-2">MLC Number</label>
            <v-text-field
              label="Enter..."
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-text-field>
          </v-flex>
          <v-flex sm5 class="pa-1">
            <label class="subtitle-2"
              >Accident Description<span class="red--text">*</span></label
            >
            <v-text-field
              class="input"
              label="Enter..."
              outlined
              dense
              solo
              placeholder="Full Name"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
    <!-- Buttons submit -->
    <v-card flat class="mt-4 mb-5">
      <div class="d-flex">
        <v-btn id="btnA" class="mt-2 mr-2 #D1121B--text">
          <v-icon color="red" class="mr-1">mdi-backspace-outline</v-icon>
          <v-divider vertical color="red" class="mr-1" /><span
            >RESET</span
          ></v-btn
        >
        <v-btn id="btnB" class="mt-2 #D1121B--text">
          <v-icon color="red" class="mr-1">mdi-backspace-outline</v-icon>
          <v-divider vertical color="red" class="mr-1" />
          <span>CANCEL</span></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn class="mt-2 white--text" color="teal">
          <v-icon color="white">mdi-arrow-right-circle-outline</v-icon
          ><v-divider vertical color="white" class="mx-1" />
          <span>SUBMIT</span></v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valA: true,
      valB: true,
    };
  },
  methods: {
    toggleA() {
      this.valA = !this.valA;
    },
    toggleB() {
      this.valB = !this.valB;
    },
  },
};
</script>

<style scoped>
/* Icon */
#mainB {
  width: 96%;
  margin: auto;
}
.btn {
  margin-left: 600px;
  color: #23b1a9;
  margin-top: 30px;
  margin-bottom: 30px;
}
.tbtn {
  background-color: white;
}
.vcard {
  border: 1px solid rgb(205, 202, 202);
  height: 43px;
  border-radius: 0px;
  box-shadow: 0px 1px 4px grey !important;
}
.v-text-field {
  border-radius: 0px;
}
.row {
  width: 100%;
}
.ab {
  border-radius: 0px;
}
.panel {
  border: 2px solid #e0e0e0;
}
#but {
  margin-left: 500px;
}
#but span {
  color: #23b1a9;
}
.scard {
  width: 280px;
}
#mainA {
  width: 96%;
  margin: auto;
}
#btnA span {
  color: #d1121b;
}
#btnB span {
  color: #d1121b;
}
#cardA {
  border: 1px solid #b0bec5;
  padding-top: 30px;
}
#cardB {
  border: 1px solid #b0bec5;
  padding-top: 30px;
}
#btnA {
  border: 1px solid #d1121b;
}
#btnB {
  border: 1px solid #d1121b;
}
.card {
  border: 1px solid #b0bec5;
  border-radius: 0px;
  height: 40px;
  width: 280px;
  margin-right: 0px;
  box-shadow: 0px 1px 4px grey !important;
}
.radio {
  border: 0px;
  padding: 0px;
  margin-top: 5px;
  margin-left: 2px;
}
.input {
  width: 555px;
}

/* Table */
.table {
  margin-bottom: 30px;
  margin-top: 15px;
}
td {
  border: 1px solid rgb(206, 203, 203);
  width: 100px;
  height: 50px;
}
th {
  border: 1px solid rgb(221, 216, 216);
  color: white;
}
.thead {
  background-color: #23b1a9;
  height: 35px;
}
.invoice-details {
  width: 500px;
}
</style>
