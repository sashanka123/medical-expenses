<template>
  <v-main>
    <v-app-bar app flat dense dark height="70">
      <v-icon color="light-blue" class="pa-7">mdi-arrow-left-circle</v-icon>
      <div class="d-flex" style="width: 250px">
        <p class="mr-16 mt-5">Add Assesment Sheet</p>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex mx-5">
        <p class="mt-5 ml-2">Close</p>
      </div>
    </v-app-bar>
    <v-form>
      <div class="main">
        <h3 class="mb-4">Add Details to Assessment Sheet</h3>
        <!---------------------------------------------------------------- Basic Details ----------------------------------------------------------------------------->
        <v-system-bar dark color="#1EBBD9" height="40px">
          <h4 class="white--text">Basic Details</h4>
          <v-spacer></v-spacer>
          <span>
            <v-icon
              @click="toggle1"
              class="tbtn"
              color="#4DD0E1"
              v-show="val1 == true"
              >mdi-plus</v-icon
            >
            <v-icon
              @click="toggle1"
              class="tbtn"
              color="#4DD0E1"
              v-show="val1 == false"
              >mdi-minus</v-icon
            >
          </span>
        </v-system-bar>
        <v-card v-show="val1" class="ncard rounded-0" elevation="0">
          <div class="card">
            <v-layout>
              <v-flex class="mx-1 sm3 mr-3">
                <label class="subtitle-2"
                  >Settlement Type<span class="star ml-1">*</span></label
                >
                <v-select solo outlined dense label="select"></v-select>
              </v-flex>
              <v-flex class="mx-1 sm3 mr-3">
                <label class="subtitle-2"
                  >Claim Payment Type <span class="star ml-1">*</span></label
                >
                <v-select solo outlined dense label="select"></v-select>
              </v-flex>
              <v-flex class="mx-1 sm3 mr-3">
                <span class="subtitle-2"
                  >Transaction Type<span class="star ml-1">*</span></span
                >
                <v-select solo outlined dense label="select"></v-select>
              </v-flex>
              <v-flex class="mx-1 sm3 mr-3">
                <label class="subtitle-2"
                  >Country Name<span class="star ml-1">*</span></label
                >
                <v-select
                  label="Preselected list item"
                  disabled
                  outlined
                  dense
                  solo
                ></v-select>
              </v-flex>
              <v-flex class="mx-1 sm3">
                <label class="subtitle-2"
                  >Currency Name<span class="star ml-1">*</span></label
                >
                <v-select
                  disabled
                  label="Preselected list item"
                  outlined
                  dense
                  solo
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-card class="vcard rounded-0 mr-3" elevation="0">
                <label class="subtitle-2"
                  >Rate of Exchange<span class="star ml-1">*</span></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-card>
              <!-- Date Picker -->
              <v-card class="vcard rounded-0 mr-3" elevation="0">
                <label class="subtitle-2"
                  >Rate of Exchange Date<span class="star ml-1">*</span></label
                >
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      placeholder="DD/MM/YYYY"
                      class="form-control rounded-0"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      solo
                      dense
                      outlined
                    >
                      <template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-calendar </v-icon>
                      </template>
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-card>
              <v-card class="vcard rounded-0 mr-3" elevation="0">
                <label class="subtitle-2"
                  >Rate of Exchange Upadated Manually<span class="star ml-1"
                    >*</span
                  ></label
                >
                <v-text-field
                  disabled
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-card>
            </v-layout>
          </div>
        </v-card>

        <!--------------------------------------------------------------------- Invoice Details --------------------------------------------------------------------->
        <v-system-bar dark color="#1EBBD9" height="40px" class="mt-3">
          <h4 class="white--text">Invoice Details</h4>
          <v-spacer></v-spacer>
          <span>
            <v-icon
              color="#4DD0E1"
              class="tbtn"
              @click="toggle2"
              v-show="val2 == true"
              >mdi-plus</v-icon
            >
            <v-icon
              color="#4DD0E1"
              class="tbtn"
              @click="toggle2"
              v-show="val2 == false"
              >mdi-minus</v-icon
            >
          </span>
        </v-system-bar>
        <v-card v-show="val2" class="ncard rounded-0" elevation="0">
          <!-- Inner div of invoice details -->
          <div class="inner">
            <v-layout>
              <v-flex>
                <v-card id="check" class="my-5">
                  <v-checkbox
                    class="my-3 mx-3"
                    label="Non Payable Expense"
                    color="red"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-card>
              </v-flex>
            </v-layout>

            <!-- Table -->
            <v-simple-table class="table">
              <thead class="thead">
                <th>Is it not Payable</th>
                <th>Serial Number</th>
                <th>Invoice Number</th>
                <th>Invoice Date</th>
                <th class="invoice-details">Invoice Details</th>
                <th>Invoice Amount</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr>
                  <td><v-checkbox checked class="ml-10 mx-0"></v-checkbox></td>
                  <td>44542434234</td>
                  <td>
                    <v-text-field
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      id="invoice-details"
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-icon class="white red--text mt-1 ml-10">
                      mdi-delete-outline
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>

            <div class="btn">
              <v-icon color="#23B1A9">mdi-plus</v-icon> <span>Add Row</span>
            </div>
            <v-divider class="my-4"></v-divider>
            <v-layout>
              <v-flex class="sm2">
                <label class="subtitle-2">Total Non-Payable Amount</label>
                <v-text-field
                  disabled
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
            </v-layout>
          </div>
        </v-card>

        <!------------------------------------------------------------- Amount Details------------------------------------------------------------------->
        <v-system-bar color="#1EBBD9" height="40px" class="mt-3">
          <h4 class="white--text">Amount Details</h4>
          <v-spacer></v-spacer>
          <span>
            <v-icon
              color="#4DD0E1"
              class="tbtn"
              @click="toggle3"
              v-show="val3 == true"
              >mdi-plus</v-icon
            >
            <v-icon
              color="#4DD0E1"
              class="tbtn"
              @click="toggle3"
              v-show="val3 == false"
              >mdi-minus</v-icon
            >
          </span>
        </v-system-bar>
        <v-card v-show="val3" class="ncard rounded-0" elevation="0">
          <div class="card">
            <v-layout>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2">Deductible Amount</label>
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2">Copay%</label>
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2"
                  >Claimed Amount<span class="star ml-1">*</span></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2"
                  >Amount Payable<span class="star ml-1">*</span></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1">
                <label class="subtitle-2"
                  >Net Payable<span class="star ml-1">*</span></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2"
                  >Deductible(Hours)<span class="star ml-1">*</span></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2"
                  >No of Hours of Hospitilization<span class="star ml-1"
                    >*</span
                  ></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2"
                  >Per Day Benefit<span class="star ml-1">*</span></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1 mr-3">
                <label class="subtitle-2"
                  >Payable Days<span class="star ml-1">*</span></label
                >
                <v-text-field
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
              <v-flex class="sm3 mx-1">
                <label class="subtitle-2"
                  >Payable Amount<span class="star ml-1">*</span></label
                >
                <v-text-field solo outlined dense></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-card class="vcard rounded-0 mr-3" elevation="0">
                <label class="subtitle-2"
                  >Amount Payable<span class="star ml-1">*</span></label
                >
                <v-text-field
                  outlined
                  dense
                  solo
                  placeholder="Enter..."
                ></v-text-field>
              </v-card>
              <v-card class="vcard rounded-0 mr-3" elevation="0">
                <label class="subtitle-2"
                  >Net Payable<span class="star ml-1">*</span></label
                >
                <v-text-field
                  outlined
                  dense
                  solo
                  placeholder="Enter..."
                ></v-text-field>
              </v-card>
            </v-layout>
          </div>
        </v-card>

        <!--Non Payable Expense  -->
        <v-system-bar dark color="#1EBBD9" height="40px" class="mt-3">
          <h4 class="white--text">Non-payable Expense</h4>
          <v-spacer></v-spacer>
          <span>
            <v-icon
              @click="toggle4"
              class="tbtn"
              color="#4DD0E1"
              v-show="val4 == true"
              >mdi-plus</v-icon
            >
            <v-icon
              @click="toggle4"
              class="tbtn"
              color="#4DD0E1"
              v-show="val4 == false"
              >mdi-minus</v-icon
            >
          </span>
        </v-system-bar>
        <v-card v-show="val4" class="ncard rounded-0" elevation="0">
          <!-- Inner div of non-payable expense -->
          <div class="inner">
            <v-layout>
              <v-flex>
                <v-card id="check" class="my-5">
                  <v-checkbox
                    class="my-3 mx-3"
                    label="Non Payable Expense"
                    color="red"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-card>
              </v-flex>
            </v-layout>

            <!-- Table 2 -->
            <v-simple-table class="table">
              <thead class="thead">
                <th>Serial Number</th>
                <th>Invoice Number</th>
                <th>Invoice Date</th>
                <th class="invoice-details">Invoice Details</th>
                <th>Invoice Amount</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr>
                  <td class="mt-1">002434234</td>
                  <td>
                    <v-text-field
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      id="invoice-details"
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      class="mt-1"
                      label="1000"
                      solo
                      dense
                      outlined
                    ></v-text-field>
                  </td>
                  <td>
                    <v-icon class="white red--text mt-1 ml-12">
                      mdi-delete-outline
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <div class="btn">
              <v-icon color="#23B1A9">mdi-plus</v-icon> <span>Add Row</span>
            </div>
            <v-divider class="my-4"></v-divider>
            <v-layout>
              <v-flex class="sm2">
                <label class="subtitle-2">Total Non-Payable Amount</label>
                <v-text-field
                  disabled
                  solo
                  outlined
                  dense
                  label="Enter..."
                ></v-text-field>
              </v-flex>
            </v-layout>
          </div>
        </v-card>
        <v-layout>
          <v-flex>
            <v-btn class="fbtn my-3 red--text" id="reset">
              <v-icon color="red" class="mr-1">mdi-backspace-outline</v-icon>
              <v-divider vertical color="red" class="mx-2" />
              <span>Reset</span></v-btn
            >
          </v-flex>
          <v-spacer></v-spacer>
          <v-btn class="fbtn my-3 mr-3 red--text" id="cancel">
            <v-icon color="red" class="mr-1">mdi-backspace-outline</v-icon>
            <v-divider vertical color="red" class="mx-2" />
            <span>Cancel</span></v-btn
          >
          <router-link to="/medical_sheet" id="link">
            <v-btn class="fbtn my-3 white--text" color="teal">
              <v-icon color="white">mdi-arrow-right-circle-outline</v-icon
              ><v-divider vertical color="white" class="mx-2" />
              <span>Submit</span></v-btn
            ></router-link
          >
        </v-layout>
      </div>
    </v-form>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      val1: true,
      val2: true,
      val3: true,
      val4: true,
      date:'',
      menu: false,
    };
  },
  methods: {
    toggle1() {
      this.val1 = !this.val1;
    },
    toggle2() {
      this.val2 = !this.val2;
    },
    toggle3() {
      this.val3 = !this.val3;
    },
    toggle4() {
      this.val4 = !this.val4;
    },
  },
};
</script>

