import { request } from "./request"



export function getDetail(iid) {
  return request(
    {
      url: '/detail',
      params: {
        iid

      }

    }

  )
}
export function getRemmend(iid) {
  return request({
    url: './recommend',



  })





}
export function getDebounce(fu, delay=5) {
  let time = null;

  return function (...args) {
    if (time) { clearTimeout(time) }

    time = setTimeout(
      () => {
        // console.log('----');
fu(...args)}, delay)}

}






export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title,
      this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice

  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}