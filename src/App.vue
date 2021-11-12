<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MainContentView from "./components/MainContentView";
import Footer from "./components/Footer";

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
