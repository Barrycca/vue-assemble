<template>
  <div class="mine-wrap">
    <v-header title="我的" :haveBack="false"></v-header>
    <div class="banner-bg" :style="{backgroundImage:'url(' + bannerBg + ')'}">
      <div class="lf">
        <div class="avt">
          <img src="../../../static/images/header.png" alt>
        </div>
        <div class="ct">
          <h3>乐现场</h3>
        </div>
      </div>
    </div>
    <div class="link-list">
      <ul>
        <li class="link-item" @click="goTo('myOrder')">
          <div class="lf">
            <i class="icon icon-mo"></i>
            <div class="text">我的订单</div>
          </div>
          <div class="rt">
            <div class="arr"></div>
          </div>
        </li>
        <li class="link-item" @click="goTo('addressList')">
          <div class="lf">
            <i class="icon icon-address"></i>
            <div class="text">购票人地址</div>
          </div>
          <div class="rt">
            <div class="arr"></div>
          </div>
        </li>
        <li class="link-item" @click="goTo('observerList')">
          <div class="lf">
            <i class="icon icon-person"></i>
            <div class="text">观演人</div>
          </div>
          <div class="rt">
            <div class="arr"></div>
          </div>
        </li>
        <li class="link-item">
          <div class="lf">
            <i class="icon icon-contact"></i>
            <div class="text">联系客服</div>
          </div>
          <div class="rt">
            <div class="arr"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "mine",
  components: {
    vHeader
  },
  data() {
    return {
      bannerBg: "/static/images/my_bg.png"
    };
  },
  methods: {
    goTo(url) {
      this.$router.push("/" + url);
    }
  },
  mounted() {},
  activated() {}
};
</script>

<style scoped lang="stylus">
.mine-wrap {
  height: 100%;
  background-color: $bodyBg;

  .banner-bg {
    display: flex;
    flex: 280px 0 0;
    align-items: center;
    height: 280px;
    padding: 0 20px;
    background-repeat: no-repeat;
    background-size: cover;
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
        border: 3px solid $bdClWhite;
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
          font-size: 28px;
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

  .link-list {
    background-color: $bgWhite;

    ul {
      li {
        display: flex;
        align-items: center;
        padding: 50px 20px 20px 0;
        margin-left: 20px;
        border-bottom: 1px solid $lineCl;

        &:active {
          opacity: 0.8;
        }

        .lf {
          display: flex;
          align-items: center;
          flex: 1;

          i.icon {
            width: 36px;
            height: 36px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin-right: 6px;

            &.icon-mo {
              background-image: url('/static/images/order.png');
            }

            &.icon-address {
              background-image: url('/static/images/address.png');
            }

            &.icon-person {
              background-image: url('/static/images/visiter.png');
            }

            &.icon-contact {
              background-image: url('/static/images/contact.png');
            }
          }
        }

        .rt {
          .arr {
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            background-image: url('/static/images/enter_ar.png');
          }
        }
      }
    }
  }
}
</style>