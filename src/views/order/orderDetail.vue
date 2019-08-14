<template>
  <div class="orderDetail-wrap">
    <v-header title="订单详情" :haveBack="true" backUrl="myOrder"></v-header>
    <div class="container">
      <div class="top-bg">
        <!-- 交易取消 -->
        <div class="deal-state" v-if="orderState==1">
          <h2>交易取消</h2>
          <div class="desc">订单超时取消</div>
        </div>
        <!-- 待支付 -->
        <div class="deal-state" v-if="orderState==2">
          <h2>待支付</h2>
        </div>
        <!-- 拼团中 -->
        <div class="deal-state" v-if="orderState==0">
          <h2>拼团中，还差1人拼成</h2>
        </div>
        <div class="statistics" v-if="orderState==0">
          <div class="state">
            <!-- 正在拼团 -->
            <div class="ing">
              <div class="time">
                <div class="t-txt">剩余</div>
                <div class="cut-down">
                  <p>{{hour}}</p>
                  <span class="colon">:</span>
                  <p>{{min}}</p>
                  <span class="colon">:</span>
                  <p>{{sec}}</p>
                </div>
              </div>
              <div class="total">
                已有
                <span class="alr">1</span> 人参与，还差
                <span class="catch">4</span> 人拼团成功
              </div>
            </div>
          </div>
          <div class="member">
            <ul>
              <li>
                <div
                  class="u-avt"
                  :style="{backgroundImage:'url(' + '/static/images/av.png' + ')'}"
                >
                  <div class="lab">团长</div>
                </div>
                <div class="name">wilbur</div>
              </li>
              <li>
                <div class="u-avt"></div>
                <div class="name">待参团</div>
              </li>
              <li>
                <div class="u-avt"></div>
                <div class="name">待参团</div>
              </li>
              <li>
                <div class="u-avt"></div>
                <div class="name">待参团</div>
              </li>
              <li>
                <div class="u-avt"></div>
                <div class="name">待参团</div>
              </li>
            </ul>
          </div>
          <div class="j-btn" @click="popShow=true">邀请好友拼团</div>
        </div>
        <!-- 已付款，待确认 -->
        <div class="deal-state" v-if="orderState==3">
          <h2>订单已付款，待确认</h2>
        </div>
        <!-- 已确认，待出票 -->
        <div class="deal-state" v-if="orderState==4">
          <h2>订单已确认，待出票</h2>
        </div>
        <!-- 已出票,待收货 -->
        <div class="deal-state" v-if="orderState==5">
          <h2>订单已确认，待出票</h2>
        </div>
        <!-- 退款中 -->
        <div class="deal-state" v-if="orderState==7">
          <h2>退款中</h2>
        </div>
        <!-- 退款完成 -->
        <div class="deal-state" v-if="orderState==8">
          <h2>退款完成</h2>
        </div>
        <div class="content-box">
          <!-- 待支付 -->
          <div class="tips-box" v-if="orderState==2">
            <div class="tip">请在{{remainTimeStr}}内支付，超时将取消订单</div>
            <div class="operate-btns">
              <div class="o-btn">重新下单</div>
              <div class="o-btn red">去支付</div>
            </div>
          </div>
          <!-- 快递-->
          <div class="tips-box" v-if="orderState==5&&collectType==0">
            <div class="col">
              <div class="lbs">快递公司：</div>
              <div class="ct">顺丰快递</div>
            </div>
            <div class="col">
              <div class="lbs">快递公司：</div>
              <div class="ct">
                <div class="num" id="deliverID">123456789987745</div>
                <div
                  class="copy-btn tag-read"
                  data-clipboard-text="123456789987745"
                  @click="copy"
                >复制</div>
              </div>
            </div>
          </div>
          <!--电子票-->
          <div class="tips-box" v-if="orderState==5&&collectType==1">
            <div class="qrcode-wrapper">
              <div id="qrcode" ref="qrcode"></div>
              <div class="qr-op">
                <p>二维码实时刷新</p>
                <i class="refresh-icon" @click="refreshCode"></i>
              </div>
              <div class="voucher">
                <div class="nb">{{vNoShow}}</div>
                <div class="look-all" @click="seeAll">查看完整凭证号</div>
              </div>
            </div>
          </div>
          <!--上门取 -->
          <div class="tips-box" v-if="orderState==5&&collectType==2">
            <div class="tips-tt">深圳市罗湖区黄贝岭街道文华大厦西座10楼D</div>
            <div class="address-box">
              <div class="left">
                <div class="col">
                  <div class="lbs">时间:</div>
                  <div class="ct">周一至周日9:30-18:30</div>
                </div>
                <div class="col">
                  <div class="lbs">电话:</div>
                  <div class="ct">400-718-0666</div>
                </div>
              </div>
              <div class="right">
                <a href="http://api.map.baidu.com/geocoder?address=深圳市罗湖区黄贝岭街道文华大厦西座10楼D&output=html&src=webapp.baidu.openAPIdemo" target="_blank" class="map-icon"></a>
              </div>
            </div>
          </div>
          <!--退款中 -->
          <div class="tips-box" v-if="orderState==7">
            <div class="time">2019年5月14日17:00:53</div>
            <div class="result-tips">您的退款申请已提交</div>
          </div>
          <!--退款完成 -->
          <div class="tips-box" v-if="orderState==8">
            <div class="time">2019年5月14日17:00:53</div>
            <div class="result-tips">您的订单已退款，请注意查收</div>
          </div>
          <div class="order-info">
            <div class="info-item">
              <div class="item-detail">
                <div class="lf">
                  <div class="tt">涉谷纯爱物语专辑2018全球风暴来袭巡回演唱会——深圳站</div>
                  <div class="address">华润深圳湾体育中心“春茧”体育场</div>
                </div>
                <div class="rt">
                  <img src="/static/images/header.png" alt>
                </div>
              </div>
              <div class="price">
                <div class="now">¥2700</div>
                <div class="origin">/3张票</div>
              </div>
            </div>

            <div class="info-item product-info">
              <div class="title">商品信息</div>
              <div class="info-box">
                <ul>
                  <li>
                    <div class="left">￥40 x1</div>
                    <div class="right">2019-12-28 周六 19:30</div>
                  </li>
                  <li>
                    <div class="left">￥40 x1</div>
                    <div class="right">2019-12-28 周六 19:30</div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="info-item">
              <div class="title">快递配送</div>
              <div class="info-box">
                <ul>
                  <li>
                    <div class="left">收货人：</div>
                    <div class="right">Ice</div>
                  </li>
                  <li>
                    <div class="left">手机号：</div>
                    <div class="right">13147100000</div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="info-item">
              <div class="title">订单信息</div>
              <div class="info-box">
                <ul>
                  <li>
                    <div class="left">订单编号：</div>
                    <div class="right">3123131</div>
                  </li>
                  <li>
                    <div class="left">下单时间：</div>
                    <div class="right">2019-05-14 16:32:14</div>
                  </li>
                  <li>
                    <div class="left">留言备注：</div>
                    <div class="right">好位置</div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="info-item">
              <div class="title">订单信息</div>
              <div class="info-box">
                <ul>
                  <li>
                    <div class="left">商品金额：</div>
                    <div class="right">￥100</div>
                  </li>
                  <li>
                    <div class="left">快递运费：</div>
                    <div class="right">￥12</div>
                  </li>
                  <li>
                    <div class="left">优惠金额：</div>
                    <div class="right">-￥100</div>
                  </li>
                  <li>
                    <div class="left">应付金额：</div>
                    <div class="right red">￥100</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
