<template>
  <div class="payState-wrap">
    <v-header title="支付状态" :haveBack="true"></v-header>
    <div class="container">
      <div class="state-box">
        <div class="line"></div>
        <div class="show-box">
          <div class="title">
            <i class="icon-success"></i>
            <div class="txt">支付成功</div>
          </div>
          <div class="content">
            <div class="col">
              <div class="lb">订单号</div>
              <div class="ct">15656543673464367467</div>
            </div>
            <div class="col">
              <div class="lb">购票人</div>
              <div class="ct">项少龙 13823434212</div>
            </div>
            <div class="col" v-if="deliverType==0">
              <div class="lb">购票地址</div>
              <div class="ct">深圳市黄贝岭文化大厦西座10 楼DE趣票网大厦</div>
            </div>
            <div class="col">
              <div class="lb">项目</div>
              <div class="ct">《水中之书》深圳站</div>
            </div>
            <div class="col">
              <div class="lb">支付金额</div>
              <div class="ct colff">¥2800</div>
            </div>
          </div>
          <div class="op-btns">
            <div class="op-btn" @click="$router.push('/orderDetail')">查看订单详情</div>
            <div class="op-btn red" @click="$router.push('/')">继续购票</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "payState",
  components: {
    vHeader
  },
  data: function() {
    return {
      deliverType: 0 //0快递
    };
  },
  mounted() {},
  activated() {},
  methods: {}
};
</script>

<style scoped lang="stylus">
.payState-wrap {
  position: relative;
  display: flex;
  flex-flow: column;
  background-color: $bodyBg;

  .container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    .state-box {
      padding: 24px 14px;

      .line {
        width: 100%;
        height: 32px;
        background-color: #525252;
        border-radius: 22px;
      }

      .show-box {
        background-color: $bgWhite;
        margin: -20px 16px 0;
        padding: 64px;

        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;

          .icon-success {
            width: 60px;
            height: 60px;
            background-image: url('/static/images/icon_suc.png');
            background-repeat: no-repeat;
            background-size: contain;
            margin-right: 22px;
          }
        }

        .content {
          margin-top: 60px;
          margin-bottom: 70px;

          .col {
            display: flex;
            font-size: 28px;
            margin-bottom: 24px;
            line-height: 1.2;

            .lb {
              color: $grayCl;
              flex: 200px 0 0;
            }

            .ct {
              color: $titleCl;
            }
          }
        }

        .op-btns {
          display: flex;
          justify-content: space-between;
          margin: 0 20px;

          .op-btn {
            width: 220px;
            height: 68px;
            line-height: 68px;
            text-align: center;
            border-radius: 34px;
            border: 2px solid $bdCl;
            color: $bdCl;

            &:active {
              opacity: 0.8;
            }

            &.red {
              color: $fontClWhite;
              background-color: $themeCl;
              border-color: $themeCl;
            }
          }
        }
      }
    }
  }
}
</style>