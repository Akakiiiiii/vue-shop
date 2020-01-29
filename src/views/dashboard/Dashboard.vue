<template>
  <div id="dashboard">
    <van-tabbar v-model="active"
                :safe-area-inset-bottom=true
                class="active_tab"
                active-color="#75a342">
      <van-tabbar-item v-for="(item,index) in tabbars"
                       :key="index"
                       @click="tab(index,item.name)"
                       :info="item.name=='cart'?goodsNum:''">
        <span :class="active == index ? active:''">{{item.title}}</span>
        <template slot="icon"
                  slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>

    <!-- 缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

  </div>
</template>

<script type="text/javascript">
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: "DashBoard",
  created () {
    //通过路由跳转绑定Tabbar的选中
    this.tabbarSelected(this.$route.name);
  },
  data () {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: '首页',
          normal: require("@/images/tabbar/home_default.png"),
          active: require("@/images/tabbar/home_selected.png")
        },
        {
          name: "category",
          title: '分类',
          normal: require("@/images/tabbar/category_default.png"),
          active: require("@/images/tabbar/category_selected.png")
        },
        {
          name: "eat",
          title: '吃什么',
          normal: require("@/images/tabbar/eat_default.png"),
          active: require("@/images/tabbar/eat_selected.png"),
        },
        {

          name: "cart",
          title: '购物车',
          normal: require("@/images/tabbar/shoppingcart_default.png"),
          active: require("@/images/tabbar/shoppingcart_selected.png"),
          num: 5
        },
        {
          name: "mine",
          title: '我的',
          normal: require("@/images/tabbar/mine_default.png"),
          active: require("@/images/tabbar/mine_selected.png")
        }
      ]
    };
  },
  watch: {
    $route(nVal){
      this.tabbarSelected(nVal.name)
    }
  },
  components: {
  },
  mounted () {
    this._initData();
  },
  computed: {
    ...mapState(['shopCart']),
    goodsNum () {
      console.log('执行了++')
      let num = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        num += goods.num;
      });
      if (num > 0) {
        return num;
      }
    }
  },
  methods: {
    // 0. 延展mutations方法
    ...mapMutations(['INIT_SHOP_CART']),
    // 1.点击tabbar触发的方法
    tab (index, val) {
      this.$router.push(val);
    },
    // 2.初始化购物车数据
    _initData () {
      this.INIT_SHOP_CART();
    },
    tabbarSelected (item) {
      const mapType = {
        home: 0,
        category: 1,
        eat: 2,
        cart: 3,
        mine: 4
      }
      this.active = mapType[item]
    }
  }
}
</script>       
<style lang="less" scoped>
</style>
