<template>
  <MainContentView>
    <template v-slot:title>
      <h3>Dashboard</h3>
    </template>
    <template v-slot:content>
      <div class="dashboard-container">
        <div class="chart-container">A Chart</div>
        <div class="button-container">A Big Button to Enter Data</div>
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
  /* grid-template-rows: 1fr 1fr; */
  grid-template-areas:
    "chart edit"
    "chart summary";
}
.chart-container{
    grid-area: chart;
    background: blue;
}
.button-container{
    grid-area: edit;
    background: grey;
}
.summary-container{
    grid-area: summary;
    background: orange;
}
</style>