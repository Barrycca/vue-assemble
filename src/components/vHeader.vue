<template>
  <header class="c-header">
    <div class="back-btn" v-if="haveBack" @click="back"></div>
    <p class="tt">{{title}}</p>
    <p class="subtt" v-if="subTitle">{{subTitle}}</p>
  </header>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "normal"
    },
    //是否有返回键
    haveBack: {
      type: Boolean,
      default: false
    },
    //标题
    title: {
      type: String,
      required: true
    },
    //小标题说明
    subTitle: {
      type: String,
      default: ""
    },
    //返回路径
    backUrl: {
      type: String,
      default: ""
    }
  },
  methods: {
    back() {
      if (this.backUrl) {
        this.$router.push("/" + this.backUrl);
      } else {
        this.$router.back();
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.c-header {
  position: relative;
  height: 88px;
  line-height: 88px;
  background-color: $headerBg;
  color: $headerCl;
  font-size: $headerFz;
  text-align: center;

  .tt {
    max-width: 320px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: auto;
  }
}

.back-btn {
  position: absolute;
  left: 0;
  top: 0;
  width: 88px;
  height: 88px;
  background-image: url('/static/images/back.png');
  background-repeat: no-repeat;
  background-size: 34px 34px;
  background-position: center;
}
</style>
