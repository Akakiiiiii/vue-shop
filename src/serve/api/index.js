import ajax from './ajax'

// 1. 定义基础路径
const BASE_URL = 'https://www.fastmock.site/mock/62c0dc69e08fe4a212ec1b0c22bc1d6e/api/'
// Category 列表页面数据
export const getCategoryData = () => ajax(BASE_URL + 'homeApi/categories');

// Category 右边内容页面数据 需要根据左边点击传值
export const getCategoryDetailData = (params) => ajax(BASE_URL + 'homeApi/categoriesdetail' + params);