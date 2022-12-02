<template>
  <footer class="footer bg-blue-default text-4xl text-white">
    <p>Za više informacija pišite nam na mail:</p>
    <div>
      <a class="font-bold hover:underline" href="mailto:info@placeholder.com">info@placeholder.com</a>
      ili nazovite broj
      <a class="font-bold hover:underline" href="tel:385555555555">+385 55 5555 555</a>
    </div>
    <p class="text-white font-bold bg-black text-[2rem] p-[.5rem] rounded-[.5rem]">Ovo je lažna stranica napravljena kao osobni projekt u edukacijske svrhe od prave web stranice. Ova trenutna stranica ne nudi i ne prodaje nikakvu uslugu ili proizvod, i nije nikako povezana sa vlasnicima originalne stranice.</p>
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
