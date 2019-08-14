<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="orderConfirm">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus">
@import 'css/theme.styl';

#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app > div {
  width: 100%;
  height: 100%;
}

.slide-left-enter, .slide-right-leave-to {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.slide-left-leave-to, .slide-right-enter {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: absolute;
  top: 0;
}
</style>
