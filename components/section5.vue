<template>
  <section class="sectionFive">
    <div class="sectionFive-info-container">
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
      <button
        class="mt-10 bg-blue-default w-[216px] h-[57px] p-4 text-white border-[1px] border-blue-default hover:bg-white hover:text-blue-default"
      >
        PREUZMI BROŠURU
      </button>
    </div>
    <div class="sectionFive-img-container"></div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.sectionFive {
  display: flex;
  justify-content: center;
  padding: 120px;
  height: auto;
  transition: all .5s;
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

}

.sectionFive-img-container {
  background-image: url("../slike-vedras/kill-stroj-stroll.jpg");
  background-size: cover;
  height: 64vh;
  width: 30vw;
  background-position-y: 80%;

}

// Min Width

// @media (min-width: 400px) {
//   .sectionFive {
//     background-color: rgba(0, 0, 255, 0.2);
//   }
// }

// @media (min-width: 800px) {
//   .sectionFive {
//     background-color: rgba(255, 0, 0, 0.2);
//   }
// }

// @media (min-width: 1280px) {
//   .sectionFive {
//     background-color: rgba(255, 255, 0, 0.2);
//   }
// }

// @media (min-width: 1920px) {
//   .sectionFive {
//     background-color: rgba(0, 128, 0, 0.2);
//   }
// }

// Max Width

@media (max-width: 1000px) {
  .sectionFive {
    flex-direction: column;
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
    padding: 20px 10px;
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
