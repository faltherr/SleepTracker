<template>
  <MainContentView>
    <template v-slot:title>
      <h3>Dashboard</h3>
    </template>
    <template v-slot:content>
      <div class="dashboard-container">
        <div class="chart-container">A Chart</div>
        <div class="button-container">
          <router-link to="/edit">Click to Enter Data</router-link>
        </div>
        <div class="summary-container">A Summary Element</div>
      </div>
    </template>
  </MainContentView>
</template>

<script>
import MainContentView from "./MainContentView";

export default {
  name: "Dashboard",

  components: {
    MainContentView
  },

  props: ["sleepEntries"],

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    "chart edit"
    "chart summary";
  height: 100%;
}
.chart-container {
  background: blue;
  grid-area: chart;
}
.button-container {
  background: rgb(34, 34, 34);
  color: #fff;
  grid-area: edit;
}
.summary-container {
  background: rgb(34, 34, 34);
  color: #fff;
  grid-area: summary;
}
</style>