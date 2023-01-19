<template>
  <section id="business">
    <div class="business-title">
      <h2><span class="bold"></span>Works</h2>
    </div>
    <div v-for="biz in business" :key="biz.id" class="card">
      <div class="card-container-flex">
        <div class="card-container-content content-left">
          <div class="img-container"></div>
        </div>
        <div class="card-container-content content-right">
          <h3>
            {{ biz.businessName }}
          </h3>
          <h4>{{ biz.businessNameEn }}</h4>
          <p class="business-detail" v-for="bizDsc in biz.businessDescription" :key="bizDsc.id">
            {{ bizDsc }}
          </p>
          <div class="btn-container fl-right">
            <PartsCommonCircleButton
              :text="biz.businessName"
              :link="'/' + biz.businessPageName"
            />
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title.rendered }}
      </li>
    </ul>
  </section>
</template>
<script>
import dataMaster from "~/service/dataMaster";
import axios from 'axios';
export default {
  data() {
    return {
      posts: [],
      business: dataMaster.getBusiness(),
    };
  },
  mounted(){
    axios.get('http://localhost:8000/wp-json/wp/v2/posts?per_page=3')
    .then(response => this.posts = response.data);
  }
};
</script>
<style lang="scss" scoped>
@use "@/assets/css/variables";
@use "@/assets/css/mixin";
.business-title {
  max-width: 1200px;
  margin: 34px auto;
  text-align: left;
  @include mixin.sp {
    margin-bottom: 16px;
    height: auto;
  }
  h2 {
    font-size: 6.4rem;
    font-weight: bold;
    -webkit-text-stroke: 2px #888;
    text-stroke: 2px #888;
    color: rgba(0, 0, 0, 0);
  }
}
.card {
  margin: 10px auto;
  width: 96%;
  max-width: 1200px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @include mixin.sp {
    margin: 20px auto;
    height: auto;
  }
  .card-container-flex {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 22px;
    @include mixin.sp {
      flex-direction: column;
      padding: 0;
    }
    .card-container-content {
      padding: 16px;
      width: 50%;
      height: 100%;
      @include mixin.sp {
        width: 100%;
      }
    }
    .content-left {
      .img-container {
        width: 100%;
        height: 300px;
        box-shadow: 0px 6px 4px 2px rgba(black, 0.2) inset;
        background-image: url("~@/assets/img/fv.jpg");
        border: 2px solid black;
        background-size: cover;
      }
    }
    .content-right {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      position: relative;
      h3 {
        font-size: 3.2rem;
        z-index: 1;
      }
      h4 {
        color: rgba(variables.$light-black, 0.3);
        font-size: 2.8rem;
        position: absolute;
        top: 8px;
        z-index: 0;
      }
      p {
        font-size: 2rem;
        margin-bottom: 16px;
      }
    }
  }
  &:nth-of-type(even) {
    .card-container-flex {
      flex-direction: row-reverse;
    }
    @include mixin.sp {
      .card-container-flex {
        flex-direction: column;
      }
    }
  }
}
</style>
