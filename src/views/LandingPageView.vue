<template>
  <div class="container">
    <div
      class="
        box
        mt-5
        d-flex
        flex-column
        align-items-center
        text-center
        justify-content-center
        rounded
        bg-white
      "
    >
      <div class="row align-items-center rounded-pill p-2">
        <div class="col">
          <img src="../assets/NewLogo.png" class="img-fluid logoLandingPage" />
        </div>
        <div class="col">
          <img src="../assets/Stechoq.png" class="img-fluid logoLandingPage" />
        </div>
        <div class="col">
          <img
            src="../assets/KampusMerdeka.png"
            class="img-fluid logoLandingPage"
          />
        </div>
      </div>
      <div class="btn-ctrl mt-5">
        <RouterLink to="/control">
          <button class="btn-control btn btn-primary">Control</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  height: 300px;
  box-shadow: 10px 8px 20px -5px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 10px 8px 20px -5px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 8px 20px -5px rgba(0, 0, 0, 0.66);
}
.logoLandingPage {
  max-height: 125px;
}
.btn-control {
  width: 100px;
}
</style>