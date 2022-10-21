<template>
  <section class="sectionFour">
    <div class="sectionFour-img-container"></div>
    <div class="sectionFour-info-container bg-blue-default">
      <h2 class="text-white font-semibold">
        You want to provide a secure place to stay or work for your costumers or
        employees. Search no more and contact us now. Let your spaces be
        #covidfree
      </h2>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '~/components/styles/animations.css';
.sectionFour {
  display: flex;
  font-size: 42px;
}

.sectionFour-img-container {
  background-image: url("../../slike-vedras/Group-7.jpg");
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

// Max Width

@media (max-width: 1000px) {
  .sectionFour {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    font-size: 1.25rem;
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
