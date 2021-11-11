<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MainContentView from "./components/MainContentView";

export default {
  name: "App",
  components: {
    Navbar, MainContentView
  }
};
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
  background: #fff
}
</style>
