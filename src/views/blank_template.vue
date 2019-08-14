<template>
  <div class="address-wrap">
    <v-header title="我的" :haveBack="false"></v-header>
  </div>
</template>

<script>
import vHeader from "../../components/vHeader.vue";
export default {
  name: "addressList",
  components: {
    vHeader
  },
  data() {
    return {
    };
  },
  methods: {},
  mounted() {},
  activated() {}
};
</script>

<style scoped lang="stylus">
.address-wrap {
  height: 100%;
  background-color: $bodyBg;
}
</style>