import QRCode from "qrcodejs2";
export default {
  name: "orderDetail",
  components: {
    vHeader
  },
  data: function() {
    return {
      orderState: 5, //0拼团中 1交易取消 2待支付 3已付款 4已确认 5已出票 6已完成 7退款中 8退款完成
      collectType: 2, //0快递 1电子票 2上门取
      remainTime: 400000,
      remainTimeStr: "",
      hour: "",
      min: "",
      sec: "",
      vNo: "201906141219",
      vNoShow: "201906141219"
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    // 倒计时
    countdown() {
      let self = this;
      let timer = setInterval(function() {
        self.remainTime -= 1000;
        let t = self.remainTime;
        if (t > 0) {
          let hour = Math.floor((t / 3600000) % 24);
          let min = Math.floor((t / 60000) % 60);
          let sec = Math.floor((t / 1000) % 60);
          hour = hour < 10 ? "0" + hour : hour;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;
          let format = "";
          if (hour > 0) {
            format = `${hour}:${min}:${sec} `;
          } else {
            format = `${min}:${sec} `;
          }
          self.remainTimeStr = format;
          self.hour = hour;
          self.min = min;
          self.sec = sec;
        } else {
          clearInterval(timer);
          //到时间后重新请求
          self.getInfo();
        }
      }, 1000);
    },
    //获取信息
    getInfo() {
      // console.log("getInfo");
      if (this.orderState == 2 || this.orderState == 0) {
        this.countdown();
      }
      if (this.orderState == 5 && this.collectType == 1) {
        this.qrCode("www.baidu.com");
      }
      //success
      this.vNo = "201906141219";
      this.vNoShow = this.formatter(this.vNo, 3, 0);
    },
    formatter(value, begin, after) {
      var len = value.length;
      var starLength = len - begin - after;
      var star = "";
      for (let i = 0; i < starLength; i++) {
        star += "*";
      }
      var xx = value.substring(begin, len - after);
      var values = value.replace(xx, star);
      return values;
    },
    seeAll() {
      this.vNoShow = this.vNo;
    },
    refreshCode() {
      this.getInfo();
    },
    //复制
    copy() {
      let clipboard = new this.Clipboard(".tag-read");
      clipboard.on("success", e => {
        this.toast("复制成功");
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        this.toast("该浏览器不支持自动复制");
        // 释放内存
        clipboard.destroy();
      });
    },
    //二维码
    qrCode(url) {
      document.getElementById("qrcode").innerHTML = "";
      let qrcode = new QRCode("qrcode", {
        width: 160, //图像宽度
        height: 160, //图像高度
        text: url,
        colorDark: "#000000", //前景色
        colorLight: "#ffffff", //背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      });
    }
  }
};
</script>
<style lang="stylus">
#qrcode {
  img {
    margin: 0 auto;
  }
}
</style>

<style scoped lang="stylus">
.orderDetail-wrap {
  display: flex;
  flex-flow: column;

  .container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    .top-bg {
      width: 100%;
      background-image: url('/static/images/bg2.png');
      background-repeat: no-repeat;
      background-size: 100% 448px;
      padding: 46px 20px;

      .tips-box {
        background-color: $bgWhite;
        padding: 30px 40px;
        border-radius: 15px;
        margin-bottom: 28px;
        box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.08);

        .time {
          font-size: 24px;
          color: $grayCl;
          margin-bottom: 12px;
        }

        .result-tips {
          font-size: 28px;
          color: $ipCl;
        }

        .tips-tt {
          font-size: 28px;
          color: $titleCl;
          margin-bottom: 24px;
        }

        .address-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font: 24px;
          color: $grayCl;

          .col {
            margin-bottom: 12px;

            &:last-child {
              margin-bottom: 0;
            }
          }

          .map-icon {
            display: block;
            width: 50px;
            height: 50px;
            background-image: url('/static/images/location.png');
            background-repeat: no-repeat;
            background-size: 44px 44px;
            background-position: center;
          }
        }

        .qrcode-wrapper {
          padding: 30px 0;
          text-align: center;

          .qr-op {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin-top: 10px;

            .refresh-icon {
              width: 40px;
              height: 40px;
              background-image: url('/static/images/refresh.png');
              background-repeat: no-repeat;
              background-size: 24px 24px;
              background-position: center;

              &:active {
                opacity: 0.8;
              }
            }
          }

          .voucher {
            display: inline-flex;
            height: 104px;
            align-items: center;
            border-radius: 16px;
            border: 2px solid $btnBd;
            padding: 0 60px;
            margin-top: 36px;
            font-size: 28px;
            color: $grayCl;

            .look-all {
              margin-left: 16px;
            }
          }
        }

        .col {
          display: flex;
          align-items: center;
          font-size: 28px;
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .lbs {
            color: $grayCl;
          }

          .ct {
            flex: 1;
            display: flex;
            align-items: center;
            color: $ipCl;

            .num {
              padding-right: 16px;
              border-right: 4px solid $lineCl;
            }

            .copy-btn {
              width: 72px;
              height: 36px;
              line-height: 36px;
              font-size: 24px;
              margin: 0 16px;
              text-align: center;
              border: 2px solid $lineCl;
              border-radius: 16px;
              box-sizing: border-box;
            }
          }
        }

        .tip {
          font-size: 24px;
          color: $ipCl;
          margin-bottom: 38px;
        }

        .operate-btns {
          display: flex;
          align-items: center;

          .o-btn {
            width: 132px;
            height: 52px;
            line-height: 50px;
            text-align: center;
            border-radius: 26px;
            border: 2px solid $bdCl;
            color: $bdCl;
            margin-right: 24px;

            &:acitve {
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

      .deal-state {
        color: $fontClWhite;

        h2 {
          font-size: 44px;
          margin-bottom: 20px;
        }

        .desc {
          font-size: 24px;
        }
      }

      .statistics {
        padding: 74px 45px 28px;
        background-color: $bgWhite;
        border-radius: 15px;

        .state {
          .ing {
            text-align: center;

            .time {
              justify-content: center;
              display: flex;
              align-items: center;

              .t-txt {
                font-size: 30px;
                margin-right: 23px;
                color: $subCl;
              }

              .cut-down {
                display: flex;
                align-items: center;
                font-size: 28px;

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

            .total {
              margin-top: 28px;
              color: $ipCl;
              font-size: 26px;

              .alr {
                color: $themeCl;
                font-size: 32px;
                font-weight: bold;
              }

              .catch {
                font-size: 32px;
                font-weight: bold;
              }
            }
          }

          .st-box {
            text-align: center;

            &.success {
              .show-txt {
                color: $greenCl;
              }
            }

            &.fail {
              .show-txt {
                color: $themeCl;
              }
            }

            .show-txt {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 58px;

              >.icon {
                width: 70px;
                height: 70px;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                margin-right: 17px;

                &.suc-icon {
                  background-image: url('/static/images/success.png');
                }

                &.fail-icon {
                  background-image: url('/static/images/fail.png');
                }
              }
            }

            .s-tips {
              font-size: 26px;
              margin-top: 36px;
            }
          }
        }

        .member {
          margin-top: 70px;

          ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 45px;

            li {
              position: relative;
              text-align: center;

              .u-avt {
                width: 80px;
                height: 80px;
                background-image: url('/static/images/member.png');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;

                .lab {
                  position: absolute;
                  bottom: 30px;
                  left: 50%;
                  margin-left: -30px;
                  width: 60px;
                  display: inline-block;
                  font-size: 14px;
                  background-color: $themeCl;
                  padding: 4px 6px;
                  border-radius: 4px;
                  color: $fontClWhite;
                }
              }

              .name {
                margin-top: 20px;
              }
            }
          }
        }

        .j-btn {
          height: 80px;
          line-height: 80px;
          font-size: 32px;
          text-align: center;
          color: $fontClWhite;
          background-color: $themeCl;
          border-radius: 80px;
          margin-top: 64px;
          cursor: pointer;
        }
      }

      .content-box {
        margin-top: 44px;

        .order-info {
          position: relative;
          background-color: $bgWhite;
          box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.08);
          padding: 0 40px;
          border-radius: 15px;
          margin-bottom: 20px;

          &::before {
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -44px;
            display: block;
            content: '';
            width: 88px;
            height: 8px;
            background-color: $themeCl;
            border-radius: 0 0 15px 15px;
          }

          &::after {
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -44px;
            display: block;
            content: '';
            width: 88px;
            height: 8px;
            background-color: rgb(228, 228, 228);
            border-radius: 15px 15px 0 0;
          }

          .info-item {
            padding: 30px 0;
            border-bottom: 1px dashed $lineCl;

            &:last-child {
              border-bottom: 0;
            }

            &.product-info {
              .info-box {
                ul {
                  li {
                    .left {
                      flex: 150px 0 0;
                    }
                  }
                }
              }
            }

            .item-detail {
              display: flex;
              align-items: center;

              .lf {
                flex: 1;
                margin-right: 54px;

                .tt {
                  font-size: 30px;
                  color: $titleCl;
                  line-height: 44px;
                }

                .address {
                  font-size: 24px;
                  color: $grayCl;
                  margin-top: 16px;
                  margin-bottom: 40px;
                }
              }

              .rt {
                flex: 100px 0 0;

                img {
                  width: 100%;
                }
              }
            }

            .price {
              display: flex;
              align-items: center;

              .now {
                font-size: 32px;
                color: $themeCl;
              }

              .origin {
                font-size: 24px;
                color: $ipCl;
              }
            }

            >.title {
              color: $titleCl;
              font-size: 30px;
              margin-bottom: 24px;
            }

            .info-box {
              ul {
                li {
                  display: flex;
                  align-items: center;
                  font-size: 24px;
                  color: $grayCl;
                  margin-bottom: 14px;

                  .right {
                    &.red {
                      color: $themeCl;
                    }
                  }

                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>