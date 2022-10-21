<template>
  <section class="header">
    <div class="text-white xl:text-base md:text-xs header-contact">
      <span class="font-bold hidden sm:block">Kontaktirajte nas</span>
      <span>info@verdas.hr</span>
      <span>+385 98 9608 920</span>
      <button class="font-bold">EN</button>
    </div>
    <div class="header-content">
      <img src="../slike-vedras/Group-4.svg" alt="" class="header-img" />
      <div class="header-line"></div>
      <h1 class="header-h1">ON HOLD</h1>
      <div class="header-socialMedia">
        <div class="social-icon instagram"></div>

        <div class="social-icon facebook"></div>

        <div class="social-icon linkedin"></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  background-image: url("../slike-vedras/Group-6.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 22rem;

  .header-contact {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin: 30px 10vw;
    color: white;
  }

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;

    .header-img {
      width: 250px;
    }
    .header-line {
      border: 1px solid white;
      border-radius: 10%;
      height: 2px;
      width: 20vw;
    }

    .header-h1 {
      font-size: 36px;
      font-weight: 700;
      color: white;
    }

    .header-socialMedia {
      display: flex;
      gap: 2vw;
    }

    .social-icon {
      width: 30px;
      height: 30px;
      color: white;
      background-color: white;
      background-position: center;
      background-size: contain;
      border: 1px solid white;
      border-radius: 50%;
    }

    .instagram {
      background-image: url("../slike-vedras/instagram-logo-thin-svgrepo-com.svg");
    }

    .facebook {
      background-image: url("../slike-vedras/facebook-svgrepo-com.svg");
    }

    .linkedin {
      background-image: url("../slike-vedras/linkedin-logo-svgrepo-com.svg");
      background-position: center;
      background-size: contain;
    }
  }
}
</style>
