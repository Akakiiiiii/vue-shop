<template>
  <div id="orderType">
    <div v-if="List.length>0" class="list-wrap" v-for="(item,index) in List">
      <div class="time">{{item.timer}} </div>
      <ul class="shop-wrap">
        <li v-for="(shop,index) in item.orderList">
          <img :src="shop.smallImage" alt="" :style="{width:'3.7rem',height:'3.7rem',margin:'0.4rem',backgroundColor:'#fff'}">
        </li>
      </ul>
      <div class="num">共{{item.allNum}}份商品</div>
    </div>
    <div v-if="!List.length"
         class="noDataPlaceHold">
      <img src="./../../../../images/mine/noData.jpeg"
           alt="">
      <span class="desc">暂时没有相关订单</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
export default {
  props: {
    orderType: String
  },
  mounted () {
    
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['orderList','orderListSuc']),
    List(){
      if(this.orderType === '1'){
        console.log('我是0数组')
        return this.orderListSuc
      }
      if(this.orderType === '0'||'2'){
        return this.orderList
      } 
      
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
#orderType {
  margin-top: 3rem;
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
    .desc {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .noData {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
.list-wrap {
  margin-top:1rem;
  font-size:0.5rem;
  background-color:#fff;
  .time {
    background-color:#fff;
    padding:0.5rem 0;
    padding-left:0.4rem;
  }
  .shop-wrap {
    display: flex;
    flex-wrap:wrap;
    margin:0 0.7rem;
    padding:0.4rem 0;
    background-color:#f5f5f5;
    border-radius: 0.5rem;
  }
  .num{
    background-color:#fff;
    padding:0.9rem 0;
    padding-left: 80%;
  }
}
</style>
