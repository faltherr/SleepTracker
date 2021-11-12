<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContentView from "./components/MainContentView";

export default {
  name: "App",
  components: {
    Footer,
    MainContentView,
    Navbar,
  }
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  background: #fff;
}
</style>
