<template>
    <div>
      <div class="loading">
        <span></span>
        <div>Loading...</div>
      </div>
    </div>
  </template>
  
  <script>
      export default {
          name: "LoadingComponent"
      }
  </script>
  
  <style lang="scss" scoped>
  .loading {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
      border: 2px solid transparent;
      border-top-color: rgb(0, 0, 0);
      animation: circle-loading 1200ms ease infinite;
    }
  }
  </style>
  