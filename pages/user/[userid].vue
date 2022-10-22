<template>
  <div>
    <h1 class="m-10">Users Details Page</h1>
    <div>RouteId:{{ route.params.userid }}</div>
    <loading v-if="!userData" />
    <div v-else class="user-detail-container">
      <div>{{userData}}</div>
      <!-- <div>{{userData.title}}</div>
        <div>{{userData.firstName}}</div>
        <div>{{userData.lastName}}</div>
        <div>{{userData.picture}}</div>
        <div>{{userData.gender}}</div>
        <div>{{userData.email}}</div>
        <div>{{userData.dateOfBirth}}</div>
        <div>{{userData.phone}}</div>
        <div>{{userData.location}}</div>
        <div>{{userData.registerDate}}</div>
        <div>{{userData.updatedDate}}</div> -->
      <!-- <div v-for="(value, key, index) in userData">
        <div>{{index}} {{key}}: {{ value }}</div>
        <div>{{userData.title}}</div>
        <div>{{userData.firstName}}</div>
        <div>{{userData.lastName}}</div>
        <div>{{userData.picture}}</div>
        <div>{{userData.gender}}</div>
        <div>{{userData.email}}</div>
        <div>{{userData.dateOfBirth}}</div>
        <div>{{userData.phone}}</div>
        <div>{{userData.location}}</div>
        <div>{{userData.registerDate}}</div>
        <div>{{userData.updatedDate}}</div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import loading from "../../components/loading.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
const userData = ref();
const route = useRoute();

onMounted(async () => {
  console.log("Route Id: ", route.params.userid);
  console.log(
    "Fetching from",
    `https://dummyapi.io/data/v1/user/${route.params.userid}`
  );
  console.log("Fetching...");
  const { data, pending, errors } = await axios.get(
    `https://dummyapi.io/data/v1/user/${route.params.userid}`,
    {
      headers: {
        "app-id": "635404ee539b980bca6e2a74",
      },
    }
  );
  userData.value = await data;
  console.log(userData.value);
});
async function userDetail() {
  console.log("Route Id: ", route.params.userid);
  console.log(
    "Fetching from",
    `https://dummyapi.io/data/v1/user/${route.params.userid}`
  );
  console.log("Fetching...");
  const { data, pending, errors } = await useFetch(
    `https://dummyapi.io/data/v1/user/${route.params.userid}`,
    {
      headers: {
        "app-id": "635404ee539b980bca6e2a74",
      },
    }
  );
  const results = await data._rawValue;
  console.log(results);
  userData.value = results;
  console.log(userData);
  // userData.value = results
  // console.log(userData._rawValue)
  // let list = []
  // Object.keys(results).forEach((info) => {
  //   list.push({info: results[info]})
  // })
  // console.log(list)
  // userData.value = list
}
</script>

<style lang="scss" scoped></style>
