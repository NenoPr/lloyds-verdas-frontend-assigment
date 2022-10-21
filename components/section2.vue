<template>
  <section class="sectionTwo bg-blue-default">
    <div class="sectionTwo-info-container text-white text-base md:text-xl">
      <h2 class="text-2xl md:text-4xl font-bold text-white mb-8 pt-8">
        Novo u našoj ponudi!
      </h2>
      <p class="text-white">
        Robotska dezinfekcija i sterilizacija prostora s primjenom u:
      </p>
      <ul class="sectionTwo-list text-white font-bold">
        <li>Turizmu (hoteli, apartmani, kuće za odmor, mobilne kućice...)</li>
        <li>Industriji (tvornice, skladišta, pogoni...)</li>
        <li>
          Javnim mjestima (domovi zdravlja, vrtići, škole, fakulteti, uredi,
          zračne luke, kolodvori, fitness dvorane, šoping centri...)
        </li>
      </ul>
      <p class="mt-8">
        Roboti konstruirani za čišćenje operacijskih sala i laboratorija, sada
        dezinficiraju vaše poslovne i privatne prostore.
      </p>
      <a
        href="http://www.uvd-robots.com/"
        target="_blank"
        rel="noreferrer noopener"
        class="mt-8 font-bold hover:underline text-base md:text-[16px]"
        >Više detalja o UVD Robots</a
      >
    </div>
    <div class="sectionTwo-img-container image-scroll-ani hide"></div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/components/styles/animations.css';
.sectionTwo {
  display: flex;
  align-items: center;
  gap: 5vw;
  font-size: 30px;
  padding: 80px 0;
  padding-left: 10vw;
}
.sectionTwo-info-container {
  display: flex;
  flex-direction: column;
  flex: 50%;
  font-size: 16px;
}

.sectionTwo-list {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.sectionTwo-img-container {
  background-image: url("../slike-vedras/offer-full.png");
  background-size: cover;
  background-position: center;
  min-height: 574px;
  max-width: 100%;
  flex: 60%;
  margin-right: 80px;
}

// MAX

@media (max-width: 400px) {
  .sectionTwo {
    // background-color: rgba(128, 0, 128, 0.2);
    padding: 0 20px;
  }
}

@media (max-width: 1000px) {
  .sectionTwo {
    flex-wrap: wrap;
    padding: 50px 10vw;
    justify-content: center;
  }
  .sectionTwo-info-container {
    width: 100%;
  }

  .sectionTwo-img-container {
    width: 100%;
    margin-right: 0;
    height: 36.2vh;
    min-height: 300px;
  }
}

@media (max-width: 800px) {
  .sectionTwo {
    flex-wrap: wrap;
    padding: 30px 10vw;
    justify-content: center;
  }
  .sectionTwo-info-container {
    width: 100%;
  }

  .sectionTwo-img-container {
    width: 100%;
    margin-right: 0;
    height: 36.2vh;
    min-height: 300px;
  }
}
</style>
