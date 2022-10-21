<template>
  <section class="sectionFive">
    <div class="sectionFive-info-container image-scroll-ani hide">
      <h2 class="font-bold text-gray-default text-2xl md:text-4xl">
        Naše tehničko osoblje spremno je u najkraćem mogućem roku izvršiti
        uslugu koja uključuje:
      </h2>

      <ul class="sectionFive-list text-gray-default">
        <li>dopremu UV-dezinfekcijskog robota</li>
        <li>mapiranje prostorija predviđenih za dezinfekciju</li>
        <li>kontrolu rada tijekom dezinfekcije</li>
        <li>otpremu UV-dezinfekcijskog robota</li>
      </ul>
      <a
        href="http://vedras.hr/download/Vedras_dezinfekcija_UVD_Robotima.pdf"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button
          class="mt-10 bg-blue-default w-[216px] h-[57px] p-4 text-white border-[1px] border-blue-default hover:bg-white hover:text-blue-default"
        >
          PREUZMI BROŠURU
        </button>
      </a>
    </div>
    <div class="sectionFive-img-container text-scroll-ani hide"></div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "~/components/styles/animations.css";
.sectionFive {
  display: flex;
  justify-content: center;
  padding: 120px;
  height: auto;
  transition: all 0.5s;
}

.sectionFive-list {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.sectionFive-info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 64vh;
  width: 39vw;
  box-shadow: 0 2px 32px 0 rgb(0 0 0 / 14%);
  padding: 30px;
  margin-right: 30px;
  flex: 50%;
}

.sectionFive-img-container {
  background-image: url("../slike-vedras/kill-stroj-stroll.jpg");
  background-size: cover;
  height: 64vh;
  width: 30vw;
  background-position-y: 80%;
  flex: 50%;
}

// Max Width

@media (max-width: 1000px) {
  .sectionFive {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 40px 20px;
  }

  .sectionFive-info-container {
    height: auto;
    width: 100%;
    padding: 50px 20px;
    flex: 100%;
    margin-right: 0px;
  }

  .sectionFive-img-container {
    background-position-x: 50%;
    width: 50%;
    min-height: 579px;
    flex: 100%;
  }
}

@media (max-width: 700px) {
  .sectionFive {
    align-content: center;
    gap: 2rem;
    padding: 1.25rem .75rem;
  }

  .sectionFive-info-container {
    height: auto;
    width: 100%;
    padding: 50px 20px;
    flex: 100%;
  }
  .sectionFive-img-container {
    background-position-x: 50%;
    width: 100%;
  }
}

@media (max-width: 1360px) {
  .sectionFive-img-container {
    background-position-x: 50%;
  }
}
</style>
