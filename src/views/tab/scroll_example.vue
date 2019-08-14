<template>
  <div class="index-wrap">
    <header class="c-header">乐现场</header>
    <div class="banner-bg">
      <div class="lf">
        <div class="avt">
          <img src="../../../static/images/header.png" alt>
        </div>
        <div class="ct">
          <h3>乐现场</h3>
          <div class="desc">提供最好玩的娱乐生活</div>
        </div>
      </div>
      <div class="share">分享</div>
    </div>
    <div class="index-tab">
      <ul v-if="false">
        <li v-for="(item,index) in tabList" :key="index">{{item}}</li>
      </ul>
      <div class="filter">
        <ul>
          <li v-for="(item,index) in filterList" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="content-scroll-wrapper">
      <div class="content-scroll-list-wrap" ref="scrollWrapper">
        <cube-scroll
          ref="contentScroll"
          :data="items"
          :options="options"
          @pulling-down="onPullingDown"
          @pulling-up="onPullingUp"
        >
          <div v-for="(item,index) in items" :key="index">{{item}}1</div>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    onPullingDown() {
      setTimeout(() => {
        this.$refs.contentScroll.scrollTo(0, this.secondStop, 300);
      }, 1000);
    },
    onPullingUp() {
      setTimeout(() => {
        this.items = this.items.concat(1);
      }, 1000);
    },
    onImgLoad() {
      const contentScroll = this.$refs.contentScroll;
      contentScroll.scroll.beforePullDown && contentScroll.refresh();
    }
  },
  data() {
    return {
      filterList: ["本周", "下周", "热销", "推荐"],
      tabList: ["演出", "话题"],
      items: 119,
      options: {
        pullDownRefresh: {
          threshold: 60,
          // stop: 44,
          stopTime: 1000,
          txt: "更新成功"
        },
        pullUpLoad: true
      },
      secondStop: 26
    };
  },
  mounted() {},
  activated() {}
};
</script>

<style scoped lang="stylus">
.index-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;

  .content-scroll-wrapper {
    flex: 1;
    position: relative;

    .content-scroll-list-wrap {
      height: 100%;
      width: 100%;
      transform: rotate(0deg); // fix 子元素超出边框圆角部分不隐藏的问题
      position: absolute;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
  }

  .c-header {
    height: 88px;
    line-height: 88px;
    background-color: $headerBg;
    color: $headerCl;
    font-size: $headerFz;
    text-align: center;
  }

  .banner-bg {
    display: flex;
    flex: 263px 0 0;
    align-items: center;
    height: 263px;
    padding: 0 20px;
    background-image: url('/static/images/header_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    color: $fontClWhite;

    .lf {
      display: flex;
      align-items: center;
      flex: 1;

      .avt {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 13px;

        img {
          width: 100%;
        }
      }

      .ct {
        flex: 1;
        max-width: 400px;

        h3 {
          font-size: 36px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .desc {
          font-size: 26px;
          margin-top: 19px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .share {
      width: 90px;
      height: 42px;
      line-height: 40px;
      text-align: center;
      border: 2px solid $bdClWhite;
      border-radius: 21px;

      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>