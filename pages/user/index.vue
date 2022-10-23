<template>
  <div class="users-section">
    <div class="header-options">
      <h1 class="text-blue-default text-[2rem] font-bold mxs:text-[1.5rem]">
        Dummyapi Users Page
      </h1>
      <div class="flex flex-row gap-4 justify-center items-center">
        <button
          class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300"
          @click="displayByCards"
        >
          Cards
        </button>
        <div v-if="displayAll === true">
          <button
            class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300"
            @click="fetchAllUsers"
          >
            Display by Page
          </button>
        </div>
        <button
          v-else
          class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300"
          @click="fetchAllUsers"
        >
          Display All
        </button>
        <button
          class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300"
          @click="displayByList"
        >
          List
        </button>
      </div>
      <div class="page-navigation mb-2" v-if="!displayAll">
        <button @click="setPage(-1)" class="nav-btn">{{ "<" }}</button>
        <div>Page {{ usersPage + 1 }} of 4</div>
        <button @click="setPage(1)" class="nav-btn">{{ ">" }}</button>
      </div>
      <div v-else></div>
    </div>
    <loading v-if="!usersData" />
    <div v-else class="user-container cards bg-gray-50 bg-opacity-90">
      <div v-for="user in usersData" class="user-card-holder" :key="user.id">
        <nuxt-link :to="`/user/${user.id}`" class="user-card hover:bg-blue-100">
          <img class="user-picture" :src="`${user.picture}`" alt="" />
          <div class="user-name-holder">
            {{ user.title.charAt(0).toUpperCase() }}{{ user.title.slice(1) }}.
            {{ user.firstName }} {{ user.lastName }}
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-if="!usersData"></div>
    <div v-else class="footer-options">
      <div class="page-navigation mt-2" v-if="!displayAll">
        <button @click="setPage(-1)" class="nav-btn">{{ "<" }}</button>
        <div>Page {{ usersPage + 1 }} of 4</div>
        <button @click="setPage(1)" class="nav-btn">{{ ">" }}</button>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import loading from "../../components/loading.vue";
import { onMounted, ref } from "vue";
const usersData = ref();
const usersPage = ref(0);
const displayAll = ref(false);
const displayCards = ref(true);

function setPage(direction) {
  if (usersPage.value > 2 && direction === 1) return;
  else if (usersPage.value === 0 && direction === -1) return;
  usersPage.value = direction + usersPage.value;
  getUsers();
}

onMounted(async () => {
  getUsers();
});

async function getUsers() {
  usersData.value = 0;
  const { data, pending, errors } = await axios.get(
    `https://dummyapi.io/data/v1/user?page=${usersPage.value}&limit=32`,
    {
      headers: {
        "app-id": "635404ee539b980bca6e2a74",
      },
    }
  );
  usersData.value = await data.data;
  console.log("Fetched Data: ", usersData);
}

async function fetchAllUsers() {
  if (displayAll.value === true) {
    displayAll.value = false;
    getUsers();
    return;
  }
  displayAll.value = true;
  usersData.value = 0;
  const data1 = await axios.get(
    `https://dummyapi.io/data/v1/user?page=0&limit=50`,
    {
      headers: {
        "app-id": "635404ee539b980bca6e2a74",
      },
    }
  );
  const data2 = await axios.get(
    `https://dummyapi.io/data/v1/user?page=1&limit=50`,
    {
      headers: {
        "app-id": "635404ee539b980bca6e2a74",
      },
    }
  );
  const result1 = data1.data.data;
  const result2 = data2.data.data;
  console.log(result1, result2);
  usersData.value = result1.concat(result2);
  console.log("Fetched All Users: ", usersData);
}

function displayByCards(event) {
  const element = document.querySelector(".user-container");
  console.log(element);

  element.classList.remove("list");
  element.classList.add("cards");

  const elementsCard = document.querySelectorAll(".user-card");
  elementsCard.forEach((card) => {
    card.classList.remove("user-card-list");
  });

  const elementsName = document.querySelectorAll(".user-card");
  elementsName.forEach((card) => {
    card.classList.remove("user-name-holder-list");
  });
}

function displayByList(event) {
  const element = document.querySelector(".user-container");
  console.log(element);
  element.classList.remove("cards");
  element.classList.add("list");

  const elementsCard = document.querySelectorAll(".user-card");
  elementsCard.forEach((card) => {
    card.classList.add("user-card-list");
  });

  const elementsName = document.querySelectorAll(".user-card");
  elementsName.forEach((card) => {
    card.classList.add("user-name-holder-list");
  });
}
</script>

<style lang="scss" scoped>
.users-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  min-height: 100vh;
  background-image: url("../../assets/users-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-repeat: repeat-y;
}

.header-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.user-container {
  width: 70%;
  padding: 0;
  margin: 0;
  list-style: none;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0.25px gray;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.list {
  display: flex;
  flex-direction: column;
  width: 50%;
}

@media (max-width: 1920px) {
  .user-container {
    width: 90%;
  }

  .list {
  display: flex;
  flex-direction: column;
  width: 70%;
}
}

@media (max-width: 1280px) {
  .list {
    width: 90%;
  }
}

.user-card-holder {
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  text-overflow: ellipsis;
}

.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 3px 0.25px gray;
}

.user-card-list {
  flex-direction: row;
  padding-left: 10vw;
}

.user-name-holder {
  text-align: center;
}

.user-name-holder-list {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
}
.user-picture {
  border-radius: 50%;
  width: 5rem;
}

.footer-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.nav-btn {
  font-weight: 700;
  font-size: 2.5rem;
}
</style>
