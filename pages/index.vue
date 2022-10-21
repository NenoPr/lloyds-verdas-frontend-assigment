<template>
  <main class="app">
    <HeaderSection />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <FooterSection />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700;900&display=swap");

.app {
  display: grid;
  grid-template: repeat(1), 1;
  width: 100%;
  min-height: 100vh;
  font-family: "Titillium Web", sans-serif;
  transition: all .5s;
}
</style>
