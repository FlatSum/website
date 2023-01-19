<template>
  <div class="btn-content-flex">
    <nuxt-link class="btn-text" :to="link">{{ text }}</nuxt-link>
    <div class="circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 46"
        stroke="none"
        width="10"
      >
        <path
          d="M8,2 L28,21 8,42"
          fill="none"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      style: [String],
      default: "",
    },
    link: {
      style: [String],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-content-flex {
  background-color: #fbfbfb;
  border-radius: 40px;
  border: 2px solid black;
  box-shadow: 0px -6px 4px 0px #bbb inset;
  transition-duration: 0.4s;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn-text {
    margin: 0 20px 0 32px;
    font-size: 1.6rem;
    font-weight: bold;
    color: #888;
  }
  .circle {
    margin-right: 16px;
    height: 48px;
    width: 48px;
    border-radius: 24px;
    border: 1px solid #888;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.4s;
    svg {
      stroke: #888;
      transition-duration: 0.4s;
    }
  }
  &:hover {
    background-color: #fff;
    cursor: pointer;
    .circle {
      border-color: #00ffbf;
      svg {
        stroke: #00ffbf;
      }
    }
  }
}
</style>
