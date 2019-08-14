<template>
  <div class="address-wrap">
    <v-header title="购票人" :haveBack="true"></v-header>
    <div class="address-list">
      <ul>
        <li v-for="(item,index) in addressList" :key="index">
          <div class="ad-box" @click="choseSelect(item.id,index)">
            <div class="selection" :class="{'on':item.checked}"></div>
            <div class="lf">
              <div class="user-info">
                <div class="name">{{item.name}}</div>
                <div class="phone">{{item.phone}}</div>
              </div>
            </div>
            <div class="rt">
              <div class="op-btn edt" @click.stop="toEdit"></div>
              <div class="op-btn del" @click.stop="sureDelete(100)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom-btn" @click="toAdd">
      <i class="icon-add"></i>新增购票人
    </div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "addressListChose",
  components: {
    vHeader
  },
  data() {
    return {
      addressList: [
        {
          id: 1,
          name:"威尔伯",
          phone:"13147007000",
          checked: true
        },
        {
          id: 2,
          name:"威尔伯2",
          phone:"13147007001",
          checked: false
        },
        {
          id: 3,
          name:"威尔伯3",
          phone:"13147007002",
          checked: false
        }
      ]
    };
  },
  methods: {
    choseSelect(id, index) {
      this.addressList.forEach(item => {
        item.checked = false;
      });
      this.addressList[index].checked = true;
      localStorage.setItem("buyerInfo",JSON.stringify(this.addressList[index]))
      this.$router.back();
    },
    //获取地址列表
    getList() {
      this.$api.address
        .addressList({
          ticketId: ticketId
        })
        .then(res => {
          // 执行某些操作
          this.toast("请求了");
        });
    },
    //确认删除？
    sureDelete(id) {
      this.$createDialog({
        type: "confirm",
        title: "温馨提示",
        content: "确认删除该地址？",
        confirmBtn: {
          text: "确认",
          active: true,
          disabled: false,
          href: "javascript:;"
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {
          this.deleteAd(id);
        },
        onCancel: () => {}
      }).show();
    },
    //删除地址
    deleteAd(id) {
      this.$api.address
        .deleteAdress({
          addressID: id
        })
        .then(res => {
          // 执行某些操作
          this.toast("删除成功");
        });
    },
    //去新增地址
    toAdd() {
      this.$router.push("/buyerInfo");
    },
    //编辑地址
    toEdit() {
      this.$router.push({
        path: "/buyerInfo",
        query: {
          addressID: 100
        }
      });
    }
  },
  mounted() {},
  activated() {}
};
</script>

<style scoped lang="stylus">
.address-wrap {
  height: 100%;
  background-color: $bodyBg;

  .address-list {
    height: calc(100% - 186px);
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    ul {
      background-color: $bgWhite;
      padding-bottom: 44px;

      li {
        .ad-box {
          display: flex;
          align-items: center;
          padding: 30px 40px 30px 0;
          border-bottom: 1px solid $lineCl;
          margin-left: 20px;

          .selection {
            width: 40px;
            height: 40px;
            background-image: url('/static/images/profile_icon_option.png');
            background-repeat: no-repeat;
            background-size: contain;
            margin-right: 12px;

            &.on {
              background-image: url('/static/images/profile_icon_option_pre.png');
            }
          }

          .lf {
            flex: 1;

            .user-info {
              display: flex;
              align-items: center;
              color: $titleCl;
              font-size: 30px;

              .name {
                margin-right: 20px;
              }
            }

            .ad {
              font-size: 24px;
              color: $grayCl;
              margin-top: 16px;
            }
          }

          .rt {
            display: flex;
            align-items: center;

            .op-btn {
              width: 44px;
              height: 44px;
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              margin-right: 20px;

              &:last-child {
                margin-right: 0;
              }

              &.edt {
                background-image: url('/static/images/edt.png');
              }

              &.del {
                background-image: url('/static/images/delete.png');
              }
            }
          }
        }
      }
    }
  }

  .bottom-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    height: 98px;
    line-height: 98px;
    text-align: center;
    color: $themeCl;
    background-color: $bgWhite;

    .icon-add {
      display: inline-block;
      width: 28px;
      height: 28px;
      background-image: url('/static/images/icon_add.png');
      background-repeat: no-repeat;
      background-size: contain;
      margin-right: 8px;
    }

    &:active {
      opacity: 0.8;
    }
  }
}
</style>