<template>
  <section class="sectionThree text-gray-default">
    <div class="sectionThree-img-container"></div>
    <div class="sectionThree-info-container">
      <h2 class="font-bold text-2xl md:text-4xl">#covidfree</h2>
      <p>
        Primjenom Ultraljubičastog svjetla, (ultravioletnog, UV-c), UVD-robot
        uništava strukturu DNA u svim mikroorganizmima.
      </p>
      <p>
        Pružamo uslugu čišćenja velikih i malih prostora, uz pomoć robota, koji
        u najkraćem mogućem roku i autonomno dezinficiraju zatvorene prostore
        gdje sigurnost i “osjećaj čistoće” mora biti na prvom mjestu.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.sectionThree {
  display: flex;
  flex-direction: row;
  padding: 160px;
  gap: 2rem;
  justify-content: center;
  align-content: center;
}

.sectionThree-img-container {
  background-image: url("../slike-vedras/tablet.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex: 50%;
  min-height: 464px;
  max-width: 695px;
}

.sectionThree-info-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex: 50%;
  gap: 1rem;
  padding: 80px;
  height: 464px;
  max-width: 695px;
  box-shadow: 0 2px 32px 0 rgb(0 0 0 / 14%);
}

// Min Width

// @media (min-width: 400px) {
//   .sectionThree {
//     background-color: rgba(0, 0, 255, 0.200);
//   }
// }

// @media (min-width: 800px) {
//   .sectionThree {
//     background-color: rgba(255, 0, 0, 0.200);
//   }
// }

// @media (min-width: 1280px) {
//   .sectionThree {
//     background-color: rgba(255, 255, 0, 0.200);
//   }
// }

// @media (min-width: 1920px) {
//   .sectionThree {
//     background-color: rgba(0, 128, 0, 0.200);
//   }
// }

// Max Width

@media (max-width: 1100px) {
  .sectionThree {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding: 50px 20px;
    font-size: 16px;
  }

  .sectionThree-img-container {
    min-height: 452px;
    height: 40vh;
    max-width: 80vw;
  }

  .sectionThree-info-container {
    padding: 50px 20px;
    max-width: 80vw;
    width: 100%;
    height: auto;
  }
}
</style>
