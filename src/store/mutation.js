import {
  REQ_SLIDER,
  REQ_SHOPLIST
} from './mutation-types'

export default {
  [REQ_SLIDER] (state, data) {
    state.slides = data
  },
  [REQ_SHOPLIST] (state, data) {
    state.shopList = data
  }
}