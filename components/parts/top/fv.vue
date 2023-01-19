<template>
  <div class="fv-container">
    <img src="~/assets/img/fv.jpg" />
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/css/variables';
@use '@/assets/css/mixin';
.fv-container {
  width: 100%;
  height: 100vh;
  @include mixin.sp{
    height: auto;
  }
  img {
    width: 100%;
    height: 100%;
    object-position: center 30%;
    object-fit: cover;
  }
}
</style>
