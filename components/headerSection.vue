<template>
  <section class="header">
    <div class="text-white xl:text-base md:text-xs header-contact">
      <!-- <h1 class="title">{{ $t('message') }}</h1>
      <form>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">EN</option>
       <option value="hr">HR</option>
      </select>
    </form> -->
      <span class="font-bold hidden sm:block">Kontaktirajte nas</span>
      <a class="hover:underline hover:opacity-70" href="mailto:info@vedras.hr"
        >info@verdas.hr</a
      >
      <a class="hover:underline hover:opacity-70" href="tel:385989608920"
        >+385 98 9608 920</a
      >
      <nuxt-link to="/en">
        <button class="font-bold hover:underline hover:opacity-50" >EN</button>
      </nuxt-link>
    </div>
    <div class="header-content">
      <img src="../assets/Group-4.svg" alt="" class="header-img" />
      <div class="header-line"></div>
      <h1 class="header-h1 text-scroll-ani">ON HOLD</h1>
      <div class="header-socialMedia">
        <a
          href="https://www.instagram.com/vedrasgroup/?hl=en"
          target="_blank"
          rel="noreferrer noopener"
          class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350"
        >
          <img
            class="instagram"
            src="../assets/instagram-logo-svgrepo-com.svg"
            alt=""
          />
        </a>

        <a
          href="https://www.facebook.com/vedrasevents/"
          target="_blank"
          rel="noreferrer noopener"
          class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350"
        >
          <img
            class="facebook"
            src="../assets/facebook-svgrepo-com.svg"
            alt=""
          />
        </a>

        <a
          href="https://www.linkedin.com/company/42940956/"
          target="_blank"
          rel="noreferrer noopener"
          class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350"
        >
          <img
            class="linkedin"
            src="../assets/linkedin-logo-svgrepo-com.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "~/components/styles/animations.css";
.header {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/Group-6.jpg");
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
      gap: 20px;
    }

    .social-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      background-color: white;
      border: 1px solid white;
      border-radius: 50%;
    }

    .instagram {
      width: 60%;
      height: 60%;
    }

    .facebook {
      width: 60%;
      height: 60%;
    }

    .linkedin {
      width: 60%;
      height: 60%;
    }
  }
}
</style>
