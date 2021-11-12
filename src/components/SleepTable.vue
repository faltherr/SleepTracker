<template>
  <MainContentView>
    <template v-slot:title>
      <h4>Sleep Table</h4>
    </template>
    <template v-slot:content>
      <div class="table-container">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Week</th>
              <th>Date</th>
              <th>Time Getting to Bed</th>
              <th>Minutes Until Sleep</th>
              <th>Number of Times Woke Up During Night</th>
              <th>Number of Minutes Awake</th>
              <th>Time Woke Up</th>
              <th>Time Out of Bed</th>
              <th>Sleep Window</th>
              <th>Sleep Duration</th>
              <th>Sleep Efficiency</th>
              <th>Sleep Quality</th>
              <th>Did You Feel Rested?</th>
              <th>How Refreshed Do You Feel Today?</th>
              <th>How Sleepy Did You Feel During the Day Yesterday</th>
              <th>Factors Affecting Your Sleep</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in sleepEntries" :key="entry.id">
              <td scope="row">{{entry.date}}</td>
              <td>{{entry.week}}</td>
              <td>{{entry.firstBed}}</td>
              <td>{{entry.minToSleep}}</td>
              <td>{{entry.awakeCount}}</td>
              <td>{{entry.awakeMinutes}}</td>
              <td>{{entry.wakeUpTime}}</td>
              <td>{{entry.exitBed}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{entry.sleepQuality}}</td>
              <td>{{entry.enoughSleep}}</td>
              <td>{{entry.refreshedRating}}</td>
              <td>{{entry.sleepy}}</td>
              <td>{{entry.sleepFactor}}</td>
            </tr>
            <tr>
              <td v-for="i in Object.keys(sleepEntries[0]) + 3" :key="i"><input/></td>
            </tr>
          </tbody>
        </table>
        <pre>{{sleepEntries}}</pre>
      </div>
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
      sleepEntries: []
    };
  },
  async created() {
    const response = await axios.get("http://localhost:3000/sleepEntries");
    this.sleepEntries = response.data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-container {
  height: 100%;
  overflow: scroll;
  width: 100%;
}

.table-container table {
  color: white;
  max-width: 100%;
}

.table-container table {
  table-layout: fixed;
  width: 100%;
}

.table-container th,
td {
  overflow: hidden;
  width: 150px;
}
</style>
