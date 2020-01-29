<template>
  <div id="myOrder">
    <van-nav-bar :title="'我的订单'"
                 :border=false
                 :fixed="true"
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
    <van-tabs v-model="active"
              animated
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              ref="tabs"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>全部</span>
        </div>
        <OrderType :orderType="'2'"/>
      </van-tab>
      <!-- 待支付 -->
      <van-tab>
        <div slot="title">
          <span>待支付</span>
        </div>
        <OrderType :orderType="'0'"/>
      </van-tab>
      <!-- 待收货 -->
      <van-tab>
        <div slot="title">
          <span>待收货</span>
        </div>
        <OrderType :orderType="'1'" />
      </van-tab>
      <!-- 待评价-->
      <van-tab>
        <div slot="title">
          <span>待评价</span>
        </div>
        <OrderType :orderType="'1'"/>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/javascript">
import OrderType from './MyOrderChildren/OrderType'
export default {
  data () {
    return {
      typeArray: [],
      // 路由传递过来的数据 active
      active: 0
    }
  },
  components: {
    OrderType
  },
  methods: {
    onClickLeft () {
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#myOrder {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 3rem;
  z-index: 100;
  background-color: #f5f5f5;
  .van-icon {
    color: #dedede;
  }
}
</style>
