<template>
  <main class="user-detail-section">
    <h1 class="m-10 text-xl font-bold text-blue-900">USER DETAILS</h1>
    <loading v-if="!userData" class="user-loading" />
    <div v-else class="user-detail-container">
      <div class="user-profile-header">
        <img
          :src="`${userData.picture}`"
          alt=""
          class="user-profile-header-img"
        />
        <div class="user-profile-header-name">
          {{ userData.title.charAt(0).toUpperCase()
          }}{{ userData.title.slice(1) }}. {{ userData.firstName }}
          {{ userData.lastName }}
        </div>
        <div>
          🚩{{ userData.location.city }},
          {{ userData.location.country }}
        </div>
      </div>
      <div class="user-profile-full-info">
        <div class="user-profile-info-content">
          <div class="user-profile-info-title">User Info</div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">First Name</div>
            <div class="user-profile-info-data">
              <div>{{ userData.firstName }}</div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Last Name</div>
            <div class="user-profile-info-data">
              <div>{{ userData.lastName }}</div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Date of Birth</div>
            <div class="user-profile-info-data">
              <div>
                {{ new Date(userData.dateOfBirth).toLocaleDateString() }} at
                {{ new Date(userData.dateOfBirth).toLocaleTimeString() }}
              </div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Title</div>
            <div class="user-profile-info-data">
              <div>{{ userData.title }}</div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Gender</div>
            <div class="user-profile-info-data">
              <div>{{ userData.gender }}</div>
            </div>
          </div>
        </div>
        <div class="user-profile-info-content">
          <div class="user-profile-info-title">Location</div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Country</div>
            <div class="user-profile-info-data">
              <div>{{ userData.location.country }}</div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">State</div>
            <div class="user-profile-info-data">
              <div>{{ userData.location.state }}</div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">City</div>
            <div class="user-profile-info-data">
              <div>{{ userData.location.city }}</div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Street</div>
            <div class="user-profile-info-data">
              <div>{{ userData.location.street }}</div>
            </div>
          </div>
        </div>
        <div class="user-profile-info-content">
          <div class="user-profile-info-title">Contact</div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Email</div>
            <div class="user-profile-info-data">
              <div>{{ userData.email }}</div>
            </div>
          </div>
          <div class="user-profile-info-holder">
            <div class="user-profile-info-type">Phone</div>
            <div class="user-profile-info-data">
              <div>{{ userData.phone }}</div>
            </div>
          </div>
        </div>
        <div class="user-profile-info-content">
          <div class="user-profile-info-title">Activity</div>
          <div class="user-profile-info-type">Last Activity</div>
          <div class="user-profile-info-data">
            <div>
              {{ new Date(userData.updatedDate).toLocaleDateString() }}
              at
              {{ new Date(userData.updatedDate).toLocaleTimeString() }}
            </div>
          </div>
          <div class="user-profile-info-type">Registration Date</div>
          <div class="user-profile-info-data">
            <div>
              {{ new Date(userData.registerDate).toLocaleDateString() }}
              at
              {{ new Date(userData.registerDate).toLocaleTimeString() }}
            </div>
          </div>
        </div>
      </div>
      <nuxt-link to="/user">
        <div
          class="mb-10 text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300"
        >
          Back to Users
        </div>
      </nuxt-link>

      <!-- <div>{{ userData.title }}</div>
      <div>{{ userData.firstName }}</div>
      <div>{{ userData.lastName }}</div>
      <div>{{ userData.picture }}</div>
      <div>{{ userData.gender }}</div>
      <div>{{ userData.email }}</div>
      <div>{{ userData.dateOfBirth }}</div>
      <div>{{ userData.phone }}</div>
      <div>{{ userData.location.country }}</div>
      <div>{{ userData.location.state }}</div>
      <div>{{ userData.location.city }}</div>
      <div>{{ userData.location.street }}</div>
      <div>{{ userData.location.timezone }}</div>
      <div>{{ userData.registerDate }}</div>
      <div>{{ userData.updatedDate }}</div> -->
    </div>
  </main>
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
</script>

<style lang="scss" scoped>
.user-loading {
  position: relative;
}
.user-detail-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: url("../../assets/users-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.user-detail-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
}

.user-profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  width: 50%;
  border-radius: 1rem;
  box-shadow: 0 0 5px 0.5px rgb(255, 255, 255);
  background-image: url("../../assets/users-bg-front.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 24%;
  background-position-y: 17%;
}
.user-profile-header-img {
  border-radius: 50%;
  width: 20%;
}
.user-profile-header-name {
  font-weight: 700;
  font-size: 1.5rem;
}

.user-profile-full-info {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  justify-content: center;
  align-content: center;
  border-radius: 1rem;
  box-shadow: 0 0 5px 0.5px rgb(255, 255, 255);
  row-gap: 5rem;
  column-gap: 3rem;
  background-image: url("../../assets/users-bg-cover.jpg");
  background-size: fill;
  background-repeat: no-repeat;
  width: 50%;
  padding: 2vw;
}

@media (max-width: 1200px) {
  .user-profile-full-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.user-profile-info-title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.user-profile-info-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.user-profile-info-holder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.user-profile-info-holder:nth-child(even) {
  background-color: rgb(200, 216, 235);
}
.user-profile-info-type {
  font-weight: 700;
  width: 50%;
}

.user-profile-info-data {
  display: flex;
  justify-content: flex-start;
  justify-items: flex-start;
  width: 100%;
}

@media (max-width: 800px) {
  .user-profile-header, .user-profile-full-info {

    width: 90%;
  }
}

@media (min-width: 2560px) {
  .user-detail-container {
    font-size: larger;
  }
}
</style>
