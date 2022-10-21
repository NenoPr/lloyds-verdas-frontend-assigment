<template>
  <section class="sectionThree text-gray-default">
    <div class="sectionThree-img-container image-scroll-ani hide"></div>
    <div class="sectionThree-info-container text-scroll-ani">
      <h2 class="font-bold text-2xl md:text-4xl">#covidfree</h2>
      <p>
        By applying ultraviolet light (UV, UV-c), the UVD robot destroys the
        structure of DNA in all microorganisms.
      </p>
      <p>
        With help of robots, we provide a service for cleaning large and small
        spaces, which in the shortest possible time and autonomously disinfect
        indoors where safety and “sense of cleanliness” must come first.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '~/components/styles/animations.css';

.slideInText {
  animation: 1.5s ease-out 0s 1 slideInText;
}

@keyframes slideInText {
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  40% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.sectionThree {
  display: flex;
  flex-direction: row;
  padding: 160px;
  gap: 2rem;
  justify-content: center;
  align-content: center;
}

.sectionThree-img-container {
  background-image: url("../../slike-vedras/tablet.jpg");
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

// Max Width

@media (max-width: 1100px) {
  .sectionThree {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    font-size: 16px;
  }

  .sectionThree-img-container {
    min-height: 452px;
    min-height: 40vh;
    max-width: 80vw;
    width: 100%;
  }

  .sectionThree-info-container {
    padding: 50px 20px;
    max-width: 80vw;
    width: 100%;
    height: auto;
  }
}

@media (max-width: 400px) { 

  .sectionThree-img-container {
    padding: 1rem;
  }

  .sectionThree-info-container {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>