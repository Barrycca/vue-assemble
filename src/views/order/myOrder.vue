<template>
  <div class="myOrder-wrap">
    <v-header title="我的订单" :haveBack="true" backUrl="tab/mine"></v-header>
    <div class="tab">
      <ul>
        <li
          v-for="(item,index) in tabList"
          :key="index"
          :class="{'active':selectType==index}"
          @click="tabClick(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="content-scroll-wrapper">
      <div class="content-scroll-list-wrap" ref="scrollWrapper">
        <cube-scroll
          ref="contentScroll"
          :data="list"
          :options="options"
          @pulling-down="onPullingDown"
          @pulling-up="onPullingUp"
        >
          <div class="order-item" v-for="(item,index) in list" :key="index">
            <div class="top">
              <div class="order-num">订单编号：{{item.orderNumber}}</div>
              <div class="state">
                <div class="ing" v-if="item.orderState==0">拼团中，还差{{item.lackMember}}人拼成</div>
                <div class="black" v-if="item.orderState==1">交易取消</div>
                <div
                  class="ing"
                  :class="{'black':!item.remainTimeStr}"
                  v-if="item.orderState==2"
                >{{item.remainTimeStr?'支付剩余时间':'交易取消'}} {{item.remainTimeStr}}</div>
                <div class="black" v-if="item.orderState==3">订单已付款，待确认</div>
                <div class="black" v-if="item.orderState==4">订单已确认，待出票</div>
                <div class="black" v-if="item.orderState==5">订单已出票</div>
                <div class="black" v-if="item.orderState==6">订单已完成</div>
                <div class="black" v-if="item.orderState==7">退款中</div>
                <div class="black" v-if="item.orderState==8">退款完成</div>
              </div>
            </div>
            <div class="mid" @click="toDetail(item)">
              <div class="poster">
                <img src="/static/images/header.png" alt @load="onImgLoad">
              </div>
              <div class="rt-main">
                <div class="title">奔跑吧2016 浙江卫视跨年演唱会火热售票中</div>
                <div class="time">2015.12.31(周六) 19：30</div>
                <div class="address">华润深圳湾体育中心＂春茧＂体育场</div>
                <div class="price">
                  <div class="red-price">￥380</div>
                  <div class="unit">/ 共2张票</div>
                </div>
              </div>
            </div>
            <div class="bottom" v-if="item.orderState!=1">
              <div class="op-btns">
                <!-- 拼团中，还差1人拼成 -->
                <template v-if="item.orderState==0">
                  <div class="op-btn red">邀请好友</div>
                </template>
                <!-- 交易取消 -->
                <template v-if="item.orderState==2">
                  <div class="op-btn">取消订单</div>
                  <div class="op-btn red">去支付</div>
                </template>
                <!-- 订单已付款，待确认/订单已确认，待出票 -->
                <template v-if="item.orderState==3||item.orderState==4">
                  <div class="op-btn">联系客服</div>
                </template>
                <!-- 订单已出票 -->
                <template v-if="item.orderState==5">
                  <div class="op-btn">联系客服</div>
                  <div class="op-btn s-red">查看详情</div>
                </template>
                <!-- 订单已完成 -->
                <template v-if="item.orderState==6">
                  <div class="op-btn">删除订单</div>
                  <div class="op-btn">联系客服</div>
                  <div class="op-btn s-red">去评价</div>
                </template>
                <!-- 退款中 -->
                <template v-if="item.orderState==7">
                  <div class="op-btn">联系客服</div>
                  <div class="op-btn s-red">退款详情</div>
                </template>
                <!-- 退款完成 -->
                <template v-if="item.orderState==8">
                  <div class="op-btn">删除订单</div>
                  <div class="op-btn">联系客服</div>
                  <div class="op-btn">退款详情</div>
                </template>
              </div>
            </div>
          </div>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
