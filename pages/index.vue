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

<script>
import { reveal } from "../components/Animations.vue";
if (process.client) {
  window.addEventListener("scroll", reveal);
  reveal()
}

export default {
  head() {
  return {
    // title: "Verdas | Unatoč privremenoj stanci cijele event industrije, Vedras ne želi stajati po strani i čekati da se ova pandemija sama od sebe završi, već smo kao što to uvijek činimo, krenuli u nove pothvate i pobjede. Ovoga puta predstavljamo nešto sasvim novo, nešto što nije povezano sa našim uobičajenim poslovanjem. Predstavljamo nešto što će nam pomoći u borbi protiv ove pandemije i učiniti da se svi što prije vratimo normalnom životu.",
    title: "Responsive Webpage",
    meta: [
      {
        hid: "description",
        name: "description",
        content: ""
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
  transition: all 1s cubic-bezier(.36,.69,.3,.64);
}
</style>
