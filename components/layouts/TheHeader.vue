<template>
  <header>
    <div class="header-container">
      <nuxt-link class="header-logo-container" :to="$router.options.base">
      </nuxt-link>
      <div class="header-nav-flex">
        <p v-for="content in contents" :key="content.id">{{ content.contentsName }}</p>
      </div>
    </div>
    <div class="sp-modal sp"></div>
  </header>
</template>
<script>
import dataMaster from "~/service/dataMaster";
export default {
  data() {
    return {
      contents: dataMaster.getContents(),
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  z-index: 10;
  .header-container {
    width: 96%;
    margin: 16px auto 0;
    height: 64px;
    border-radius: 32px;
    border: 2px solid black;
    backdrop-filter: blur(8px);
    background-color: rgba(white, 0.6);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .header-nav-flex {
        display: flex;
        margin-right: 20px;
      p {
        font-size: 1.8rem;
        margin: 0 10px;
      }
    }
  }
}
</style>
