<template>
  <main>
    <div class="title-container">
      <slot name="title"></slot>
    </div>
    <div class="content-container">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainContentview",
};
</script>

<style scoped>
.content-container {
  padding: 25px;
  height: 78vh;
}
main {
  width: 100%;
  min-height: 74%;
}
.title-container {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  text-decoration: underline;
}
</style>