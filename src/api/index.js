import ajax from './ajax'

const BASE = '/api'
// 请求地址
export const reqAddress = (latitude, longitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// 请求轮播
export const reqSlider = () => ajax(BASE + '/index_category')

// 请求商品列表
export const reqShopList = (latitude, longitude) => ajax(BASE + '/shops', {latitude, longitude})