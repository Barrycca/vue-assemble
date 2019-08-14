<template>
  <div class="observer-wrap">
    <v-header title="新增观演人" :haveBack="true"></v-header>
    <div class="input-wrap">
      <div class="input-box">
        <div class="input-item">
          <div class="labs">姓名</div>
          <div class="input">
            <input type="text" placeholder="请输入购票人姓名" v-model="name">
          </div>
        </div>
        <div class="input-item">
          <div class="labs">证件类型</div>
          <div class="input" @click="showCertifyPicker">
            <input type="text" placeholder="请选择证件类型" v-model="certifyShow" disabled>
            <div class="icon-arr"></div>
          </div>
        </div>
        <div class="input-item">
          <div class="labs">证件号码</div>
          <div class="input">
            <input type="text" placeholder="请输入证件号码" v-model="cerNum">
          </div>
        </div>
      </div>
    </div>

    <div class="save-btn" @click="save">保存</div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "observerInfoChose",
  components: {
    vHeader
  },
  data() {
    return {
      certifyList: [{ text: "身份证", value: 0 }, { text: "护照", value: 1 }],
      name: "",
      certifyShow: "",
      certifyID:"",
      cerNum: ""
    };
  },
  methods: {
    //获取地址列表
    getInfo() {
      this.$api.observer
        .observerInfo({
          ticketId: ticketId
        })
        .then(res => {
          // 执行某些操作
          this.toast("请求了");
        });
    },
    //保存
    save() {
      this.$api.observer
        .changeobserver({
          name: this.name,
          certifyID: this.certifyID,
          cerNum: this.cerNum
        })
        .then(res => {
          // 执行某些操作
          this.toast("请求了");
        });
    },
    showCertifyPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "证件类型",
          data: [this.certifyList],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
      }
      this.picker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.certifyShow = selectedText.join(" ");
      this.certifyID = selectedVal.join(", ");
    },
    cancelHandle() {}
  },
  mounted() {
    
  },
  activated() {}
};
</script>

<style scoped lang="stylus">
.observer-wrap {
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: $bodyBg;

  .input-wrap {
    flex: 1;

    .input-box {
      background-color: $bgWhite;
      padding-bottom: 48px;

      .input-item {
        display: flex;
        align-items: center;
        font-size: 30px;
        padding: 50px 20px 18px 0;
        margin-left: 20px;
        border-bottom: 1px solid $lineCl;

        .labs {
          color: $subCl;
          flex: 134px 0 0;
        }

        .input {
          flex: 1;
          display: flex;
          align-items: center;

          input {
            flex: 1;
          }

          .icon-arr {
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

  .save-btn {
    height: 80px;
    line-height: 80px;
    margin: 0 44px 180px;
    text-align: center;
    background-color: $themeCl;
    color: $fontClWhite;
    border-radius: 80px;
    font-size: 32px;

    &:active {
      opacity: 0.8;
    }
  }
}
</style>