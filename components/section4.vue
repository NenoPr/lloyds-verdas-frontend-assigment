<template>
  <section class="sectionFour">
    <div class="sectionFour-img-container"></div>
    <div class="sectionFour-info-container bg-blue-default">
      <h2 class="text-white font-semibold">
        Želite vašim klijentima i zaposlenicima pružiti potpuno čist prostor?
        Kontaktirajte nas odmah, neka vaš prostor bude #covidfree!
      </h2>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.sectionFour {
  display: flex;
  font-size: 42px;
}

.sectionFour-img-container {
  background-image: url("../slike-vedras/Group-7.jpg");
  background-size: cover;
  height: 631px;
  width: 50%;
  background-position-x: 100%;
}

.sectionFour-info-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 631px;
  padding: 50px;
}

// // Min Width

// @media (min-width: 400px) {
//   .sectionFour {
//     background-color: rgba(0, 0, 255, 0.2);
//   }
// }

// @media (min-width: 800px) {
//   .sectionFour {
//     background-color: rgba(255, 0, 0, 0.2);
//   }
// }

// @media (min-width: 1280px) {
//   .sectionFour {
//     background-color: rgba(255, 255, 0, 0.2);
//   }
// }

// @media (min-width: 1920px) {
//   .sectionFour {
//     background-color: rgba(0, 128, 0, 0.2);
//   }
// }

// Max Width

@media (max-width: 1000px) {
  .sectionFour {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    font-size: 25px;
  }

  .sectionFour-img-container {
    width: 100%;
  }

  .sectionFour-info-container {
    width: 100%;
    height: auto;
  }
}
</style>
