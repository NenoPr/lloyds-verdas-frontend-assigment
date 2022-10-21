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

// Max Width

@media (max-width: 1000px) {
  .footer {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 1rem;
    font-size: 25px;
    line-height: 32px;
  }
}
</style>
