<template>
  <div class="observer-wrap">
    <v-header title="观演人" :haveBack="true"></v-header>
    <div class="observer-list">
      <ul>
        <li v-for="(item,index) in observerList" :key="index" @click="toEdit">
          <div class="ad-box">
            <div class="lf">
              <div class="user-info">
                <div class="name">威尔伯</div>
              </div>
              <div class="ad">身份证 421**********021</div>
            </div>
            <div class="rt">
              <div class="op-btn del" @click.stop="sureDelete(100)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom-btn" @click="toAdd"><i class="icon-add"></i>新增观演人</div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "observerList",
  components: {
    vHeader
  },
  data() {
    return {
      observerList: [, ,]
    };
  },
  methods: {
    //获取地址列表
    getList() {
      this.$api.observer
        .observerList({
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
        content: "确认删除该观演人？",
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
      this.$api.observer
        .deleteAdress({
          observerID: id
        })
        .then(res => {
          // 执行某些操作
          this.toast("删除成功");
        });
    },
    //去新增地址
    toAdd() {
      this.$router.push("/observerInfo");
    },
    //编辑地址
    toEdit() {
      this.$router.push({
        path: "/observerInfo",
        query: {
          observerID: 100
        }
      });
    }
  },
  mounted() {},
  activated() {}
};
</script>

<style scoped lang="stylus">
.observer-wrap {
  height: 100%;
  background-color: $bodyBg;

  .observer-list {
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

          .lf {
            flex: 1;

            .user-info {
              display: flex;
              align-items: center;
              color: $titleCl;
              font-size: 30px;
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