import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Dashboard from '../views/dashboard/Dashboard.vue'

// 懒加载二级组件 Tarbar
const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Eat = () => import('../views/eat/Eat.vue');
const Cart = () => import('../views/cart/Cart.vue');


// 解决多次点击重复路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const MyOrder = () => import('../views/mine/Children/MyOrder');
// 订单商品详情页
// 商品详情页
const GoodsDetail = () => import('../components/goodsDetail/GoodsDetail.vue');

// 注册登录
Vue.use(Router)

const router = new Router({
    // 解决路由跳转页面没有置顶
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [{
            path: '/',
            redirect: '/dashboard',
            // 是否数据缓存
            meta: {
                keepAlive: true
            },
        }, {
            // 根页面 
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [{
                path: '/dashboard',
                redirect: '/dashboard/home',
                // 是否数据缓存
                meta: {
                    keepAlive: true
                },                                                 
            }, {                                                                               
                // 主页
                path: 'home',
                name: 'home',
                component: Home,
                // 是否数据缓存
                meta: {
                    keepAlive: true
                }
            }, {
                // 分类
                path: 'category',
                name: 'category',
                component: Category,
                // 是否数据缓存
                meta: {
                    keepAlive: true
                },
            }, {
                // 吃什么
                path: 'eat',
                name: 'eat',
                component: Eat,
                // 是否数据缓存
                meta: {
                    keepAlive: true
                }
            }, {
                // 购物车
                path: 'cart',
                name: 'cart',
                component: Cart,
                meta: {
                    keepAlive: true
                }
            }, {
                // 我的
                path: 'mine',
                name: 'mine',
                component: MyOrder,
            }, {
                // 商品详情
                path: '/goodsDetail',
                name: 'goodsDetail',
                component: GoodsDetail
            }]
        }
    ]
})


export default router