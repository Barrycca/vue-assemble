<template>
  <div class="main-page">
    <div class="content">
      <router-view/>
    </div>
    <div class="tabs">
      <ul>
        <router-link to="/tab/index" tag="li">
          <i class="icon icon-index"></i>
          <p>首页</p>
        </router-link>
        <router-link to="/tab/mine" tag="li">
          <i class="icon icon-mine"></i>
          <p>我的</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  data: function() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="stylus">
.main-page {
  display: flex;
  flex-direction: column;
  font-size: 28px;

  .content {
    height: calc(100% - 98px);
    flex: 1;
  }

  .tabs {
    ul {
      display: flex;
      align-items: center;
      text-align: center;
      height: 98px;
      justify-content: center;
      background-color: #fff;

      li {
        flex: 1;

        &.router-link-active {
          i.icon {
            &.icon-index {
              background-image: url('../../../static/images/index_a.png');
            }

            &.icon-mine {
              background-image: url('../../../static/images/mine_a.png');
            }
          }
        }

        >p {
          font-size: 20px;
          margin-top: 7px;
        }

        i.icon {
          display: block;
          width: 44px;
          height: 44px;
          background-repeat: no-repeat;
          background-size: contain;
          margin: 0 auto;

          &.icon-index {
            background-image: url('../../../static/images/index.png');
          }

          &.icon-mine {
            background-image: url('../../../static/images/mine.png');
          }
        }
      }
    }
  }
}
</style>