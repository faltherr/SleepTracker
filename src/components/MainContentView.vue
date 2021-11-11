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

  data() {
    return {};
  }
};
</script>

<style scoped>
main{
    width: 100%;
    min-height: 100;
}
.title-container{
    margin-top: 25px;
    display: flex;
    justify-content: center;
    text-decoration: underline;
}
.content-container{
    padding: 25px;
}
</style>