<template>
  <div>
    <h1 class="m-10">Users Page</h1>
    <div class="user-container">
      <loading v-if="!result" />
      <div v-else v-for="user in result">
        <nuxt-link :to="`/user/${user.id}`">
          <div class="user-card" :key="user.id">
            <!-- <div>{{ user }}</div> -->
            <img class="user-picture" :src="`${user.picture}`" alt="" />
            <div class="user-name-holder">
              <div class="user-title">{{ user.title }}</div>
              <div class="user-firstName">{{ user.firstName }}</div>
              <div class="user-lastName">{{ user.lastName }}</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import loading from "../../components/loading.vue";

const { data, pending, errors } = await useFetch(
  "https://dummyapi.io/data/v1/user?page=1&limit=10",
  {
    headers: {
      "app-id": "635404ee539b980bca6e2a74",
    },
  }
);
const result = await data._rawValue.data;
console.log("Fetched Data: ", result);
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  flex-direction: column;
  margin: 5vw 5vh;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 0 10px 0.25px gray;
}

.user-name-holder {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.user-card {
  padding: 1rem;
  border-top: 1px solid blue($color: #027fc1);
  border-bottom: 1px solid blue($color: #027fc1);
}

.user-picture {
  border-radius: 0.5rem;
}
</style>