<style scoped>
.star {
  color: #d1121b;
}
.iconstyle {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #c1c8cc;
  background-color: #f7f7f7;
  height: 40px;
  width: 40px;
  margin-left: -12px;
}
.vcard {
  width: 300px;
  margin: 0px 6px;
  border-radius: none;
  height: 100px;
}
#check {
  width: 284px;
  height: 50px;
  border-radius: 0px;
  border: 1px solid #bdbdbd;
}
#link {
  text-decoration: none;
}
.fbtn {
  text-transform: none;
  letter-spacing: 0px;
  background-color: white;
}
.tbtn {
  background-color: white;
}
.card {
  width: 99%;
  margin: 0 auto;
}
.ncard {
  border-radius: 0px;
  border: 1px solid #b6b6b6;
  box-shadow: 0px;
  margin-bottom: 10px;
  padding-top: 30px;
}
.main {
  width: 95%;
  margin: 0 auto;
  margin-top: -40px;
}
.inner {
  width: 98%;
  margin: 0 auto;
}
.btn {
  margin-left: 700px;
  color: #23b1a9;
  margin-top: 30px;
  margin-bottom: 30px;
}
#reset {
  border: 1px solid red;
}
#cancel {
  border: 1px solid red;
}
.v-text-field {
  border-radius: 0px;
}

/* Table */
.table {
  /* border:1px solid grey; */
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
  width: 300px;
}
</style>
