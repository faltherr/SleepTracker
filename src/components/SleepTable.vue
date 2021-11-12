<template>
  <MainContentView>
    <template v-slot:title>
      <h4>Sleep Table</h4>
    </template>
    <template v-slot:content>
      <div class="table-container">
        <b-table :busy="isLoading" :items="sleepEntries" :fields="headers" dark striped hover fixed>
          <template #table-colgroup="scope">
            <col v-for="field in scope.fields" :key="field.key" :style="{ width: '150px' }" />
          </template>
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
          <template #cell(edit)="data">
            <div>
            <b-button @click="editRowHandler(data)">
              <!-- {{sleepEntries[data.index]}} -->
              <span v-if="!sleepEntries[data.index].isEdit">Edit</span>
              <span v-else>Done</span>
            </b-button>
            <b-button>X</b-button>
            </div>
          </template>
          <template #cell(date)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <!-- <b-form-datepicker
              v-model="data.value"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              locale="en"
            ></b-form-datepicker>-->
            <p>{{data.value}}</p>
          </template>
          <template #cell(firstBed)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].firstBed"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(minToSleep)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].minToSleep"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(awakeCount)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].awakeCount"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(awakeMinutes)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].awakeMinutes"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(wakeUpTime)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].wakeUpTime"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(exitBed)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].exitBed"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(sleepQuality)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].sleepQuality"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(enoughSleep)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].enoughSleep"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(refreshedRating)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].refreshedRating"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <template #cell(sleepy)="data">
            <b-form-input v-if="sleepEntries[data.index].isEdit" v-model="sleepEntries[data.index].sleepy"></b-form-input>
            <span v-else>{{data.value}}</span>
          </template>
          <!-- <template #cell(sleepFactor)="data">
            <b-form-input v-model="data.value"></b-form-input>
          </template>-->
        </b-table>
        <pre>{{sleepEntries}}</pre>
      </div>
      <b-button variant="success" >Add Entry</b-button>
    </template>
  </MainContentView>
</template>

<script>
import axios from "axios";
import MainContentView from "./MainContentView";
export default {
  name: "SleepTable",

  components: { MainContentView },

  data() {
    return {
      headers: [
        { key: "edit", label: "" },
        { key: "week", label: "Week" },
        { key: "date", label: "Date" },
        { key: "firstBed", label: "Time Getting to Bed" },
        { key: "minToSleep", label: "Minutes Until Sleep" },
        { key: "awakeCount", label: "Number of Times Woke Up During Night" },
        { key: "awakeMinutes", label: "Number of Minutes Awake" },
        { key: "wakeUpTime", label: "Time Woke Up" },
        { key: "exitBed", label: "Time Out of Bed" },
        { key: "sleepWindow", label: "Sleep Window" },
        { key: "sleepDuration", label: "Sleep Duration" },
        { key: "sleepEfficiency", label: "Sleep Efficiency" },
        { key: "sleepQuality", label: "Sleep Quality" },
        { key: "enoughSleep", label: "Did You Feel Rested?" },
        { key: "refreshedRating", label: "How Refreshed Do You Feel Today?" },
        {
          key: "sleepy",
          label: "How Sleepy Did You Feel During the Day Yesterday"
        },
        { key: "sleepFactor", label: "Factors Affecting Your Sleep" }
      ],
      isLoading: true,
      sleepEntries: []
    };
  },

  async created() {
    this.isLoading = true;
    const response = await axios.get("http://localhost:3000/sleepEntries");
    const formattedResponse = response.data.map(e => ({
      isEdit: false,
      ...e,
      sleepWindow: null,
      sleepDuration: null,
      sleepEfficiency: null,
    }));
    // formattedResponse.push()
    this.sleepEntries = formattedResponse
    this.isLoading = false;
  },

  methods: {
    // getBootstrapDate(value) {
    //   return new Date(value);
    // },
    editRowHandler(data) {
      this.sleepEntries[data.index].isEdit = !this.sleepEntries[data.index].isEdit;
    },
    addRowHandler(){
      const newRow = this.headers.reduce((prevVal, currVal) => {
        return {...prevVal, [currVal.key]: null}
      }, {})
      this.sleepEntries.push(newRow)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.table-container {
  height: 100%;
  overflow: scroll;
  width: 100%;
}

.table-container table {
  /* color: white; */
  max-width: 100%;
}

.table-container table {
  table-layout: fixed;
  width: 100%;
}

.table-data-cell {
  overflow: hidden;
  width: 150px;
}
</style>
