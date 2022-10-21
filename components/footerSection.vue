<template>
  <footer class="footer bg-blue-default text-4xl text-white">
    <p>Za više informacija pišite nam na mail:</p>
    <div>
      <a class="font-bold hover:underline" href="mailto:info@verdas.hr">info@vedras.hr</a>
      ili nazovite broj
      <a class="font-bold hover:underline" href="tel:385989608920">+385 98 9608 920</a>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px;
  line-height: 3rem;
  text-align: center;
  transition: all .5s;
}

// Min Width

// @media (min-width: 400px) {
//   .footer {
//     background-color: rgba(0, 0, 255, 0.2);
//   }
// }

// @media (min-width: 800px) {
//   .footer {
//     background-color: rgba(255, 0, 0, 0.2);
//   }
// }

// @media (min-width: 1280px) {
//   .footer {
//     background-color: rgba(255, 255, 0, 0.2);
//   }
// }

// @media (min-width: 1920px) {
//   .footer {
//     background-color: rgba(0, 128, 0, 0.2);
//   }
// }

// Max Width

@media (max-width: 1000px) {
  .footer {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 20px;
    font-size: 25px;
    line-height: 32px;
  }
}
</style>
