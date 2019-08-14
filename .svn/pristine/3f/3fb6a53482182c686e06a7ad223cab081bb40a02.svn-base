<template>
  <div class="payment-wrap">
    <v-header title="选择支付方式" :haveBack="true"></v-header>
    <div class="container">
      <div class="product-info">
        <div class="cut-down-box">
          <p class="pay-txt">支付剩余时间</p>
          <div class="cut-down">
            <p>{{hr}}</p>
            <span class="colon">:</span>
            <p>{{min}}</p>
            <span class="colon">:</span>
            <p>{{sec}}</p>
          </div>
        </div>
        <div class="pro-detail">
          <div class="lf-name">2019年世界经典原版音乐《猫》CAT音乐大片剧场</div>
          <div class="rt">
            <span class="txt">应付</span>
            <span class="money">¥2700</span>
          </div>
        </div>
      </div>
      <div class="select-box">
        <ul>
          <li v-for="(item,idx) in paymentList" :key="idx" @click="choseSelect(item.id,idx)">
            <div class="lf">
              <i class="icon" :class="`icon-${item.eName}`"></i>
              <span>{{item.name}}</span>
            </div>
            <div class="rt">
              <div class="selection" :class="{'on':item.checked}"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cfm-pay" @click="$router.push('/payState')">确认支付¥2700</div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "payment",
  components: {
    vHeader
  },
  data: function() {
    return {
      paymentList: [],
      hr: "00",
      min: "00",
      sec: "00"
    };
  },
  mounted() {
    this.getPayment();
  },
  activated() {},
  methods: {
    getPayment() {
      this.paymentList = [
        {
          name: "微信支付",
          eName: "wechat",
          autoID: "10"
        },
        {
          name: "支付宝",
          eName: "alipay",
          autoID: "11"
        }
      ];
      this.$nextTick(() => {
        this.paymentList.forEach(ele => {
          ele.checked = false;
        });
        this.paymentList[0].checked = true;
        console.log(this.paymentList);
        this.$forceUpdate();
      });
    },
    choseSelect(id, index) {
      this.paymentList.forEach(item => {
        item.checked = false;
      });
      this.paymentList[index].checked = true;
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped lang="stylus">
.payment-wrap {
  display: flex;
  flex-flow: column;
  background-color: $bodyBg;

  .container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    .product-info {
      padding: 52px 20px 24px 20px;
      background-color: $bgWhite;

      .cut-down-box {
        text-align: center;

        .pay-txt {
          font-size: 24px;
          color: $grayCl;
          margin-bottom: 12px;
        }

        .cut-down {
          display: flex;
          align-items: center;
          font-size: 28px;
          justify-content: center;

          p {
            width: 44px;
            height: 44px;
            line-height: 44px;
            text-align: center;
            background-color: $headerBg;
            color: $fontClWhite;
          }

          span {
            &.colon {
              padding: 0 9px;
            }
          }
        }
      }

      .pro-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 52px;

        .lf-name {
          width: 476px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 28px;
          line-height: 30px;
          color: $ipCl;
        }

        .rt {
          display: flex;
          align-items: center;
          font-size: 24px;
          color: $grayCl;

          .txt {
            margin-right: 8px;
            width: 50px;
          }

          .money {
            font-size: 32px;
            color: $themeCl;
          }
        }
      }
    }

    .select-box {
      background-color: $bgWhite;
      padding-left: 20px;
      padding-bottom: 22px;
      margin-top: 10px;

      ul {
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          padding-bottom: 26px;
          border-bottom: 2px solid $lineCl;

          .lf {
            display: flex;
            align-items: center;

            .icon {
              display: block;
              width: 44px;
              height: 44px;
              background-repeat: no-repeat;
              background-size: contain;
              margin-left: 8px;
              margin-right: 12px;

              &.icon-wechat {
                background-image: url('/static/images/wechat_icon.png');
              }

              &.icon-alipay {
                background-image: url('/static/images/alipay_icon.png');
              }
            }
          }

          .selection {
            width: 40px;
            height: 40px;
            background-image: url('/static/images/profile_icon_option.png');
            background-repeat: no-repeat;
            background-size: contain;
            margin-right: 28px;

            &.on {
              background-image: url('/static/images/profile_icon_option_pre.png');
            }
          }
        }
      }
    }
  }

  .cfm-pay {
    height: 98px;
    line-height: 98px;
    background-color: $themeCl;
    color: $fontClWhite;
    text-align: center;
    font-size: 32px;

    &:active {
      opacity: 0.8;
    }
  }
}
</style>