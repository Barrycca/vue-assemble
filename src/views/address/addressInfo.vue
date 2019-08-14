<template>
  <div class="address-wrap">
    <v-header title="购票人地址" :haveBack="true"></v-header>
    <div class="input-wrap">
      <div class="input-box">
        <div class="input-item">
          <div class="labs">收货人</div>
          <div class="input">
            <input type="text" placeholder="请输入收货人姓名" v-model="consignee">
          </div>
        </div>
        <div class="input-item">
          <div class="labs">联系电话</div>
          <div class="input">
            <input type="text" placeholder="请输入收货人手机号码" v-model="phone">
          </div>
        </div>
        <div class="input-item">
          <div class="labs">所在地区</div>
          <div class="input" @click="showAddressPicker">
            <input type="text" placeholder="请选择所在地区" v-model="areaShow" disabled>
            <div class="icon-arr"></div>
          </div>
        </div>
        <div class="input-item">
          <div class="labs">详细信息</div>
          <div class="input">
            <input type="text" placeholder="请输入详细地址" v-model="areaAd">
          </div>
        </div>
      </div>
    </div>

    <div class="save-btn" @click="save">保存</div>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
import { provinceList, cityList, areaList } from "../../../static/data/area";
const addressData = provinceList;
addressData.forEach(province => {
  province.children = cityList[province.value];
  province.children.forEach(city => {
    city.children = areaList[city.value];
  });
});
export default {
  name: "addressInfo",
  components: {
    vHeader
  },
  data() {
    return {
      consignee: "",
      phone: "",
      areaShow: "",
      areaID: "",
      areaAd: ""
    };
  },
  methods: {
    //获取地址列表
    getInfo() {
      this.$api.address
        .addressInfo({
          ticketId: ticketId
        })
        .then(res => {
          // 执行某些操作
          this.toast("请求了");
        });
    },
    //保存
    save() {
      this.$api.address
        .changeAddress({
          consignee: this.consignee,
          phone: this.phone,
          areaID: this.areaID,
          areaAd: this.areaAd
        })
        .then(res => {
          // 执行某些操作
          this.toast("请求了");
        });
    },
    showAddressPicker() {
      this.addressPicker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.areaShow = selectedText.join(" ");
      this.areaID = selectedVal.join(", ");
    },
    cancelHandle() {
     
    }
  },
  mounted() {
    this.addressPicker = this.$createCascadePicker({
      title: "选择地址",
      data: addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    });
  },
  activated() {}
};
</script>

<style scoped lang="stylus">
.address-wrap {
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