import { countDownFun } from "../../assets/js/common";
export default {
  name: "myOrder",
  components: {
    vHeader
  },
  data: function() {
    return {
      tabList: ["全部", "已付款", "待付款", "已关闭"],
      selectType: 0,
      list: [
        // 准备渲染的数据
        {
          orderNumber:"2019061203124565",
          lackMember:2, //还差多少人成团
          remainTime: 900000, // 距离结束还有多久
          remainTimeStr: "", // 展示文案
          orderState: 0 //0拼团中 1交易取消 2待支付 3已付款 4已确认 5已出票 6已完成 7退款中 8退款完成
        },
        {
          orderNumber:"2019061203124564",
          lackMember:0, 
          remainTime: 400000,
          remainTimeStr: "",
          orderState: 1
        },
        {
          orderNumber:"2019061203124563",
          lackMember:0, 
          remainTime: 60500,
          remainTimeStr: "",
          orderState: 2
        }
      ],
      options: {
        pullDownRefresh: {
          threshold: 60,
          // stop: 44,
          stopTime: 1000,
          txt: " "
        },
        pullUpLoad: true
      },
      secondStop: 26
    };
  },
  created() {
    this.countdown();
  },
  methods: {
    countdown() {
      let self = this;
      let timer = setInterval(function() {
        for (let i = 0; i < self.list.length; i++) {
          self.list[i].remainTime -= 1000;
          let t = self.list[i].remainTime;
          if (t > 0) {
            let day = Math.floor(t / 86400000);
            let hour = Math.floor((t / 3600000) % 24);
            let min = Math.floor((t / 60000) % 60);
            let sec = Math.floor((t / 1000) % 60);
            day = day < 10 ? "0" + day : day;
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            let format = "";
            format = `${hour}:${min}:${sec} `;
            self.list[i].remainTimeStr = format;
          } else {
            // 进行判断 如果数据内所有的倒计时已经结束，那么结束定时器， 如果没有那么继续执行定时器
            let flag = self.list.every((val, ind) => val.remainTime <= 0);
            if (flag) clearInterval(timer);
            self.list[i].remainTimeStr = ""; // 结束文案
          }
        }
      }, 1000);
    },
    tabClick(index) {
      this.selectType = index;
    },
    toDetail(item){
      this.$router.push('/orderDetail')
    },
    onPullingDown() {
      if (this.list.length) {
        setTimeout(() => {
          this.$refs.contentScroll.scrollTo(0, this.secondStop, 300);
          this.$refs.contentScroll.forceUpdate();
        }, 1000);
      } else {
        this.$refs.contentScroll.forceUpdate();
      }
    },
    onPullingUp() {
      setTimeout(() => {
        this.list = this.list.concat(1);
      }, 1000);
    },
    onImgLoad() {
      const contentScroll = this.$refs.contentScroll;
      contentScroll.scroll.beforePullDown && contentScroll.refresh();
    }
  },
  destroyed() {
    this.list.forEach(val => {
      val.remainTime = 0;
    });
  }
};
</script>

<style scoped lang="stylus">
.myOrder-wrap {
  background-color: $bodyBg;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;

  .content-scroll-wrapper {
    flex: 1;
    position: relative;
    background-color: $bodyBg;

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

  .tab {
    background-color: $bgWhite;

    ul {
      display: flex;
      font-size: 28px;
      margin: 0 103px;
      justify-content: space-between;

      li {
        padding: 30px 0;
        border-bottom: 4px solid transparent;

        &.active {
          border-color: $themeCl;
        }
      }
    }
  }

  .order-item {
    margin-top: 10px;
    background-color: $bgWhite;

    .top {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      padding: 19px 18px;
      border-bottom: 1px solid $lineCl;

      .state {
        .ing {
          color: $themeCl;
        }

        .black {
          color: $ipCl;
        }
      }

      .order-num {
        color: $grayCl;
      }
    }

    .mid {
      display: flex;
      padding: 18px 19px;
      border-bottom: 1px solid $lineCl;

      .poster {
        flex: 150px 0 0;
        width: 150px;
        height: 209px;
        margin-right: 23px;

        img {
          width: 100%;
        }
      }

      .rt-main {
        .title {
          font-size: 30px;
          font-weight: 400;
          color: $titleCl;
          line-height: 40px;
          margin-bottom: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .time {
          color: $grayCl;
          line-height: 30px;
          margin-bottom: 12px;
        }

        .address {
          color: $grayCl;
          line-height: 30px;
          margin-bottom: 12px;
        }

        .price {
          display: flex;
          align-items: center;

          .red-price {
            color: $themeCl;
            font-size: 32px;
            margin-right: 8px;
          }
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      padding: 15px 20px;

      .op-btns {
        display: flex;
        align-items: center;

        .op-btn {
          width: 150px;
          height: 50px;
          text-align: center;
          line-height: 48px;
          color: $bdCl;
          border-radius: 25px;
          border: 1px solid $bdCl;
          margin-left: 20px;

          &.red {
            background: $themeCl;
            color: $fontClWhite;
            border-color: $themeCl;
          }
        }
      }
    }
  }
}
</style>