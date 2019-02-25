import {
  reqSlider,
  reqShopList
} from '../api'

import {
  REQ_SLIDER,
  REQ_SHOPLIST
} from './mutation-types'

export default {
  async getCategory ({commit}) {
    const result = await reqSlider()
    if (result.code === 0) {
      commit(REQ_SLIDER, result.data)
    } 
  },
  async getShopList ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShopList(latitude, longitude)
    if (result.code === 0) {
      commit(REQ_SHOPLIST, result.data)
    }
  }
}