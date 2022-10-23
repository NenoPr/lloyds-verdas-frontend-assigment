<template>
  <div>
    <div class="loading">
      <span></span>
      <div class="loading-word">Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
};
</script>

<style lang="scss" scoped>
.loading {
  height: 30rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;

  @keyframes circle-loading {
    to {
      transform: rotateZ(360deg);
    }
  }

  span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: rgb(0, 0, 0);
    animation: circle-loading 1200ms ease infinite;
  }

  .loading-word {
    font-weight: 700;
    font-size: 2rem;
    color: rgb(0, 0, 0);
  }
}
</style>
