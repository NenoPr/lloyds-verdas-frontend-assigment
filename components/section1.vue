<template>
  <section class="sectionOne">
    <div class="sectionOne-info-container text-gray-default text-scroll-ani">
      <p class="mt-12">
        U jeku trenutne situacije sa Covid-19, naša je “event” branša potpuno
        zaustavljena. Zaista teško predviđamo početak velikih okupljanja i
        zabava kave priliče ljetu na kakvog smo navikli. Unatoč privremenoj
        stanci cijele event industrije, Vedras ne želi stajati po strani i
        čekati da se ova pandemija sama od sebe završi, već smo kao što to
        uvijek činimo, krenuli u nove pothvate i pobjede. Ovoga puta
        predstavljamo nešto sasvim novo, nešto što nije povezano sa našim
        uobičajenim poslovanjem. Predstavljamo nešto što će nam pomoći u borbi
        protiv ove pandemije i učiniti da se svi što prije vratimo normalnom
        životu.
      </p>
      <img
        src="../assets/UVD-Robots-logo-tagline-black-website.png"
        alt=""
        class="sectionOne-info-img w-[300px] h-[160px]"
      />
      <img
        src="../assets/boston-medical-logo-color-jpg.png"
        alt=""
        class="sectionOne-info-img w-[360px] h-[64px]"
      />
      <p class="sectionOne-info-2nd-para pb-8">
        Vedras d.o.o. Vas ovim putem želi informirati o dostupnosti autonomnog
        UV-dezinfekcijskog robota tvrtke Blue Ocean Robotics.
      </p>
    </div>
    <div class="sectionOne-img-container image-scroll-ani">
      <img
        src="../assets/kill-stroj-full.png"
        alt="kill stroj"
        class="killer-robot"
      />
      <div class="sectionOne-infoPanel bg-blue-default">
        <p>UBIJA 99,99% MIKROORGANIZAMA</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '~/components/styles/animations.css';
.sectionOne {
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 10px 12vw;
}

.sectionOne-info-container {
  display: flex;
  flex-direction: column;
  gap: 2vw;
  font-weight: 100;
  font-size: 16px;
  flex: 50%;
}

.sectionOne-info-2nd-para {
  max-width: 400px;
}

.sectionOne-infoPanel {
  position: relative;
  bottom: 3rem;
  right: 4rem;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 336px;
  height: 160px;
  color: white;
  font-weight: 700;
  padding: 2rem;
  font-size: 24px;
  animation: 1.5s ease-out 0s 1 slideInPanel;
}

.sectionOne-img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  flex: 50%;
}
.killer-robot {
  bottom: -50px;
  z-index: 5;
}

@keyframes slideInPanel {
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

// MIN

@media (min-width: 400px) {
  .sectionOne {
    // background-color: rgba(0, 0, 255, 0.200);
    padding: 0 30px;
  }
}

@media (min-width: 800px) {
  .sectionOne {
    // background-color: rgba(255, 0, 0, 0.200);
    padding: 10px 80px;
  }
}

@media (min-width: 1280px) {
  .sectionOne {
    // background-color: rgba(255, 255, 0, 0.200);
    padding: 10px 100px;
  }
}

@media (min-width: 1920px) {
  .sectionOne {
    // background-color: rgba(0, 128, 0, 0.200);
    padding: 10px 12vw;
    max-height: 700px;
  }
}

// MAX

@media (max-width: 400px) {
  .sectionOne {
    // background-color: rgba(128, 0, 128, 0.200);
    padding: 0 20px;
  }
}

@media (max-width: 800px) {
  .sectionOne {
    flex-wrap: wrap;
  }

  .sectionOne-infoPanel {
    left: 0;
    right: 0;
    bottom: 1rem;
  }
}

@media (max-width: 1000px) {
  .sectionOne-img-container {
    font-size: 5px;
  }
  .sectionOne-infoPanel {
    right: -2rem;
    bottom: 1rem;
  }
}
// py-[30px] px-[20px] xl:px-[13.125vw] lg:px-[1000px] md:px-[5vw] sm:px-[3vw] sm:py-[30px] xs:px-[20px] xs:py-[1.530px]
</style>
