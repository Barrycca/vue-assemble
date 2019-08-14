<template>
  <div class="selection-wrap">
    <v-header title="立即购票" :haveBack="true"></v-header>
    <div class="content-box">
      <div class="scene ct-item">
        <div class="tt">
          <h3>场次</h3>
        </div>
        <div class="select-box">
          <div
            class="select-item"
            :class="{'on':sceneId==item.id}"
            v-for="item in timeList"
            :key="item.id"
            @click="selectScene(item.id)"
          >{{item.text}}</div>
        </div>
      </div>
      <div class="price ct-item">
        <div class="tt">
          <h3>票价 {{$route.query.type=='single'?'':'拼团'}}</h3>
          <div class="rt">
            <p>查看座位</p>
            <i class="icon icon-seat"></i>
          </div>
        </div>
        <div class="select-box">
          <div
            class="select-item"
            :class="{'on':priceId==item.id,'none':!item.stock}"
            v-for="item in priceList"
            :key="item.id"
            @click="selectPrice(item.id,item.stock)"
          >￥{{item.text}}</div>
        </div>
      </div>
      <div class="selct-num ct-item">
        <div class="tt none">
          <h3>选择数量</h3>
          <div class="rt-cacl">
            <div class="op-btn" @click="reduce">-</div>
            <input
              type="number"
              onpaste="return false;"
              class="input"
              maxlength="2"
              v-model.number="count"
              @input="limitInput"
            >
            <div class="op-btn" @click="add">+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-box">
      <div class="total-box">
        <div class="prices">
          <div class="now">￥600</div>
          <div class="old">￥700</div>
        </div>
        <div class="discount">已优惠￥100</div>
      </div>
      <div class="bottom-btn" @click="toConfirm">确定</div>
    </div>

    <div class="pop-wrap" v-show="popShow">
      <div class="pop-box">
        <div class="pop__top">
          <div class="pop__title">缺货登记</div>
          <div class="pop_colse_btn" @click="closePop"></div>
        </div>
        <div class="scene">
          <div class="time">场次票价 2109-07-11 周四 19:20</div>
          <div class="price">￥440</div>
        </div>
        <div class="input__box">
          <div class="input__item">
            <div class="rt-cacl">
              <div class="op-btn reduce" @click="reduce"></div>
              <input
                type="number"
                onpaste="return false;"
                class="input"
                maxlength="2"
                v-model.number="appointmentCount"
                @input="limitInput"
              >
              <div class="op-btn add" @click="add"></div>
            </div>
          </div>
          <div class="input__item">
            <input type="text" placeholder="请输入手机号码" class="fill">
          </div>
        </div>
        <div class="pop__tips">此票价暂时缺货，您可进行缺货登记。我们会记录您的基本信息。待到货时我们会第一时间通知您。若始终缺货，趣票将不做另行通知。</div>
        <div class="pop__btn">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "orderDetail",
  components: {
    vHeader
  },
  data: function() {
    return {
      timeList: [
        { id: 1, text: "2017-01-01 周六 19:00" },
        { id: 2, text: "2017-01-01 周六 19:00" }
      ],
      sceneId: "",
      priceList: [
        { id: 1, text: "80", stock: false },
        { id: 2, text: "180", stock: true },
        { id: 3, text: "280", stock: true }
      ],
      priceId: "",
      count: 1,
      maxCount: 20,
      popShow: false,
      appointmentCount: 1
    };
  },
  methods: {
    //获取票价、场次
    getInfo() {
      let ticketId = this.$route.query.itemId;
      this.$api.itemInfo
        .itemInfo({
          ticketId: ticketId
        })
        .then(res => {
          // 执行某些操作
          this.toast("请求了");
        });
    },
    //选择场次
    selectScene(id) {
      this.sceneId = id;
    },
    //选择票价
    selectPrice(id, stock) {
      if (!stock) {
        this.appointmentCount = 1;
        this.popShow = true;
        return;
      }
      this.priceId = id;
    },
    closePop() {
      this.popShow = false;
    },
    add() {
      if (this.popShow) {
        if (this.appointmentCount >= this.maxCount) {
          this.appointmentCount = this.maxCount;
        } else {
          this.appointmentCount++;
        }
      } else {
        if (this.count >= this.maxCount) {
          this.count = this.maxCount;
        } else {
          this.count++;
        }
      }
    },
    reduce() {
      if (this.popShow) {
        if (this.appointmentCount > 1) {
          this.appointmentCount--;
        } else {
          this.appointmentCount = 1;
        }
      } else {
        if (this.count > 1) {
          this.count--;
        } else {
          this.count = 1;
        }
      }
    },
    limitInput(e) {
      //限制只能输入两位数
      if (e.target.value.length > 2) {
        this.count = e.target.value.slice(0, 2);
      }
      if (e.target.value >= this.maxCount) {
        this.count = this.maxCount;
      }
    },
    //去订单确认
    toConfirm() {
      this.$router.push("/orderConfirm");
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>

<style scoped lang="stylus">
.selection-wrap {
  background-color: $bodyBg;
  display: flex;
  flex-direction: column;

  .content-box {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;

    .ct-item {
      background-color: $bgWhite;
      margin-bottom: 10px;

      .tt {
        display: flex;
        height: 90px;
        font-size: 28px;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        border-bottom: 2px solid $ttBd;

        &.none {
          border: none;
        }

        >h3 {
          color: $ipCl;
        }

        .rt {
          display: flex;
          align-items: center;

          .icon-seat {
            width: 40px;
            height: 40px;
            background-image: url('/static/images/select.png');
            background-repeat: no-repeat;
            background-size: contain;
            margin-left: 12px;
          }
        }

        .rt-cacl {
          flex: 200px 0 0;
          flex: 200px 0 0;
          display: flex;
          align-items: stretch;
          width: 200px;
          height: 48px;
          line-height: 44px;
          border: 2px solid $bdCl;

          .op-btn {
            width: 70px;
            text-align: center;
          }

          .input {
            width: 60px;
            text-align: center;
            border-left: 2px solid $bdCl;
            border-right: 2px solid $bdCl;
            outline: none;
          }
        }
      }

      .select-box {
        display: flex;
        padding: 25px 20px;
        flex-wrap: wrap;

        .select-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 210px 0 0;
          width: 210px;
          height: 70px;
          padding: 10px 35px;
          text-align: center;
          border: 2px solid $itemBd;
          border-radius: 35px;
          vertical-align: middle;
          margin-right: 20px;
          margin-bottom: 24px;

          &.on {
            border-color: $themeCl;
          }

          &.none {
            background-color: $noneBg;
          }
        }
      }
    }
  }

  .bottom-box {
    display: flex;
    align-items: center;
    flex: 98px 0 0;
    height: 98px;
    font-size: 32px;

    .total-box {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      height: 98px;
      flex: 1;
      padding-left: 24px;
      background-color: $bgWhite;

      .prices {
        display: flex;
        align-items: center;

        .now {
          font-size: 32px;
          color: $themeCl;
        }

        .old {
          font-size: 22px;
          color: $grayCl;
          text-decoration: line-through;
          margin-left: 8px;
        }
      }

      .discount {
        font-size: 18px;
        border: 1px solid $bdCl;
        color: $grayCl;
        border-radius: 4px;
        display: inline-block;
        padding: 5px 8px 4px;
        margin-top: 10px;
      }
    }

    .bottom-btn {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 98px;
      flex: 1;
      text-align: center;
      background-color: $themeCl;
      color: $fontClWhite;

      &:active {
        opacity: 0.8;
      }
    }
  }

  .pop-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);

    .pop-box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 540px;
      min-height: 494px;
      background: #fff;
      border-radius: 40px;

      .pop__top {
        position: relative;
        padding: 40px 0;
        border-bottom: 1px solid $lineCl;

        .pop__title {
          text-align: center;
          font-size: 30px;
          color: $titleCl;
        }

        .pop_colse_btn {
          position: absolute;
          right: 36px;
          top: 30px;
          width: 48px;
          height: 48px;
          background-image: url('/static/images/icon_off.png');
          background-repeat: no-repeat;
          background-size: contain;
        }
      }

      .scene {
        display: flex;
        justify-content: center;
        font-size: 24px;
        margin-top: 32px;

        .time {
          color: $grayCl;
          margin-right: 12px;
        }

        .price {
          color: $themeCl;
        }
      }

      .input__box {
        .input__item {
          font-size: 28px;
          text-align: center;
          margin-top: 38px;

          .fill {
            width: 340px;
            height: 80px;
            border-radius: 80px;
            border: 2px solid $bdCl;
            padding: 26px 0;
            text-align: center;
            box-sizing: border-box;
          }

          .rt-cacl {
            display: flex;
            align-items: stretch;
            margin: 0 auto;
            width: 340px;
            height: 80px;
            line-height: 78px;
            border-radius: 80px;
            border: 2px solid $bdCl;

            .op-btn {
              width: 80px;
              text-align: center;
              font-size: 32px;

              &.add {
                background-image: url('/static/images/shopping_icon_add_nor.png');
                background-repeat: no-repeat;
                background-size: 24px 24px;
                background-position: center;
              }

              &.reduce {
                background-image: url('/static/images/shopping_icon_add_disabled.png');
                background-repeat: no-repeat;
                background-size: 24px 24px;
                background-position: center;
              }
            }

            .input {
              width: 180px;
              text-align: center;
              border-left: 2px solid $bdCl;
              border-right: 2px solid $bdCl;
              outline: none;
            }
          }
        }
      }

      .pop__tips {
        line-height: 1.4;
        margin-top: 36px;
        font-size: 20px;
        color: $grayCl;
        transform: scale(0.8);
      }

      .pop__btn {
        width: 220px;
        height: 68px;
        line-height: 68px;
        background: $themeCl;
        border-radius: 34px;
        text-align: center;
        color: $fontClWhite;
        font-size: 28px;
        margin: 32px auto 42px;
      }
    }
  }
}
</style>