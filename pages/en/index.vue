<template>
    <main class="app">
      <EnENheaderSection />
      <EnENsection1 />
      <EnENsection2 />
      <EnENsection3 />
      <EnENsection4 />
      <EnENsection5 />
      <EnENfooterSection />
    </main>
  </template>
  
  <script>
  import { reveal } from "../../components/Animations.vue";
  if (process.client) {
    window.addEventListener("scroll", reveal);
    reveal()
  }
  
  export default {
    head() {
    return {
      title: "Verdas | We present something that will help us combat this pandemic and make everyone return to normal as soon as possible. ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "We present something that will help us combat this pandemic and make everyone return to normal as soon as possible. "
        }
      ]
    }
  }
  }
  
  </script>
  
  <style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700;900&display=swap");
  
  .app {
    display: grid;
    grid-template: repeat(1), 1;
    width: 100%;
    min-height: 100vh;
    font-family: "Titillium Web", sans-serif;
    transition: all 0.5s;
  }
  </style>
  